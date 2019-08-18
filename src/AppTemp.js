import './assets/scss/style.scss';
import './App.scss';

import React from 'react';
// import logo from './logo.svg';
import Header from './components/Header/Header';
//
import Button from './components/Button/Button';
//
import Checkbox from './components/Checkbox/Checkbox';
//
// import Select from './components/Select/Select';
//
import Search from './components/Search/Search';
//
import ResultList from './components/ResultList/ResultList';
//
import Footer from './components/Footer/Footer';
//

function App() {
  const state = true;

  return (
    <div className="app">
      <Header />
      <section className="app__main">
        <Button onClick={() => alert(1)}>
          default value
        </Button>
        <Button className={'test-class'} active={state} onClick={() => alert(2)}>
          {/* default value */}
          {state ? 'Remove from list' : 'Add to list'}
        </Button>

        <Checkbox />
        <Checkbox active />

        <Search className={'container'} />
        <ResultList />
      </section>
      <Footer />
    </div>
  );
}

export default App;
