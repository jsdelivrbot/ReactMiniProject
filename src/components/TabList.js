/**
 * Created by Joy on 2017. 4. 11..
 */
import React, {Component} from 'react';

export default class TabList extends Component {
  render() {
    return (
      <div className="tabList">
        {this.props.children}
      </div>
    );
  }
}

