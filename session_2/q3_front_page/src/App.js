import React,{Component,Fragment} from 'react';
import './App.css';
import axios from 'axios';
class App extends Component
{
  state=
  {
    value:''
  }
  homeHandler=()=>{
    axios.get('localhost:3000/home')
    .then(res=>this.setState({value:res.data}))
    .catch(error=>this.setState({value:error.message}))
  }
  aboutHandler=()=>{
    axios.get('localhost:3000/about')
    .then(res=>this.setState({value:res.data}))
    .catch(error=>this.setState({value:error.message}))
  }
  contactHandler=()=>{
    axios.get('localhost:3000/contact')
    .then(res=>this.setState({value:res.data}))
    .catch(error=>this.setState({value:error.message}))
  }
  render()
  {
    return(
      <Fragment>
        <div className="App">
          <ul>
            <li onClick={this.homeHandler.bind(this)}>Home</li>
            <li onClick={this.aboutHandler.bind(this)}>About</li>
            <li onClick={this.contactHandler.bind(this)}>Contact Us</li>
          </ul>
          <div className="Output">
           <h2>{this.state.value}</h2>
            </div>
        </div>
      </Fragment>
    );
  }
}

export default App;





