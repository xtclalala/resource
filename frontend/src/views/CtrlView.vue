<script lang="ts" setup>
import { useWorker } from '@/hooks/useWorker'

const { component } = await useWorker()
</script>

<template>
    <keep-alive>
        <component :is="component" />
    </keep-alive>
</template>
