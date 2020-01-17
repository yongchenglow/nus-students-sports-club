import React, { Component } from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import Log from './Log';

// Redux Store
import { Provider } from 'react-redux';
import store from './store';

// CSS
import './App.css';

// For Debugging
if (process.env.NODE_ENV !== 'production') {
  localStorage.setItem('debug', 'app:*');
}

class App extends Component {
  render(){
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
}

export default App;
