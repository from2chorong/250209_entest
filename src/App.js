import React from 'react';
import Header from './components/layout/header';
import Main from './components/layout/main';
import Footer from './components/layout/footer';
import './App.css';
import './styles/hooks/ani.scss';
import Settings from './hooks/settings';
import Ani from './hooks/ani';

function App() {
	Settings();
	Ani();

  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
