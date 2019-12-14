import React from 'react';

class App extends React.Component {


    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
      .then(response => response.json())
      .then(data => {
        this.setState({
          peopleInSpace: data.people
        })
      })
    }

    render() {
        return(
        <div>Chase</div>
        )
    }

}

export default App;
