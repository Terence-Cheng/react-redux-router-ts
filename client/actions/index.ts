import { createActions } from 'redux-actions';

export default createActions({
  GREET: undefined,
  SUCCESS: name => ({ name }),
  FAILED: message => ({ message }),
  NEWS: undefined,
  NEWS_SUCCESS: data => ({ data }),
  TOPICS: undefined,
  TOPICS_SUCCESS: data => ({ data }),
});
