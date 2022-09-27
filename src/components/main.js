import { BrowserRouter , Switch, Route } from "react-router-dom";
import HomePage from './Home';
import CreateCustomer from '../pages/createCustomer';
import CreateCard from '../pages/createCard';
import ViewCustomer from '../pages/viewCustomer';
import ViewCard from '../pages/ViewCard';
import Block from '../pages/block';
import Unblock from '../pages/unBlock';
// import Login from "../Login";
import LoginForm from "../Login";
import store from "../store/Type";
import { Redirect } from "react-router-dom";
import React from "react";
import { connect, Connect } from "react-redux";

function Main({tokenId}) {
  // const tokenId = store.getState().tokenId?.token?.tokenId;
  // console.log(tokenId)
  return (
    <BrowserRouter>
     {tokenId &&  <HomePage   />}
      <Switch>
        {!tokenId && <Route exact path='/' component={LoginForm} /> }
       {tokenId && <React.Fragment> <Route exact path='/create-customer' component={CreateCustomer} />
        <Route exact path='/create-card' component={CreateCard} />
        <Route exact path='/view-customer' component={ViewCustomer} />
        <Route exact path='/view-card' component={ViewCard} />
        <Route exact path='/block' component={Block} />
        <Route exact path='/unblock' component={Unblock} /></React.Fragment> }
        {!tokenId && <Redirect path='*' to= { '/'}/>}
      </Switch>
      {tokenId && <Redirect path='*' to= { '/create-customer'}/>}
    </BrowserRouter>
  );
}

const mapStateToProps = (state) => {
  return {
    tokenId: state.tokenId?.token?.tokenId,
  };
};

export default connect(mapStateToProps, null)(Main);