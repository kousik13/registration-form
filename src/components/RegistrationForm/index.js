// Write your JS code here
import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    isFirstName: false,
    isLastName: false,
    isSuccess: false,
  }

  onSubmitForm = event => {
    event.preventDefault()
    const {isSuccess, firstName, lastName} = this.state
    if (isSuccess === false) {
      if (firstName !== '' && lastName !== '') {
        this.setState({isSuccess: true, firstName: '', lastName: ''})
      } else if (firstName === '' && lastName !== '') {
        this.setState({isFirstName: true})
      } else if (lastName === '' && firstName !== '') {
        this.setState({isLastName: true})
      } else {
        this.setState({isFirstName: true, isLastName: true})
      }
    } else {
      this.setState({isSuccess: false})
    }
  }

  onBlurFirstName = () => {
    const {firstName} = this.state
    if (firstName === '') {
      this.setState({isFirstName: true})
    } else {
      this.setState({isFirstName: false})
    }
  }

  onBlurLastName = () => {
    const {lastName} = this.state
    if (lastName === '') {
      this.setState({isLastName: true})
    } else {
      this.setState({isLastName: false})
    }
  }

  onChangeFirstName = event => {
    this.setState({firstName: event.target.value})
  }

  onChangeLastName = event => {
    this.setState({lastName: event.target.value})
  }

  renderForm = () => {
    const {isFirstName, isLastName, firstName, lastName} = this.state
    return (
      <>
        <label htmlFor="firstName" className="input-label">
          FIRST NAME
        </label>
        <input
          className="user-input-field"
          id="firstName"
          type="text"
          placeholder="First name"
          value={firstName}
          onChange={this.onChangeFirstName}
          onBlur={this.onBlurFirstName}
        />
        {isFirstName && <p className="error-msg">Required</p>}
        <label htmlFor="lastName" className="input-label">
          LAST NAME
        </label>
        <input
          className="user-input-field"
          id="lastName"
          type="text"
          placeholder="Last name"
          value={lastName}
          onChange={this.onChangeLastName}
          onBlur={this.onBlurLastName}
        />
        {isLastName && <p className="error-msg">Required</p>}
      </>
    )
  }

  renderSuccessfullySubmitted = () => (
    <div className="success-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        alt="success"
        className="success-logo"
      />
      <p className="success-heading">Submitted Successfully</p>
    </div>
  )

  render() {
    const {isSuccess} = this.state
    return (
      <div className="app-container">
        <div className="registration-form-container">
          <h1 className="registration-heading">Registration</h1>
          <form className="form-container" onSubmit={this.onSubmitForm}>
            {isSuccess ? this.renderSuccessfullySubmitted() : this.renderForm()}
            <div className="button-container">
              <button type="submit" className="button">
                {isSuccess ? 'Submit Another Response' : 'Submit'}
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default RegistrationForm
