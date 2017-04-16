/**
 * Created by Joy on 2017. 4. 16..
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';

class Contents extends Component {
  render() {
    return (
      <div>
        {this.props.selectedContent}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    selectedContent: state.tabs.selectedContent
  }
}

export default connect(mapStateToProps)(Contents);