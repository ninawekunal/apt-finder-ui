import React, { Component } from 'react';
import './Styles/App.css';

import Home from './Home';
import Error from './Components/Error';

import Header from './Components/Header';
import Footer from './Components/Footer';

import { Switch, Route } from 'react-router-dom';



class App extends Component {
  
    render(){
      
        return (
          
          <div className="App">
              <Header />
              <Switch>
                <Route exact path="/apt-finder-ui" component={Home}/>
                <Route component={Error} />
              </Switch>
              <Footer />
          </div>
        )
    }
}

export default App;
