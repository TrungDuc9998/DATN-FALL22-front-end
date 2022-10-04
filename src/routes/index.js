import Home from '../pages/Home/index'
import Category from '../pages/Category/index'
import Login from '../pages/login/Login'
const publicRoutes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/category',
        component: Category
    }
    ,
    {
        path: '/login',
        component: Login,
        layout: null
    }
]

const privateRoutes = [

]

export { publicRoutes, privateRoutes }