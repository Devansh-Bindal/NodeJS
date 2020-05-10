import React from 'react';
import {Route,Switch} from 'react-router-dom';
import './App.css';
import Layout from './Components/Layout'; 
import About from './Components/About/About';
import Users from './Components/Users/users';

function App() {
  return (
    <div className="App">
       <Layout>
       <Switch>
       <Route path="/" exact component={Users} />
       <Route path="/about" component={About} />
       </Switch>
       </Layout>
    </div>
  );
}

export default App;
