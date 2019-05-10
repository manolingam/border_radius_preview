import React, {Component} from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      top_left:'',
      top_right:'',
      bottom_left:'',
      bottom_right:'',
      not_null:0
    };
  }

  onTopLeftChange = (event) => {
    if(event.target.value){
      this.setState({top_left: event.target.value + 'px'})
    } else {
      this.setState({top_left: event.target.value})
    }
  }

  onTopRightChange = (event) => {
    if(event.target.value){
      this.setState({top_right: event.target.value + 'px'})
    } else {
      this.setState({top_right: event.target.value})
    }
  }

  onBottomLeftChange = (event) => {
    if(event.target.value){
      this.setState({bottom_left: event.target.value + 'px'})
    } else {
      this.setState({bottom_left: event.target.value})
    }
  }

  onBottomRightChange = (event) => {
    if(event.target.value){
      this.setState({bottom_right: event.target.value + 'px'})
    } else {
      this.setState({bottom_right: event.target.value})
    }
  }

  render() {
 
    let val = 'border-radius: ' + this.state.top_left + ' ' + this.state.top_right + ' ' + this.state.bottom_right + ' ' + this.state.bottom_left;

    return(
      <div className="main">
        <header>Border Radius Preview</header>
        <div 
          style={{borderRadius: `${this.state.top_left} ${this.state.top_right} ${this.state.bottom_right} ${this.state.bottom_left} `}} 
          id="box" rows="3" cols="50">
          {val}
        </div><br></br>
        <div className="values">
          <p>-- Enter Radius Values --</p>
          <input onChange={this.onTopLeftChange} type="text" id='top-left' maxLength='4' placeholder="T-Left"></input>
          <input onChange={this.onTopRightChange} type="text" id='top-right' maxLength='4' placeholder="T-Right"></input><br></br>
          <input onChange={this.onBottomLeftChange} type="text" id='bottom-left' maxLength='4' placeholder="B-Left"></input>
          <input onChange={this.onBottomRightChange} type="text" id='bottom-right' maxLength='4' placeholder="B-Right"></input>
        </div>
        <footer>Made with &hearts; by Mano</footer>
      </div>
    )
  }
}

export default App;
