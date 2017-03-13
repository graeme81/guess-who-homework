import React, {Component} from 'react'
import Box from '../components/Box'
import Select from '../components/Select'
import Title from '../components/Title'


class GuessContainer extends Component{
  constructor(props){
    super(props)

    this.state = {
      units: [
        {name: 'Tom', sex: 'Male', hair: 'Bald'},
        {name: 'Dick', sex: 'Male', hair: 'Blonde'},
        {name: 'Harry', sex: 'Male', hair: 'Brown'},
        {name: 'Joan', sex: 'Female', hair: 'Brown'},
        {name: 'June', sex: 'Female', hair: 'Blonde'},
        {name: 'Jenny', sex: 'Female', hair: 'Brown'},
        {name: 'Rod', sex: 'Male', hair: 'Black'},    
        {name: 'Jane', sex: 'Female', hair: 'Black'},
        {name: 'Freddy', sex: 'Male', hair: 'Blonde'},
        {name: 'Ed', sex: 'Male', hair: 'Bald'},
        {name: 'Edd', sex: 'Male', hair: 'Black'},
        {name: 'Eddy', sex: 'Male', hair: 'Brown'},
      ]

    }
  }

  onClick() {
    console.log('clicked')
    //const unit = event.target.dataset
    console.log(event.target.dataset)


  }

  
  render(){
  
    let keys = (Object.keys(this.state.units[0]))
  
    return(
    <div className="guess-container">
      <Title />
      <Box 
        units = {this.state.units}
        onClick = {this.onClick}
      />
      <select name = 'trait' className = 'select'>
        {[...keys].map((x,i) =>
          <option key = {i}> {keys[i]} </option>)}
      </select>
        
      <select className = 'choice'>    
      </select>
      

    </div>
    );
  }
}

export default GuessContainer