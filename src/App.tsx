import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';
import Header from './components/Header';

import { GlobalStyle } from './assets/styles/global';

const App: React.FC = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <Router>
        <Header />
        <Routes />
      </Router>
    </div>
  );
};

export default App;
