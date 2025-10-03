<script setup>
const props = defineProps({ question: Object });
const emit = defineEmits(['update']);
import '@/assets/layout/_evaluation.scss';
import { ref } from 'vue';

function updateAnswer(val) {
    emit('update', { id: props.question.id, field: 'answer', value: val });
}
function updateRemark(val) {
    emit('update', { id: props.question.id, field: 'remark', value: val });
}

const isExpanded = ref(false);
function toggleExpand() {
    isExpanded.value = !isExpanded.value;
}
</script>

<template>
    <div class="border rounded-md mb-4 bg-surface-0">
        <div
            :class="{
                'flex items-start justify-between p-3 border-b cursor-pointer': true,
                'bg-filled': question.answer,
                'bg-unfilled': !question.answer
            }"
            @click="toggleExpand"
        >
            <div class="font-medium flex-1">
                <span :class="question.required ? 'question-type' : 'optional-label'">{{ question.required ? '必填' : '選填' }}</span>
                <span>{{ question.code }} {{ question.title }}</span>
            </div>
            <div :class="question.answer ? 'status-filled' : 'status-unfilled'">
                <span v-if="question.answer" class="text-green-600 font-bold"><i class="pi pi-check mr-2 font-bold"></i>已填寫</span>
                <span v-else class="text-gray-600 font-bold"><i class="pi pi-exclamation-circle mr-2 font-bold"></i>未填寫</span>
            </div>
        </div>
        <div v-show="isExpanded" class="p-4 space-y-3">
            <p v-if="question.description" class="text-sm text-muted-color leading-relaxed mb-2">{{ question.description }}</p>
            <template v-if="question.type === 'radio'">
                <div class="flex items-center gap-4 text-sm mb-2">
                    <div
                        class="flex items-center gap-2 rounded px-8 py-2 border"
                        :class="question.answer === 'full' ? 'border-[#EAB308]' : 'border-[#10b981]'"
                    >
                        <RadioButton :inputId="question.id + '-full'" :name="'ans-' + question.id" value="full" :modelValue="question.answer" @update:modelValue="updateAnswer" class="custom-radio" />
                        <label :for="question.id + '-full'" class="custom-radio-label">✔ 符合</label>
                    </div>
                    <div
                        class="flex items-center gap-2 rounded px-8 py-2 border"
                        :class="question.answer === 'partial' ? 'border-[#EAB308]' : 'border-[#10b981]'"
                    >
                        <RadioButton :inputId="question.id + '-partial'" :name="'ans-' + question.id" value="partial" :modelValue="question.answer" @update:modelValue="updateAnswer" class="custom-radio" />
                        <label :for="question.id + '-partial'" class="custom-radio-label">△ 未完全符合</label>
                    </div>
                </div>
            </template>
            <template v-if="question.type === 'textarea'">
                <div>
                    <Textarea :id="question.id + '-textarea'" :modelValue="question.answer" @update:modelValue="updateAnswer" autoResize rows="3" class="w-full" />
                </div>
            </template>
        </div>
    </div>
</template>
