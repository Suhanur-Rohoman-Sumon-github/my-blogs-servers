import { Router } from 'express';
import { BlogRoutes } from '../modules/blogs/blog.route';
const router = Router();

const moduleRoutes = [
  {
    path: '/posts',
    route: BlogRoutes ,
  },
];

moduleRoutes.forEach((routes) => router.use(routes.path, routes.route));

export default router;
