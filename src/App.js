// create your App component here
import React, { Component } from 'react'

class App extends Component{

  state = {
    humansInSpace: []
  }

  render() {
    return(
      <div>
      {this.state.humansInSpace.map(person => person.name)}
      </div>
    )
  }

  componentDidMount() {
    fetch('http://api.open-notify.org/astros.json')
    .then(res => res.json())
    .then(data => {
      this.setState({
        humansInSpace: data.people
      })
    })
  }

}
export default App
