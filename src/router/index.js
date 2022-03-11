import { createRouter, createWebHashHistory } from "vue-router";
import Layout from "../layout/index.vue";
import Home from "../views/Home/index.vue";
import SongList from "../views/SongList/index.vue";
import NotFound from "../views/NotFound/index.vue";
const routes = [{
        path: "/",
        name: "LayoutHome",
        component: Layout,
        redirect: '/home',
        children: [{
            path: "/home",
            name: "Home",
            component: Home,
        }, ],
    },
    {
        path: "/songlist",
        name: "LayoutSonglist",
        component: Layout,
        children: [{
            path: "songlist",
            name: "SongList",
            component: SongList,
        }, ],
    },
    { path: "/:pathMatch(.*)*", name: "not-found", component: NotFound },
];
const router = createRouter({
    history: createWebHashHistory(),
    routes,
});
export default router;