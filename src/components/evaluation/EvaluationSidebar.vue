<script setup>
import Accordion from 'primevue/accordion';

const { sections, activeGroupId } = defineProps({ sections: Array, activeGroupId: String });
const emit = defineEmits(['select-group']);
</script>

<template>
    <div class="card">
        <h3 class="text-2xl font-semibold mb-5 ml-3 mt-3">題組</h3>
        <Accordion value="0">
            <AccordionPanel v-for="section in sections" :key="section.id" :value="section.id">
                <AccordionHeader>{{ section.code }}. {{ section.title }}</AccordionHeader>
                <AccordionContent>
                    <ul class="pl-2 space-y-1">
                        <li
                            v-for="g in section.groups"
                            :key="g.id"
                            :class="['flex items-center justify-between text-sm rounded cursor-pointer px-2 py-1', g.id === activeGroupId ? 'bg-primary/10 text-primary font-medium' : 'hover:bg-surface-100']"
                            @click="emit('select-group', g.id)"
                        >
                            <span>{{ g.code }} {{ g.title }}</span>
                        </li>
                    </ul>
                </AccordionContent>
            </AccordionPanel>
        </Accordion>
    </div>
</template>
