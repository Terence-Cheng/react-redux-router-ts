import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;

  router.get('/api/*', controller.api.index);

  router.get('/news', controller.news.show);
  router.get('/topics_list', controller.topics.index)

  router.get('/*', controller.home.index);
};
