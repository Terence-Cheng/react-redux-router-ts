import { hot } from 'react-hot-loader';
import React from 'react';
import { connect } from 'react-redux';
// import ListItem from './list-item'
import actions from '../../actions';


class TopicList extends React.Component<any> {
  componentDidMount() {
    const { dispatch, topics } = this.props
    if (topics && topics.success) {
      return
    }
    dispatch(actions.topics(345));
  }
  render() {
    const { topics: items } = this.props;
    if (items && items.success && items.data instanceof Array) {
      return items.data.map((item, index) => <div key={index}>{JSON.stringify(item)}</div>)
    }
    return null
  }
}

const ConnectedContainer = connect(state => state)(TopicList);

export default hot(module)(ConnectedContainer);
