/**
 * Created by Joy on 2017. 4. 16..
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { onClickTab } from '../actions';

class Tab extends Component {
  render() {
    return (
      <div className="tab" onClick={() => this.props.clickTab(this.props.content)}>
        <div className="tabName">
          {this.props.content}
        </div>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    clickTab: (content) => {
      dispatch(onClickTab(content));
    }
  };
};

export default connect(null, mapDispatchToProps)(Tab);


