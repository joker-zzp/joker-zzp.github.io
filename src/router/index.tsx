import { Route, RouteProps, Routes } from 'react-router-dom'
import { HomeView } from '../view/home'
import { AboutView } from '../view/about'
import { Error } from '../view/error'

const viewList: RouteProps[] = [
  { path: '/', element: <HomeView /> },
  { path: '/about', element: <AboutView /> },
  { path: '*', element: <Error.NotFinded /> }
]

const BasicRoute = () => (
  <Routes>
    <Route index element={<HomeView />} />
    {viewList.map((props, i) => (
      <Route key={i} {...props} />
    ))}
  </Routes>
)

export default BasicRoute
