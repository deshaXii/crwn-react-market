import React from "react";

import { FormInput } from "../form-input/component";
import { Button } from "../button/component";

import { auth, createUserDocument } from "../../firebase/utlis";

import "./style.scss";

class SignUp extends React.Component {
  constructor() {
    super();
    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }
  handleSubmit = async (event) => {
    event.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;
    if (password !== confirmPassword) {
      alert("Password don't match");
      return;
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserDocument(user, { displayName });
      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (e) {
      console.log(e.message);
    }
  };
  handleChange = e => {
      const {name, value} = e.target
      this.setState({[name]: value})
  }
  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="sign-up">
        <h2 className="title">i do not have a account</h2>
        <span>sign up with your email and password</span>
        <form method="POST" className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            placeholder="enter your name"
            value={displayName}
            onChange={this.handleChange}
            required
            name="displayName"
          />
          <FormInput
            type="email"
            placeholder="enter your email"
            value={email}
            onChange={this.handleChange}
            required
            name="email"
          />
          <FormInput
            type="password"
            value={password}
            onChange={this.handleChange}
            placeholder="your password"
            required
            name="password"
          />
          <FormInput
            type="password"
            value={confirmPassword}
            onChange={this.handleChange}
            required
            placeholder="confirm your password"
            name="confirmPassword"
          />
          <Button type="submit"> Create Account </Button>
        </form>
      </div>
    );
  }
}

export default SignUp;
