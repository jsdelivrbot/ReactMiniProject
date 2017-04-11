/**
 * Created by Joy on 2017. 4. 11..
 */
import React, { Component } from 'react';

export default class Tab extends Component {

  render() {
    return (
      <div className="tab" onClick={() => this.props.onClickTab(this.props.tabName)}>
        <div className="tabName">
          {this.props.tabName}
        </div>
      </div>
    );
  }
}
