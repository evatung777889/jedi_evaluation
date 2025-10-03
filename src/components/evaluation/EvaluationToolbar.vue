<script setup>
import { ref } from 'vue';
const overlay = ref(null);
const emit = defineEmits(['action']);
const actions = [
    { label: '匯出問卷', code: 'export', icon: 'pi pi-upload' },
    { label: '歷史紀錄', code: 'history', icon: 'pi pi-clock' },
    { label: '暫存問卷', code: 'draft', icon: 'pi pi-save' },
    { label: '提交問卷', code: 'submit', icon: 'pi pi-send' },
    { label: '離開問卷', code: 'exit', icon: 'pi pi-sign-out', class: 'text-red-500' }
];
function handle(a) {
    emit('action', a.code);
    overlay.value?.hide();
}
</script>

<template>
    <div class="flex items-center justify-end gap-2">
        <Button label="操作" icon="pi pi-cog" severity="secondary" outlined size="small" @click="overlay.toggle($event)" />
        <OverlayPanel ref="overlay">
            <ul class="min-w-[160px]">
                <li v-for="a in actions" :key="a.code" :class="['px-2 py-1 rounded flex items-center gap-2 cursor-pointer text-sm hover:bg-surface-100', a.class || '']" @click="handle(a)">
                    <i :class="a.icon" class="text-base"></i>
                    <span>{{ a.label }}</span>
                </li>
            </ul>
        </OverlayPanel>
    </div>
</template>
