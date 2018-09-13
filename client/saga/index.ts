import createSagaMiddleware from 'redux-saga';
import { put, takeLatest, call } from 'redux-saga/effects';
import axios from 'axios'
import actions from '../actions';

// create the saga middleware
export const sagaMiddleware = createSagaMiddleware();

function* greet(id) {
  console.log(66666, id)
  yield put(actions.success('everyone'));
}

function* news(id) {
  // console.log(11111, id, this.context)
  yield put(actions.newsSuccess('no boyd '));
}

function* topicsList() {
  const response = yield call(axios.get, '/api/topics')
  yield put(actions.topicsSuccess(response.data.data))
}

function* mySaga() {
  yield takeLatest(actions.greet, greet);
  yield takeLatest(actions.news, news)
  yield takeLatest(actions.topics, topicsList)
}

export default mySaga;

// entry point
export const run = () => {
  sagaMiddleware.run(mySaga);
};
