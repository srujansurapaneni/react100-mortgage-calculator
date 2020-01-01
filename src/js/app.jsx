import React from 'react';

export default class App extends React.Component {
  // your Javascript goes here
  constructor() {
    super();
    this.state = {
      name: '',
      value: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({[nam]: val});
  }
  render() {
    return (
      <div className='container'>
        <title>Mortgage Calculator</title>
        <p>Mortgage Calculator</p>
        <form>
          <label>
          Loan Balance: 
            <input type="text" name={"loan balance"} onChange={this.handleChange} placeholder="Enter Value..."/>
          </label>
          <label>
          Interest Rate (%): 
            <input type="text" name={"interest rate"} onChange={this.handleChange} placeholder="Enter Value..."/>
          </label>
          <label>
          Loan Term (years): 
            <input type="text" name={"loan term"} onChange={this.handleChange} placeholder="Enter Value..."/>
          </label>
        </form>
      </div>
    );
  }
}
