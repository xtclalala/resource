<script lang="ts" setup>
import { useWorker } from '@/hooks/useWorker'

const { work } = await useWorker()
const component = (await work.component()).default
</script>

<template>
    <keep-alive>
        <component :is="component" />
    </keep-alive>
</template>
