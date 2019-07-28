import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/button.js'

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <Button value="按钮"  onClick={this.z.bind(this)}/>
        <Button value="按钮" />
        <Button value="按钮" />
      </div>
    );
  }
  z(x){
    console.log('外面的函数')
    console.log(x)
  }
}

export default App;
