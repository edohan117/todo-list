import Home from "@/pages/Home.vue";
import TodoItem from "@/pages/TodoItem.vue";
import {createRouter, createWebHistory} from "vue-router";

const routes = [
    {path: '/', component: Home},
    {path: '/todoItem', component: TodoItem},
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;