import {Controller} from 'egg'

export default class ApiController extends Controller {
  async index() {
    const baseUrl = 'https://cnodejs.org/api/v1'
    const { url } = this.ctx.request
    const reqPath = url.split('/api/')[1]

    const result = await this.app.curl(baseUrl + '/' + reqPath, {
      method: 'GET',
      dataType: 'json',
    });

    this.ctx.body = {
      code: 0,
      msg: 'success',
      data: result.data
    };
  }
}
