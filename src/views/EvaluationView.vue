<script setup>
import EvaluationBtn from '@/components/evaluation/EvaluationBtn.vue';
import EvaluationMain from '@/components/evaluation/EvaluationMain.vue';
import EvaluationMarkdown from '@/components/evaluation/EvaluationMarkdown.vue';
import EvaluationSidebar from '@/components/evaluation/EvaluationSidebar.vue';
import EvaluationToolbar from '@/components/evaluation/EvaluationToolbar.vue';
import { fetchEvaluationData } from '@/service/evaluationService';
import { computed, ref } from 'vue';


const sections = ref(fetchEvaluationData());
const activeGroupId = ref(sections.value[0].groups[0].id);
const activeGroup = computed(() => {
    for (const s of sections.value) {
        const g = s.groups.find((g) => g.id === activeGroupId.value);
        if (g) return g;
    }
    return null;
});
function recomputeProgress() {}

function handleToolbarAction(code) {
    if (code === 'submit') {
        const missing = [];
        sections.value.forEach((sec) => sec.groups.forEach((g) => g.questions.filter((q) => q.required && !q.answer).forEach((q) => missing.push(`${q.code} ${q.title}`))));
        if (missing.length) alert('以下必填尚未填答:\n' + missing.join('\n'));
        else alert('送出成功 (示意)');
    }
}
</script>

<template>
    <div class="flex flex-col bg-white">
        <div class="flex flex-1 overflow-hidden">
            <div class="flex flex-1 flex-col">
                <div class="flex flex-1 overflow-hidden">
                    <aside class="w-64 shrink-0 border-r p-4 overflow-y-auto">
                        <EvaluationSidebar :sections="sections" :activeGroupId="activeGroupId" @select-group="activeGroupId = $event" />
                    </aside>
                    <main class="flex-1 p-6">
                        <header class="flex items-center justify-between py-3 bg-surface-0 z-10">
                            <h1 class="text-xl font-semibold text-[#005C74]">114 數位韌性自評表old2</h1>
                            <EvaluationToolbar @action="handleToolbarAction" />
                        </header>
                        <EvaluationMarkdown/>
                        <EvaluationMain :group="activeGroup" @update="recomputeProgress" />
                        <EvaluationBtn :sections="sections.value || []" :activeGroupId="activeGroupId || { value: null }" />
                    </main>
                </div>
            </div>
        </div>
    </div>
</template>
