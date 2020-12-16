import vueRouter from 'vue-router'
import Customer from './components/Customer'
import Products from './components/Products'
import App from './App'

const router = new vueRouter({
    mode: 'history',
    base: __dirname,
    routes: [{
            path: '/',
            name: "root",
            component: App
        },
        {
            path: '/customer/:username',
            name: "customer",
            component: Customer
        },
        {
            path: '/products',
            name: 'products',
            component: Products
        }
    ]
})
export default router