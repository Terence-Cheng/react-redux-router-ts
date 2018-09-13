import { handleActions } from 'redux-actions';
import actions from '../actions';

const initialState = {
  greeting: '',
  news: '',
  topics: '',
};
export default handleActions(
  {
    [actions.success]: (state, { payload: { name } }) => ({
      ...state,
      greeting: name,
    }),
    [actions.newsSuccess]: (state, { payload: { data } }) => ({
      ...state,
      news: data
    }),
    [actions.topicsSuccess]: (state, { payload: { data } }) => ({
      ...state,
      topics: data
    }),
  },
  initialState,
);
