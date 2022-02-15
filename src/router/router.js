import Vue from 'vue'
import Router from 'vue-router'
import Home from "@/Views/Home";

Vue.use(Router);

const router=new Router({
    routes:[
        {
            path:'/',
            redirect:'index'
        },
        {
            path:'/home',
            name:'home',
            component:Home,
            children :[
                {
                    path:'/index',
                    name:'index',
                    component:()=>import('../Views/index'),
                    children:[
                        {
                            path:'/index',
                            name:'videolist',
                            component:()=>import('../components/index/VideoList')
                        }
                    ]
                },
                {
                    path:'/follow',
                    name:'follow',
                    component:()=>import('../Views/follow/follow')
                },
            ]
        },


    ]
})
export default  router
