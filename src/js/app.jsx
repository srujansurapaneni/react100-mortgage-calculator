import React from 'react';

export default class App extends React.Component {
  // your Javascript goes here
  constructor() {
    super();
    this.state = {
      name: '',
      value: '',
      mortgage: '',
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
    let mrate = (this.state['rate']/100)/12;
    let mterm = this.state['term']*12;
    let num = Math.pow(1+mrate,mterm);
    let denom = (Math.pow(1+mrate,mterm)-1);
    let mpayment = principle * ((mrate * num)/denom);
    let mortgage = mpayment.toFixed(2);
    this.setState({mortgage: mortgage});
  }
  render() {
    const monthly = this.state['mortgage'];
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
          <div id="output">{monthly}</div>
        </form>
      </div>
    );
  }
}
