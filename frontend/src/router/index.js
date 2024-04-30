import {createRouter, createWebHistory} from "vue-router";
import CreateSpaceFinishComponent from "../alquila-facil/pages/create-space-finish.component.vue";
import CreateSpacePostComponent from "../alquila-facil/pages/create-space-post.component.vue";
import CreateSpacePriceComponent from "../alquila-facil/pages/create-space-price.component.vue";
import CreateSpaceTitleComponent from "../alquila-facil/pages/create-space-title.component.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/create-space-title', component: CreateSpaceTitleComponent},
        { path: '/create-space-post', component: CreateSpacePostComponent},
        { path: '/create-space-price', component: CreateSpacePriceComponent},
        { path: '/create-space-finish', component: CreateSpaceFinishComponent},
    ]
});

export default router;