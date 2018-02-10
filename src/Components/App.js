import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import RequireAuth from './RequireAuth';
import SignIn from './SignIn';
import Student from '../Student/Scenes/Student';
import './App.css';

export default () => (
  <div className="App">
    <Route exact path="/" component={RequireAuth(SignIn, Student)} />
  </div>
);
