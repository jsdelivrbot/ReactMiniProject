/**
 * Created by Joy on 2017. 4. 11..
 */
import React, { Component } from 'react';

export default class Contents extends Component {

  render() {
    return (
      <div className="contents">
        {this.props.contents}
      </div>
    );
  }
}
