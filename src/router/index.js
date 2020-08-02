import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const routes = [
  { path: '/',   component: () => import ('components/discc')},
    { path: '/discc',   component: () => import ('components/discc')},
    { path: '/playlists',component: () => import ('components/playlists')},
    // { path: '/playlist', component: playlist },
    { path: '/song',component: () => import ('components/song') },
    { path: '/mvs', component: () => import ('components/mvs' )},
    { path: '/result', component: () => import ('components/result' )},
    { path: '/musicdetails', component: () => import ('components/musicdetails' )},
    { path: '/mvdetails', component: () => import ('components/mvdetails' )},
  
  ]

const router = new Router({
    routes
})

export default router