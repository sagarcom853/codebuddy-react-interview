import React from 'react';
import { canUseDom } from 'react-toastify/dist/utils';

class SecondForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { firstName: '', lastName: '', address: '', firstNameError: '' };
  }
handleBack=(e)=>{
    history.push("/")
}
  handleChange = event => {
    const { value } = event.target;
    const { name } = event.target;
    this.setState({
      [name]: value,
    });
    this.validate(name, value);
  };

  validate = (name, value) => {
      const {firstName, lastName, address,firstNameError}=this.state
    switch (name) {
      case 'firstName':
        // eslint-disable-next-line no-case-declarations
        const firstNameR = /^[A-z]{2,50}/;
        if (!firstNameR.test(value)) {
          this.setState({ firstNameError: 'please enter only alphabets' });
        } else {
          this.setState({ firstNameError: '' });
        }
        case'address':
        if(value.length<10){
            addressError = 'Address should be min 10 characters long'
        }
        default:break;
  };

  render(){
    const { firstName, lastName, address } = this.state;
    return (
      <div>
        <form>
          <div className="form-group">
            <label htmlFor="first Name">First Name</label>
            <input
              type="text"
              className="form-control"
              value={firstName}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="last Name">First Name</label>
            <input
              type="text"
              className="form-control"
              value={lastName}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="Address">First Name</label>
            <input
              type="text"
              className="form-control"
              value={address}
              onChange={this.handleChange}
            />
          </div>
          <button type="button" onClick={this.handleBack}>Back</button>
          <button type="button" onClick={(e)=>history.push("/")}> Save and next</button>
        <button type="button" disabled="true">save</button>
        </form>
      </div>
    );
  }
}
}

export default SecondForm;
