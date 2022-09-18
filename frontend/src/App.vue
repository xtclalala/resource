<script lang="ts" setup>
import { HelloWorld } from './components'
import YLayout from '@/layout/YLayout'
import Workbench from '@/views/Workbench'
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
              <!--              <img id="logo" alt="Wails logo" src="./assets/images/logo-universal.png" />-->
              <!--              <HelloWorld />-->
              <Workbench />
            </YLayout>
          </n-notification-provider>
        </n-dialog-provider>
      </n-message-provider>
    </n-loading-bar-provider>
    <!--    </n-theme-editor>-->
  </n-config-provider>
</template>
