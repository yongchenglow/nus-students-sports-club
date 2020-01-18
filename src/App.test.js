import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import MaintenancePage from './components/maintenance/maintenance.js';
import NotFoundPage from './components/notfound/index.js';
import HomePage from './components/main/index.js';
import HomePage2019 from './components/2019/index.js';
import NUSBiathlon from './components/main/nusbiathlon/index.js';
import RunNUS from './components/main/runnus/index.js';
import SunNUS from './components/main/sunnus/index.js';
import InterFacultyGames from './components/main/ifg/index.js';

it('Renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});
