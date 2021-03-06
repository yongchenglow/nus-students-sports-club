import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

// Redux Store
import { Provider } from 'react-redux';
import store from './store';

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
        <BrowserRouter>
          <div className='App'>
            <WebPage />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
