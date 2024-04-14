import IRoute from '@interfaces/IRoute'
import Counter from '../views/counter'
import Home from '@pages/Home'
import { lazy } from 'react'
// const Home = lazy(() => import('@pages/Home'))

const routes: IRoute[] = [
    {
        path: '/',
        name: 'Trang chủ',
        component: Home,
        exact: true,
    },
]

export default routes
