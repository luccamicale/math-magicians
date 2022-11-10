import React from 'react';
import { NavLink } from 'react-router-dom';
import Calculator from './pages/calculator';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <Calculator />
        <NavLink />
      </div>
    );
  }
}

export default App;
