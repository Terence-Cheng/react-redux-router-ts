import { hot } from 'react-hot-loader';
import React from 'react';
import { connect } from 'react-redux';

const TopicListItem = ({ onClick, topic }) => (
  <div>
    <img src={topic.author.avatar_url} />
    <p>{topic}</p>
  </div>
)

const ConnectedContainer = connect(state => state)(TopicListItem);

export default hot(module)(ConnectedContainer);
