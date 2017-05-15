import React, { Component } from 'react';
import '~/app/lib/test'
import styles from './App.css';
import './index.less';

export default class App extends Component {
  render() {
    return (
      <div className={styles.app}>
        <h1>Hello, App x</h1>
      </div>
    );
  }
}
