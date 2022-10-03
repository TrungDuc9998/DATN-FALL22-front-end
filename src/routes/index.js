import Home from '../pages/Home/index'
import Category from '../pages/Category/index'
const publicRoutes = [
    {
        path:'/',
        component: Home
    },
    {
        path: '/category',
        component: Category
    }
]

const privateRoutes = [

]

export {publicRoutes,privateRoutes}