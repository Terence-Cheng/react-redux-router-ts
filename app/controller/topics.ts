import { Controller } from 'egg'

export default class Topics extends Controller {
  async index() {
    const data = await this.app.curl('localhost:6001/api/topics', {
      method: 'GET',
      dataType: 'json',
    })

    await this.ctx.render('page', {
      topics: data.data.data
    })
  }
}
