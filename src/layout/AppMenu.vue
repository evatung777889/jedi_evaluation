<script setup>
import { ref } from 'vue';

import AppMenuItem from './AppMenuItem.vue';

const model = ref([
    {
        items: [
            { label: '問卷管理', icon: 'pi pi-fw pi-book', to: '/' },
            { label: '回饋', icon: 'pi pi-fw pi-comment', to: '/feedback' },
            { label: '公告', icon: 'pi pi-fw pi-bell', to: '/announcement' },
            { label: '資源', icon: 'pi pi-fw pi-folder', to: '/resources' },
            { label: '帳號管理', icon: 'pi pi-fw pi-user', to: '/account-management' }
        ]
    }
]);
</script>

<template>
    <ul class="layout-menu">
        <template v-for="(item, i) in model" :key="item">
            <app-menu-item v-if="!item.separator" :item="item" :index="i"></app-menu-item>
            <li v-if="item.separator" class="menu-separator"></li>
        </template>
    </ul>
</template>

<style lang="scss" scoped></style>
