import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import RequireAuth from './RequireAuth';
import SignIn from './SignIn';
import './App.css';

export default () => (
  <div className="App">
    <Route exact path="/" component={RequireAuth(SignIn, SignIn)} />
  </div>
);
