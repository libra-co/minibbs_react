import { Routers } from './routers/const';

const url = (url: string, prefix: string = '') => {
  return `${prefix}${url}`;
};

// 路由转换，配置前缀
export const getRoutersWithPerfix = (routers: Routers[], prefix: string) => {
  const routesWithPrefix: Record<string, string> = {};
  routers.forEach((routerItem) => {
    routerItem.path.forEach((pathItem) => {
      routesWithPrefix[pathItem.name] = url(pathItem.value, prefix);
    });
  });
};

const routers: Record<string, string> = {
  root: url('/'),
  login: url('/login'),
};

console.log('routers', routers);

export default routers;
