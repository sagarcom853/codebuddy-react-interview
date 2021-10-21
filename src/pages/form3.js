import React from 'react';

class ThirdForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countryCode: '',
      phoneNumber: '',
      AcceptTerms: false,
      phoneNumberError: '',
    };
  }

  handleChange = event => {
    const { value } = event.target;
    const { name } = event.target;
    this.setState({
      [name]: value,
    });
    this.validate(name, value);
  };

  handleSubmit = event => {
    const { countryCode, phoneNumber, AcceptTerms } = this.state;
    event.pevent.preventDefault();
    const obj = {
      countryCode,
      phoneNumber,
      AcceptTerms,
    };
  };

  validate = (name, value) => {
    switch (name) {
      case 'phoneNumber':
        if (value.length < 10) {
          this.setState({ phoneNumberError: 'Phone number should be of 10 digits' });
        }

      default:
        break;
    }
  };

  render() {
    const { countryCode, phoneNumber, AcceptTerms } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="countryCode">Country Code</label>
            <select name="countryCode" value={countryCode} required onChange={this.handleChange}>
              <option value="">--Select Country Code--</option>
              <option value="India">India(+91)</option>
              <option value="America">America(+1)</option>
            </select>
          </div>
          <div>
            <label htmlFor="phoneNumber">Phone Number</label>
            <input
              type="number"
              name="phoneNumber"
              value={phoneNumber}
              required
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label htmlFor="AcceptTerms">Accept Terms and Conditions</label>
            <input
              type="checkbox"
              name="AcceptTerms"
              value={AcceptTerms}
              required
              selected="true"
              onChange={this.handleChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default ThirdForm;
