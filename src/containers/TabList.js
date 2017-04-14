/**
 * Created by Joy on 2017. 4. 13..
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';

class TabList extends Component {
  renderList() {
    return this.props.taps.map((tab) => {
      return (
        <div className="tab" key={tab.contents}>
          <div className="tabName">
            {tab.contents}
          </div>
        </div>
      );
    });
  }
  render() {
    return (
      <div className="tabList">
        {this.renderList()}
      </div>
    )
  }
}

//The purpose of this function is to take our application state as an argument.
function mapStateToProps(state) {
  //Whatever is returned will show up as proprs
  //inside of TabList
  return {
    tabs: state.tabs
  }
}

export default connect(mapStateToProps)(TabList);