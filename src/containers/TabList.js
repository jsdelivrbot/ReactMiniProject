/**
 * Created by Joy on 2017. 4. 13..
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';

import Tab from './Tab';
import { onClickTab } from '../actions';

class TabList extends Component {
  componentDidMount() {
    this.props.clickFirstTab();
  }

  renderList() {
    return Object.keys(this.props.tabs.contents).map((key, index) => {
      return (
        <Tab key={index} content={key} />
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

function mapDispatchToProps(dispatch) {
  return {
    clickFirstTab: () => {
      dispatch(onClickTab(1));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TabList);