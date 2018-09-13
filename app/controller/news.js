// app/controller/news.js
import { Controller } from 'egg';

class NewsController extends Controller {

  async show() {
    const news = await this.ctx.service.news.get();
    await this.ctx.render('page', {
      news,
    });
  }
}

module.exports = NewsController;
