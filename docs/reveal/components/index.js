import React, { Component } from 'react';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

import './css/reset.css'
import './css/reveal.css'
import './css/white.css'
import './css/monokai.css'

import Reveal from './js/reveal.esm.js';
import RevealZoom from './js/zoom.esm.js';
import RevealNotes from './js/notes.esm.js';
import RevealSearch from './js/search.esm.js';
import RevealMarkdown from './js/markdown.esm.js';
import RevealHighlight from './js/highlight.esm.js';

const smallStyle = {
  position:'relative',
  left:0,
  top:0,
  width:'500px',
  height:'400px'
};
const bigStyle = {
  position:'fixed',
  left:0,
  top:0,
  width:'100%',
  height:'100%'
};

class Presentation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      styleType: false
    }
  }
  componentDidMount() {
    // 这里可以初始化Reveal.js，你需要确保在组件加载后执行这些脚本。
    // 你需要引入Reveal.js的JS文件以及其他插件，然后初始化Reveal.js。
  //   let deck = new Reveal({
  //     plugins: [ Markdown ]
  //  })
  //  deck.initialize();
  if (ExecutionEnvironment.canUseDOM) {
    Reveal.initialize({
      controls: true,
      progress: true,
      center: true,
      hash: true,
      // Learn about plugins: https://revealjs.com/plugins/
      plugins: [ RevealZoom, RevealNotes, RevealSearch, RevealMarkdown, RevealHighlight ]
    });
  }
    
  }
  componentWillUnmount() {
    // 组件即将从 DOM 中卸载
    // 在这里进行清理操作
    // 取消订阅、清除计时器、释放资源等
    if (ExecutionEnvironment.canUseDOM) {
    Reveal.destroy();
    }
  }
  handleClick = () => {
    this.setState({ styleType: !this.state.styleType});
    const node = document.querySelector('.navbar')
    if(!this.state.styleType) {
      node.style.display = 'none';
    } else {
      node.style.display = 'flex';
    }
  };
  render() {
    return (
      <div className="reveal-viewport" style={this.state.styleType ? bigStyle : smallStyle}>
        <div className="screenBtn" style={{
        position:'absolute',
        right:'10px',
        top:'10px',
        width:'20px',
        height:'20px',
        border:'3px solid coral',
        zIndex:99999,
        cursor:'pointer'
      }} onClick={this.handleClick}></div>
        <div id="reveal" className="reveal">
        <div className="slides">
          <section>
            <h1>AAAAAAAAAAAAA</h1>
          </section>
          <section>
            <h2>Hello There</h2>
            <p>
              reveal.js enables you to create beautiful interactive slide decks using HTML. This presentation will show you examples of what it can do.
            </p>
          </section>

            <section>
              <h2>Vertical Slides</h2>
              <p>Slides can be nested inside of each other.</p>
              <p>Use the <em>Space</em> key to navigate through all slides.</p>
            </section>
        </div>
        </div>
      </div>
    );
  }
}

export default Presentation;