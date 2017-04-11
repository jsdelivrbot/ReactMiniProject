/**
 * Created by Joy on 2017. 4. 11..
 */
import React, {Component} from 'react';

import TabList from './TabList';
import Tab from './Tab';
import Contents from './Contents';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.contents = {
      1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut accumsan elit eget tellus facilisis bibendum. Nulla lacinia sem et elit elementum, dignissim ultricies tortor cursus. Nam aliquet viverra risus ut convallis. Duis metus ante, dictum et consectetur porta, lacinia sed libero. Curabitur placerat molestie urna, at laoreet dui blandit ut. Nullam fringilla faucibus erat, nec ornare risus pharetra vitae. Phasellus pretium volutpat sem. Quisque eu libero in ipsum rhoncus pellentesque id sed ligula.",
      2: "Proin consectetur ipsum non quam laoreet vestibulum. Nam iaculis enim ut eleifend rutrum. Phasellus ultricies tincidunt vestibulum. In hac habitasse platea dictumst. Suspendisse convallis pharetra eros ac pellentesque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vehicula massa at ante consequat, vitae convallis odio scelerisque. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
      3: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed congue ligula neque, non bibendum elit tempor quis. Maecenas in augue tellus. Suspendisse potenti. Nam pharetra sodales ante, sit amet hendrerit metus finibus eu. Pellentesque placerat, turpis sodales rutrum mollis, felis nisi porttitor turpis, sit amet dictum sapien nisi sed tellus. Sed in nulla id ipsum aliquam interdum id quis ante. Ut semper urna eu fringilla ullamcorper. Fusce vel enim lobortis, elementum quam quis, vehicula ex. In hac habitasse platea dictumst. Vestibulum nibh est, facilisis id massa ac, egestas rhoncus lectus. Nam sed viverra purus. Aenean vitae nulla massa. Suspendisse potenti.",
      4: "Maecenas venenatis mi nisi, sit amet elementum lorem convallis tempor. Morbi diam odio, fringilla scelerisque varius et, feugiat non eros. Sed egestas erat at sapien vulputate maximus. Nullam nec arcu at neque condimentum venenatis ut vel risus. Suspendisse viverra ligula velit, consectetur porttitor lectus aliquam ut. Integer ultrices ligula eu faucibus vestibulum. Pellentesque ornare ultricies molestie. Nam id velit nec urna tempor rutrum ac quis libero. Maecenas non scelerisque est. Fusce ac tincidunt dolor. Vivamus condimentum commodo ante nec elementum.",
      5: "Quisque ut metus ac turpis molestie interdum et vel nibh. Curabitur lacinia blandit leo, eget porta erat rutrum quis. Ut eget tellus pharetra, fermentum felis in, condimentum metus. Donec et lacus malesuada, eleifend tellus nec, tincidunt quam. Fusce elementum sapien purus, iaculis efficitur sem dictum quis. Phasellus at augue mauris. Maecenas at tellus egestas, consectetur dolor ut, maximus velit. In cursus est quis congue pulvinar. Nulla faucibus quis dolor ut convallis. Ut id tortor molestie magna congue consequat ut nec lectus. Donec mattis mauris eget nisi semper sodales."
    }

    this.state = {
      contents: null
    }

    this.onClickTab = this.onClickTab.bind(this);
  }

  onClickTab(tabName) {
    this.setState({
      contents: this.contents[tabName]
    });
  }

  renderTabs(tabName, index) {
    return (
      <Tab key={index} tabName={tabName} onClickTab={this.onClickTab} />
    )
  }

  render() {
    return (
      <div>
        <TabList>
          {Object.keys(this.contents).map((key, index) => this.renderTabs(key, index))}
        </TabList>
        <div className="divider"></div>
        <Contents contents={this.state.contents}/>
      </div>
    );
  }
}
