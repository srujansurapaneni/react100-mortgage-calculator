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
    this.calculateMortgage = this.calculateMortgage.bind(this);
  }
  handleChange(event) {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({[nam]: val});
  }
  calculateMortgage(event) {
    event.preventDefault();
    let principle = this.state['balance'];
    let mrate = this.state['rate']/12;
    let mterm = this.state['term']*12;
    let mpayment ;
    console.log(principle);
    console.log(mrate);
    console.log(mterm);
  }
  render() {
    return (
      <div className='container'>
        <title>Mortgage Calculator</title>
        <p>Mortgage Calculator</p>
        <form>
          <label>
          Loan Balance: 
            <input type="text" name="balance" onChange={this.handleChange} placeholder="Enter Value..."/>
          </label>
          <label>
          Interest Rate (%): 
            <input type="text" name="rate" onChange={this.handleChange} placeholder="Enter Value..."/>
          </label>
          <label>
          Loan Term (years): 
            <input type="text" name="term" onChange={this.handleChange} placeholder="Enter Value..."/>
          </label>
          <p>
          <button name="submit" onClick={this.calculateMortgage}>Calculate</button>
          </p>
        </form>
      </div>
    );
  }
}
