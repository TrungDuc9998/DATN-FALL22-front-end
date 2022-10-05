import Home from '../pages/Home/index'
import Category from '../pages/Category/index'
import Product from '../pages/Product/product'

const publicRoutes = [
    {
        path:'/',
        component: Home
    },
    {
        path: '/category',
        component: Category
    },
    {
        path: '/product',
        component: Product
    }
]

const privateRoutes = [

]

export {publicRoutes,privateRoutes}