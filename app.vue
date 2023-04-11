<template>
    <v-app>
        <v-btn
            :icon="uiStore.rail ? 'mdi-flower': 'mdi-home'"
            @click="uiStore.switchRail()"/>

        {{ uiStore.rail }}
    </v-app>
</template>

<script lang="ts" setup>
import {useUIStore} from '@/stores/ui'

const uiStore = useUIStore()
</script>