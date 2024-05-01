import {createRouter, createWebHistory} from "vue-router";
import PropertyDetailComponent from "../alquila-facil/content/property-detail.component.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/property-detail', component: PropertyDetailComponent}
    ]
});

export default router;