<script setup>
import { useLayout } from '@/layout/composables/layout';
import { ref } from 'vue';
import AppConfigurator from './AppConfigurator.vue';

const { toggleMenu } = useLayout();
const isMenuCollapsed = ref(false);

function handleMenuToggle() {
    toggleMenu();
    isMenuCollapsed.value = !isMenuCollapsed.value;
}
</script>

<template>
    <div class="layout-topbar">
        <!-- 左側主標題與開合選單按鈕 -->
        <div class="layout-topbar-logo-container">
            <router-link to="/" class="layout-topbar-logo">
                <span>背景資料彙整平台</span>
            </router-link>
            <Button class="layout-menu-button" :icon="isMenuCollapsed ? 'pi pi-arrow-right' : 'pi pi-arrow-left'" :label="isMenuCollapsed ? '展開' : '收攏'" @click="handleMenuToggle" />
        </div>
        <!-- 右側功能按鈕 -->
        <div class="layout-topbar-actions">
            <div class="layout-config-menu">
                <div class="relative">
                    <button type="button" class="topbar-menu">
                        <i class="topbar-menu-icon pi pi-sitemap"></i>
                        <span>網站地圖</span>
                    </button>
                    <button type="button" class="topbar-menu">
                        <i class="topbar-menu-icon pi pi-user"></i>
                        <span>受檢機關</span>
                        <i class="pi pi-angle-down"></i>
                    </button>
                    <button
                        v-styleclass="{
                            selector: '@next',
                            enterFromClass: 'hidden',
                            enterActiveClass: 'animate-scalein',
                            leaveToClass: 'hidden',
                            leaveActiveClass: 'animate-fadeout',
                            hideOnOutsideClick: true
                        }"
                        type="button"
                        class="layout-topbar-action layout-topbar-action-highlight"
                    >
                        <i class="pi pi-palette"></i>
                    </button>
                    <AppConfigurator />
                </div>
            </div>
        </div>
    </div>
</template>
