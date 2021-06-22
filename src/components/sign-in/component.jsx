import React from "react";
import { FormInput } from "../form-input/component";
import { Button } from "../button/component";
import { auth, signInWithGoogle } from "../../firebase/utlis";
import "./style.scss";

class SignIn extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = this.state
    try {
      await auth.signInWithEmailAndPassword(email, password).then(res => console.log(res))
    } catch (e) {
      console.log(e.message)
    }
    this.setState({ email: "", password: "" });
  };

  handleChange = (event) => {
    event.preventDefault();
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>i already have an email</h2>
        <span>sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="email"
            name="email"
            onChange={this.handleChange}
            value={this.state.email}
            label="Email"
            required
          />
          <FormInput
            type="password"
            name="password"
            onChange={this.handleChange}
            value={this.state.password}
            label="Password"
            required
          />

          <div className="buttons">
            <Button type="submit">Sign In</Button>
            <Button type="button" isGoogleSignIn onClick={signInWithGoogle}>
              Sign In With Google
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
