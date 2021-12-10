import React from 'react';
import './App.css';
import Quiz from '../Quiz/Quiz';
import Intro from '../Quiz/Intro';

// function App() {
//   return <Quiz/>;
// }

// export default App;

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      TakeTest : true
    }
    this.handleClick =this.handleClick.bind(this);
  }
  handleClick (){
    this.setState({
        TakeTest : false
    });
  }
  render(){
    return(
      <div ClassName ="App">
        {
          this.state.TakeTest ?
        (<div ClassName="Intro">
          <Quiz clickevent = {this.handleClick}/>
        </div>):
      (
        <div className ="Quiz"><Intro /></div>
      )
      }
      </div>
    )
  }
}


export default App;