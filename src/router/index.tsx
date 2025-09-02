import { ComponentType } from 'react';
import { Route, RouteProps, Routes } from 'react-router-dom'
import { RouterType } from '@/model';
import { NotFound } from '@/view/error'

// 动态导入所有视图目录下的路由配置
const routeModules = import.meta.glob('@/view/**/router.ts', {
  eager: true,
  import: 'default',
});

const components = import.meta.glob('@/view/**/index.tsx', {
  eager: true,
  import: '*'
}) as Record<string, { default?: ComponentType }>;

const routes: RouteProps[] = Object.entries(routeModules).map(([path, module]) => {
  const routeConfig = module as RouterType;
  const urlPath = path.replace('src/view/', '').replace('/router.ts', '') || '/';
  const indexPath = path.replace('/router.ts', '/index.tsx') || '/';
  console.log(`路由配置: ${urlPath} << ${indexPath}`);
  const Component = components[indexPath]?.default
  return {
    index: routeConfig.name === 'home' ? true : false,
    path: routeConfig.name === 'home'? '/' : urlPath,
    element: Component ? <Component /> : <NotFound />
  }
})

const BasicRoute = () => (
  <Routes >
    {routes.map((route, index) => (
      <Route key={index} {...route} />
    ))}
    <Route path='*' element={<NotFound />} />
  </Routes>
)

export default BasicRoute
