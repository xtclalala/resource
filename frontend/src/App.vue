<script lang="ts" setup>
import { HelloWorld } from './components'
import YLayout from '@/layout/YLayout'
import { zhCN, lightTheme } from 'naive-ui'
</script>

<template>
  <n-config-provider :theme="lightTheme" :locale="zhCN">
    <!--    <n-theme-editor>-->
    <n-global-style />
    <n-loading-bar-provider>
      <n-message-provider>
        <n-dialog-provider>
          <n-notification-provider>
            <YLayout>
              <img id="logo" alt="Wails logo" src="./assets/images/logo-universal.png" />
              <HelloWorld />
            </YLayout>
          </n-notification-provider>
        </n-dialog-provider>
      </n-message-provider>
    </n-loading-bar-provider>
    <!--    </n-theme-editor>-->
  </n-config-provider>
</template>

<style>
#logo {
  display: block;
  width: 50%;
  height: 50%;
  margin: auto;
  padding: 10% 0 0;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-origin: content-box;
}
</style>
