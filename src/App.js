import React, { Component } from 'react';
import { BrowserRouter as Router} from 'react-router-dom';

// Redux Store
import { Provider } from 'react-redux';
import store from './store';

// CSS
import './App.css';

// Components
import WebPage from './components/webpage';

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
            <WebPage />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
