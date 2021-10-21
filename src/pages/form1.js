import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      emailError: '',
      passwordError: '',
      emailValid: false,
      passwordValid: false,
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
    event.preventDefault();
    const { email, password } = this.state;
    const obj = {
      email,
      password,
    };
  };

  validate = (name, value) => {
    const { emailError, emailValid, passwordError, passwordValid } = this.state;
    switch (name) {
      case 'email':
        // eslint-disable-next-line no-case-declarations
        const emailR = /^[A-z 0-9]+@[A-z]+\.[A-z0-9]+$/;
        if (!emailR.test(value)) {
          this.setState({ emailError: 'Enter a valid email' });
          this.setState({ emailValid: false });
        } else {
          this.setState({ emailError: '' });
          this.setState({ emailValid: true });
        }

        break;
      case 'password':
        // eslint-disable-next-line no-case-declarations
        const passwordR = /^[A-z]{2,}[a-z]{2,}[0-9]{2,}[!@#$%^&*]{2,}/;
        if (!passwordR.test(value)) {
          this.setState({ passwordError: 'Enter a valid password' });
          this.setState({ passwordValid: false });
        } else {
          this.setState({ passwordError: '' });
          this.setState({ passwordValid: true });
        }

      // eslint-disable-next-line no-fallthrough
      default:
        break;
    }
  };

  render() {
    const { email, password, emailError, passwordError } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="Enter your Email"
              name="email"
              value={email}
              required
              onChange={this.handleChange}
            />
            <span>{emailError}</span>
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="text"
              placeholder="Enter your Password"
              name="password"
              required
              value={password}
              onChange={this.handleChange}
            />
            <span>{passwordError}</span>
          </div>
        </form>
        <button type="button" disabled="true">
          Back
        </button>
        <button type="button">Save</button>
        <button type="button">Save and next</button>
      </div>
    );
  }
}

export default Form;
