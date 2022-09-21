package main

import (
	"context"
	"github.com/radovskyb/watcher"
	wailsruntime "github.com/wailsapp/wails/v2/pkg/runtime"
	"os"
	gorunrime "runtime"
)

// App struct
type App struct {
	ctx          context.Context
	err          string
	watcher      *watcher.Watcher
	lastRightDir string
	watchers     []WatcherInfo
}

type FileParts struct {
	Dir       string
	Name      string
	Extension string
}

type FileInfo struct {
	Dir       string
	Name      string
	Extension string
	IsDir     bool
	Size      int64
	Modtime   string
}

type WatcherInfo struct {
	Path        string
	WatcherType int // if 0, a nonrecursive watch. 1 is a AddRecursive watch
	SigName     string
}

// NewApp creates a new App application struct
func NewApp() *App {
	return &App{}
}

// startup is called when the app starts. The context is saved
// so we can call the runtime methods
func (a *App) startup(ctx context.Context) {
	a.ctx = ctx
	a.watcher = watcher.New()
	a.watchers = make([]WatcherInfo, 0, 0)
	go func() {
		for {
			select {
			case event := <-a.watcher.Event:
				found := false
				for i := 0; i < len(a.watchers); i++ {
					if a.watchers[i].Path == event.Path {
						wailsruntime.EventsEmit(a.ctx, a.watchers[i].SigName, event.Path)
						found = true
					}
				}

				//
				// It's not the left or right directory or watchers list. Remove it.
				//
				if !found && a.DirExists(event.Path) {
					a.watcher.Remove(event.Path)
				}
			case err := <-a.watcher.Error:
				a.err = err.Error()
			case <-a.watcher.Closed:
				return
			}
		}
	}()
}

func (a *App) DirExists(path string) bool {
	a.err = ""
	dstat, err := os.Stat(path)
	if err != nil {
		a.err = err.Error()
		return false
	}
	return dstat.IsDir()
}

func (a *App) Os() string {
	return gorunrime.GOOS
}

func (a *App) ReadFile(path string) string {
	data, err := os.ReadFile(path)
	if err != nil {
		return ""
	}
	return string(data)
}

func (a *App) WriteFile(value, path string) string {
	return gorunrime.GOOS
}
