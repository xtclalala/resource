<script lang="ts" setup>
import YLayout from '@/layout/YLayout'
import CtrlView from '@/views/CtrlView.vue'
import { zhCN, lightTheme } from 'naive-ui'
import {
    NGlobalStyle,
    NLoadingBarProvider,
    NMessageProvider,
    NDialogProvider,
    NNotificationProvider,
} from 'naive-ui'

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
                            <Suspense>
                                <!--                                <component :is="work.component" />-->
                                <CtrlView />
                                <template #fallback> Loading... </template>
                            </Suspense>
                        </YLayout>
                    </n-notification-provider>
                </n-dialog-provider>
            </n-message-provider>
        </n-loading-bar-provider>
        <!--    </n-theme-editor>-->
    </n-config-provider>
</template>
