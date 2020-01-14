import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ParallaxProvider, Parallax } from "react-skrollr";
const data = {
  "data-center-bottom": "transform: translateX(-100%);",
  "data-center-center": "opacity: 1;transform: translateX(0%);",
  "data-center-top": "opacity: 0;"
};
function App() {
  return (
  <ParallaxProvider
    init={{
      smoothScrollingDuration: 1000,
      smoothScrolling: true,
      forceHeight: false
    }}
    getScrollTop={scrollTop => console.log("scrollTop", scrollTop)}
  >
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
		<Parallax data={data}>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          href="https://reactjs.org"
        >
          Learn React
        </a>
		</Parallax>
		<Parallax data={data}>
		<p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          href="https://reactjs.org"
        >
          Learn React
        </a>
		</Parallax>
		<Parallax data={data}>
		<p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          href="https://reactjs.org"
        >
          Learn React
        </a>
		</Parallax>
		<Parallax data={data}>
		<p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          href="https://reactjs.org"
        >
          Learn React
        </a>
		</Parallax>
      </header>
    </div>
	</ParallaxProvider>
  );
}

export default App;
