package main

import (
	"embed"
	"github.com/wailsapp/wails/v2/pkg/logger"
	"github.com/wailsapp/wails/v2/pkg/options/mac"
	"github.com/wailsapp/wails/v2/pkg/options/windows"
	"log"

	"github.com/wailsapp/wails/v2"
	"github.com/wailsapp/wails/v2/pkg/options"
)

//go:embed frontend/dist
var assets embed.FS

func main() {
	// Create an instance of the app structure
	app := NewApp()

	// Create application with options
	err := wails.Run(&options.App{
		Title:             "File Resource Manager",
		Width:             1024,
		Height:            768,
		MaxWidth:          1280,
		MaxHeight:         740,
		DisableResize:     false,
		Fullscreen:        false,
		Frameless:         false,
		StartHidden:       false,
		HideWindowOnClose: false,
		Assets:            assets,
		LogLevel:          logger.DEBUG,
		BackgroundColour:  &options.RGBA{R: 27, G: 38, B: 54, A: 1},
		OnStartup:         app.startup,
		Bind: []interface{}{
			app,
		},
		CSSDragProperty: "--wails-draggable",
		CSSDragValue:    "drag",

		// Windows platform specific options
		Windows: &windows.Options{
			WebviewIsTransparent: false,
			WindowIsTranslucent:  false,
			DisableWindowIcon:    false,
		},
		Mac: &mac.Options{
			TitleBar:             mac.TitleBarHiddenInset(),
			Appearance:           mac.NSAppearanceNameDarkAqua,
			WebviewIsTransparent: true,
			WindowIsTranslucent:  true,
			About: &mac.AboutInfo{
				Title:   "File Resource Manager",
				Message: "© 2022 y1t <yuytxtc@163.com>",
			},
		},
	})

	if err != nil {
		log.Fatalf("Error: %s", err.Error())
	}
}
