import {Component} from "react";

class App extends Component {
  state = {
    clients: []
  };

  async componentDidMount() {
    const response = await fetch('http://localhost:8080/message');
    console.log(response);
    const body = await response.json();
    this.setState({clients: body});
  }

  render() {
    const {clients} = this.state;
    return (
        <div className="App">
          <header className="App-header">
            {/*<img src={logo} className="App-logo" alt="logo" />*/}
            <div className="App-intro">
              <h2>Магнит</h2>
              {clients.map(client =>
                  <div key={client.id}>
                    {client.text}
                  </div>
              )}
            </div>
          </header>
        </div>
    );
  }
}
export default App;