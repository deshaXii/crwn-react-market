import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/actions";

import { auth, createUserDocument } from "./firebase/utlis";

import "./App.scss";
import Header from "./components/header/component";
import { HomePage } from "./pages/homepage/component";
import { SignInAndSignUpPage } from "./pages/sign-in-and-sign-up/component";

import ShopPage from "./pages/shop/component";
import CheckoutPage from "./pages/checkout/component";

class App extends React.Component {
  unSubsctibeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unSubsctibeFromAuth = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const userRef = await createUserDocument(user);
        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      }
      setCurrentUser(user);
    });
  }
  componentWillUnmount() {
    this.unSubsctibeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/shop" component={ShopPage} />
          <Route path="/checkout" component={CheckoutPage} exact />
          <Route
            path="/signin"
            render={() =>
              this.props.currentUser ? (
                <Redirect to="/" />
              ) : (
                <SignInAndSignUpPage />
              )
            }
            exact
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
