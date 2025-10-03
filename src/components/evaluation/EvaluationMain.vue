<script setup>
import EvaluationQuestion from './EvaluationQuestion.vue';
const props = defineProps({ group: Object });
const emit = defineEmits(['update']);
function handleQuestionUpdate(payload) {
    const { id, field, value } = payload;
    const q = props.group?.questions.find((q) => q.id === id);
    if (q) q[field] = value;
    emit('update');
}
</script>

<template>
    <div v-if="group">
        <div class="text-lg font-semibold mb-4 flex items-center">
            <span class="mr-2">{{ group.code }}. {{ group.title }}</span>
        </div>
        <div v-if="group.questions.length === 0" class="text-sm text-muted-color">目前沒有題目。</div>
        <EvaluationQuestion v-for="q in group.questions" :key="q.id" :question="q" @update="handleQuestionUpdate" />
    </div>
    <div v-else class="text-muted-color">請從左側選擇一個題組。</div>
</template>
