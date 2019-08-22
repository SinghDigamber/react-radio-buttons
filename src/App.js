import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

class App extends Component {

  constructor() {
    super();

    this.state = {
      color: 'green'
    };

    this.onRadioChange = this.onRadioChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

  }

  onRadioChange = (e) => {
    this.setState({
      color: e.target.value
    });
  }

  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  }

  render() {
    return (
      <div className="App">
        <form onSubmit={this.onSubmit}>
          <strong>Select Color:</strong>

          <ul>
            <li>
              <label>
                <input
                  type="radio"
                  value="red"
                  checked={this.state.color === "red"}
                  onChange={this.onRadioChange}
                />
                <span>Red</span>
              </label>
            </li>

            <li>
              <label>
                <input
                  type="radio"
                  value="green"
                  checked={this.state.color === "green"}
                  onChange={this.onRadioChange}
                />
                <span>Green</span>
              </label>
            </li>

            <li>
              <label>
                <input
                  type="radio"
                  value="blue"
                  checked={this.state.color === "blue"}
                  onChange={this.onRadioChange}
                />
                <span>Blue</span>
              </label>
            </li>

            <li>
              <label>
                <input
                  type="radio"
                  value="orange"
                  checked={this.state.color === "orange"}
                  onChange={this.onRadioChange}
                />
                <span>Ornage</span>
              </label>
            </li>

            <li>
              <label>
                <input
                  type="radio"
                  value="purple"
                  checked={this.state.color === "purple"}
                  onChange={this.onRadioChange}
                />
                <span>Purple</span>
              </label>
            </li>
          </ul>

          <button type="submit">Choose Color</button>
        </form>
      </div>
    );
  }
}

export default App;