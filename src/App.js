import React, { Component } from 'react'

class App extends Component {
    state = {
        people: [],
        number: "",
        message: ""

    }

    render() {
        return(
            <div>
                 {this.state.people.map(person => person.name)}
            </div>
        )
    }

    componentDidMount(){
        fetch('http://api.open-notify.org/astros.json')
        .then(response => response.json())
        .then(data => {
            this.setState({
                people: data.people,
                number: data.number,
                message: data.message
            })
        })
    }


}

export default App
