const Service = require('beidou-core').Service;

class NewsService extends Service {

  async get() {
    const url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=209cd02e74314a32a4e5f1d5b9cbdff1';

    const result = await this.app.curl(url, {
      method: 'GET',
      dataType: 'json',
    });
    return result.data.articles
  }
}

module.exports = NewsService;
