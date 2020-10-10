import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes: [{
            path: '/',
            redirect: '/product'
        },
        {
            path: '/product',
            component: () => import('../views/Product.vue'),
            meta: {
                header: true,
                content: true
            }

        },
        {
            path: '/comment',
            component: () => import('../views/Comment.vue'),
            meta: {
                header: true,
                content: true
            },

            children: [{
                    path: 'all',
                    component: () => import('../views/All.vue'),
                    meta: {
                        header: true,
                        content: true
                    }

                },
                {
                    path: 'true',
                    component: () => import('../views/True.vue'),
                    meta: {
                        header: true,
                        content: true
                    }

                },
                {
                    path: 'false',
                    component: () => import('../views/False.vue'),
                    meta: {
                        header: true,
                        content: true
                    }

                }
            ]
        },
        {
            path: '/sell',
            component: () => import('../views/Sell.vue'),
            meta: {
                header: true,
                content: true
            }

        },
        {
            path: '/detail',
            component: () => import('../views/Detail.vue'),
            meta: {
                header: false,
                content: false
            }
        }

    ],
    linkActiveClass: 'active'
})

export default router