<script setup>
import { Button } from 'primevue';

const props = defineProps({
    sections: {
        type: Array,
        default: () => [],
    },
    activeGroupId: {
        type: Object,
        default: () => ({ value: null }),
    },
});
const emit = defineEmits(['update:activeGroupId']);

function handlePreviousGroup() {
    console.log('Sections:', props.sections);
    console.log('ActiveGroupId:', props.activeGroupId);

    if (!props.sections.length || !props.activeGroupId.value) {
        console.error('Sections or activeGroupId is undefined');
        return;
    }

    const currentSection = props.sections.find((section) =>
        section.groups.some((group) => group.id === props.activeGroupId.value)
    );

    if (!currentSection) {
        console.error('Current section not found');
        return;
    }

    const currentGroupIndex = currentSection.groups.findIndex((group) => group.id === props.activeGroupId.value);

    if (currentGroupIndex > 0) {
        emit('update:activeGroupId', currentSection.groups[currentGroupIndex - 1].id);
    } else {
        alert('已經是第一題組');
    }
}

function handleNextGroup() {
    console.log('Sections:', props.sections);
    console.log('ActiveGroupId:', props.activeGroupId);

    if (!props.sections.length || !props.activeGroupId.value) {
        console.error('Sections or activeGroupId is undefined');
        return;
    }

    const currentSection = props.sections.find((section) =>
        section.groups.some((group) => group.id === props.activeGroupId.value)
    );

    if (!currentSection) {
        console.error('Current section not found');
        return;
    }

    const currentGroupIndex = currentSection.groups.findIndex((group) => group.id === props.activeGroupId.value);

    if (currentGroupIndex < currentSection.groups.length - 1) {
        emit('update:activeGroupId', currentSection.groups[currentGroupIndex + 1].id);
    } else {
        alert('已經是最後一題組');
    }
}
</script>

<template>
    <div class="flex justify-between mt-4 border-t">
        <Button outlined class="mt-4 flex items-center" label="上一題" icon="pi pi-arrow-left" @click="handlePreviousGroup" />
        <Button outlined class="mt-4 flex items-center" label="下一題" icon="pi pi-arrow-right" iconPos="right" @click="handleNextGroup" />
    </div>
</template>