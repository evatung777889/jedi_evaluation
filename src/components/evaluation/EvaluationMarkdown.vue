<script setup>
import { fetchMockDownData } from '@/service/markDownService';
import Panel from 'primevue/panel';
import { ref } from 'vue';
import '@/assets/layout/_evaluation.scss';

const markData = ref(fetchMockDownData());
</script>

<template>
    <div class="card mt-3 mb-5">
        <Panel header="Markdown 文件說明" toggleable>
            <pre style="white-space:pre-wrap;word-break:break-word;">{{ markData }}</pre>
        </Panel>
    </div>
</template>
