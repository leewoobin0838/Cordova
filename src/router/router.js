import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

let router = new VueRouter({
  routes : [
    {
        path: '/',
        name: 'CameraTab1',
        component: () => import("../views/CameraTab"),
    },
    {
        path: '/gallery',
        name: 'GalleryTab1',
        component: () => import("../views/GalleryTab"),
    },
    {
        path: '/etc',
        name: 'EtcTab1',
        component: () => import("../views/EtcTab"),
    },
]
})
export default router