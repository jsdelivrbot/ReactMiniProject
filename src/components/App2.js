/**
 * Created by Joy on 2017. 4. 13..
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';

import TabList from '../containers/TabList';
import Contents from '../containers/Contents';
import { fetchData } from '../actions';

class App2 extends Component {

  componentWillMount() {
    this.props.fetchData();
  }

  render() {
    return (
      <div>
        <TabList />
        <Contents />
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchData: () => {
      dispatch(fetchData());
    }
  }
}

export default connect(null, mapDispatchToProps)(App2);