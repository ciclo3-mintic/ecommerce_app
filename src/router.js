import vueRouter from 'vue-router'
import Customer from './components/Customer'
import Products from './components/Products'
import SetCustomer from './components/SetCustomer'
import CustomerAuth from './components/CustomerAuth'
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
        },
        {
            path: '/customer/update/:username',
            name: 'setcustomer',
            component: SetCustomer
        },
        {
            path: '/customer/auth',
            name: "customerauth",
            component: CustomerAuth
        }
    ]
})
export default router