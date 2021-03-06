// 动态路由
export const syncRoutes: VueRouteRecordRaw[] = [
  {
    path: '/list',
    meta: {
      title: '关于',
      auth: false,
    },
    component: () => import('@/views/List.vue'),
  },
  {
    path: '/detail/:id',
    meta: {
      title: '关于',
    },
    component: () => import('@/views/About.vue'),
  },
];

export function getRoutes(): Promise<VueRouteRecordRaw[]> {
  return new Promise((resolve) => {
    const t = setTimeout(() => {
      clearTimeout(t);
      resolve(syncRoutes);
    }, 200);
  });
}
