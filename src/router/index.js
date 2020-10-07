import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const router =  new VueRouter({
    mode:'history',
    routes:[
        {
            path:'/',
            redirect:'/product'
        },
        {
            path:'/product',
            component:()=>import('../views/Product.vue')
        },
        {
            path:'/comment',
            component:()=>import('../views/Comment.vue'),
            children:[
               {
                   path:'all',
                   component:()=>import('../views/All.vue')
               },
               {
                path:'true',
                component:()=>import('../views/True.vue')
                },
                {
                    path:'false',
                    component:()=>import('../views/False.vue')
                }
            ]
        },
        {
            path:'/sell',
            component:()=>import('../views/Sell.vue')
        },

    ],
    linkActiveClass:'active'
})

export default router