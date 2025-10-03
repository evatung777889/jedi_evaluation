<script setup>
import { useLayout } from "@/layout/composables/layout";
import { ref } from "vue";
import AppConfigurator from "./AppConfigurator.vue";

const { toggleMenu } = useLayout();
const isMenuCollapsed = ref(false);

function handleMenuToggle() {
  toggleMenu();
  isMenuCollapsed.value = !isMenuCollapsed.value;
}

const overlay = ref(null);
const emit = defineEmits(['action']);
const actions = [
    { label: '個人資料', code: 'export', icon: 'pi pi-upload' },
    { label: '登出', code: 'history', icon: 'pi pi-clock' },
];
function handle(a) {
    emit('action', a.code);
    overlay.value?.hide();
}

</script>

<template>
  <div class="layout-topbar">
    <!-- 左側主標題與開合選單按鈕 -->
    <div class="layout-topbar-logo-container">
      <router-link to="/" class="layout-topbar-logo">
        <span>背景資料彙整平台</span>
      </router-link>
      <Button
        class="layout-menu-button"
        :icon="isMenuCollapsed ? 'pi pi-arrow-right' : 'pi pi-arrow-left'"
        :label="isMenuCollapsed ? '展開' : '收攏'"
        @click="handleMenuToggle"
      />
    </div>
    <!-- 右側功能按鈕 -->
    <div class="layout-topbar-actions">
      <div class="layout-config-menu">
        <div class="relative">
          <button type="button" class="topbar-menu">
            <i class="topbar-menu-icon pi pi-sitemap"></i>
            <span>網站地圖</span>
          </button>
          <button type="button" class="topbar-menu" @click="overlay.toggle($event)">
            <i class="topbar-menu-icon pi pi-user"></i>
            <span>受檢機關</span>
            <i class="pi pi-angle-down"></i>
          </button>
          <OverlayPanel ref="overlay">
            <ul class="min-w-[160px]">
                <li v-for="a in actions" :key="a.code" :class="['px-2 py-1 rounded flex items-center gap-2 cursor-pointer text-sm hover:bg-surface-100', a.class || '']" @click="handle(a)">
                    <i :class="a.icon" class="text-base"></i>
                    <span>{{ a.label }}</span>
                </li>
            </ul>
          </OverlayPanel>
          <button
            v-styleclass="{
              selector: '@next',
              enterFromClass: 'hidden',
              enterActiveClass: 'animate-scalein',
              leaveToClass: 'hidden',
              leaveActiveClass: 'animate-fadeout',
              hideOnOutsideClick: true,
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
