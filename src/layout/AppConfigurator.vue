<script setup>
import { useLayout } from '@/layout/composables/layout';
import { updatePreset } from '@primeuix/themes';
import { ref } from 'vue';

const { layoutConfig } = useLayout();

const primaryColors = ref([
    { name: 'green', palette: { 50: '#f0fdf4', 100: '#dcfce7', 200: '#bbf7d0', 300: '#86efac', 400: '#4ade80', 500: '#065F46', 600: '#16a34a', 700: '#15803d', 800: '#166534', 900: '#14532d', 950: '#052e16' } },
    { name: 'blue', palette: { 50: '#eff6ff', 100: '#dbeafe', 200: '#bfdbfe', 300: '#93c5fd', 400: '#60a5fa', 500: '#3E59BC', 600: '#2563eb', 700: '#1d4ed8', 800: '#1e40af', 900: '#1e3a8a', 950: '#172554' } }
]);

function applyTheme(color) {
    updatePreset({
        semantic: {
            primary: color.palette
        }
    });
}

function updateColors(type, color) {
    if (type === 'primary') {
        console.log('Applying primary color:', color);
        layoutConfig.primary = color.name;
        applyTheme(color);
        if (color.name === 'green') {
            console.log('Setting green theme variables');
            document.documentElement.style.setProperty('--menu-button-bg', '#CCFBF1');
            document.documentElement.style.setProperty('--menu-button-color', '#115E59');
            document.documentElement.style.setProperty('--topbar-background', 'linear-gradient(to top, #008479, #005A73)');
            document.documentElement.style.setProperty('--primary-color-light', '#D1EDE8');
            document.documentElement.style.setProperty('--panel-color', '#F1FCF0');
        } else if (color.name === 'blue') {
            console.log('Setting blue theme variables');
            document.documentElement.style.setProperty('--menu-button-bg', '#D9EAFF');
            document.documentElement.style.setProperty('--menu-button-color', '#2F5983');
            document.documentElement.style.setProperty('--topbar-background', 'linear-gradient(to top, #20617A, #414F8F)');
            document.documentElement.style.setProperty('--primary-color-light', '#D1D5ED');
            document.documentElement.style.setProperty('--panel-color', '#F0F0FC');
        }
    }
}
</script>

<template>
    <div
        class="config-panel hidden absolute top-[3.25rem] right-0 w-64 p-4 bg-surface-0 dark:bg-surface-900 border border-surface rounded-border origin-top shadow-[0px_3px_5px_rgba(0,0,0,0.02),0px_0px_2px_rgba(0,0,0,0.05),0px_1px_4px_rgba(0,0,0,0.08)]"
    >
        <div class="flex flex-col gap-4">
            <div>
                <span class="text-sm text-muted-color font-semibold">Primary</span>
                <div class="pt-2 flex gap-2 flex-wrap justify-between">
                    <button
                        v-for="primaryColor of primaryColors"
                        :key="primaryColor.name"
                        type="button"
                        :title="primaryColor.name"
                        @click="updateColors('primary', primaryColor)"
                        :class="['border-none w-5 h-5 rounded-full p-0 cursor-pointer outline-none outline-offset-1', { 'outline-primary': layoutConfig.primary === primaryColor.name }]"
                        :style="{ backgroundColor: `${primaryColor.name === 'noir' ? 'var(--text-color)' : primaryColor.palette['500']}` }"
                    ></button>
                </div>
            </div>
        </div>
    </div>
</template>
