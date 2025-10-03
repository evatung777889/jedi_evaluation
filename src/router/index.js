import EvaluationView from '@/views/EvaluationView.vue';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(),
    routes: [{ path: '/', name: 'evaluation', component: EvaluationView }]
});

export default router;
