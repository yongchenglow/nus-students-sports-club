import React, { Component } from 'react';
import { BrowserRouter as Router} from 'react-router-dom';

// Redux Store
import { Provider } from 'react-redux';
import store from './store';

// CSS
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className='App'>
          Hello
        </div>
      </Router>
    </Provider>
  );
}

export default App;
