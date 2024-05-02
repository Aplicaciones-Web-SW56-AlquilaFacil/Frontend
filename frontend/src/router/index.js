import {createRouter, createWebHistory} from "vue-router";

import PropietaryCardComponent from "../premiumcards/components/propietary-card.component.vue";
import OrganizatorCardComponent from "../premiumcards/components/organizator-card.component.vue";
import TypePremiumComponent from "../premiumcards/components/type-premium.component.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/type-subscription', component: TypePremiumComponent, meta: {title: 'Type'},},
        {path: '/organizer', component: OrganizatorCardComponent, meta: {title: 'Organizer'},},
        {path: '/proprietary', component: PropietaryCardComponent, meta: {title: 'Proprietary'},},
        {path: '/', redirect: 'type-subscription'}
    ]
});

router.beforeEach((to, from, next)=>
{
    let baseTitle = 'Elegir Tipo de Subscription';
    document.title = `${baseTitle} | ${to.meta["title"]}`;
    next();
})

export default router

