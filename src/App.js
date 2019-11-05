import React from 'react';

export default class App extends React.Component{

  state = {
    astros: ""
  }

  componentDidMount(){
    fetch('http://api.open-notify.org/astros.json')
    .then(response => response.json())
    .then(json => this.setState({astros: json.people}))
  }

  astros = () => {
    let astroList = ``;
    for(let a of this.state.astros){
      astroList += `<li>name: ${a.name} | craft: ${a.craft}</li>`
    }
    return astroList;
  }

  render(){
    return(
      <ul>
        { this.astros() }
      </ul>
    )
  }

}
