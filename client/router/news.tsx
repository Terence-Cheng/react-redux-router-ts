import { hot } from 'react-hot-loader';
import React from 'react';
import { connect } from 'react-redux';
import actions from '../actions';
import Headline from './headline';

class News extends React.Component<any> {
  componentDidMount() {
    this.props.dispatch(actions.news(345));
  }
  render() {
    const { news: items } = this.props;
    if (items instanceof Array) {
      return items.map((item, index) => <Headline key={index} {...item}/>);
    }
    return null
  }
}

const ConnectedContainer = connect(state => state)(News);

export default hot(module)(ConnectedContainer);
