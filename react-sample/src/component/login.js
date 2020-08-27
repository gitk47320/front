import React, { Component } from 'react';
import axios from "axios";
import { TextField, Button } from '@material-ui/core';
import './login.scss'

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = 
      { email: "",
        password: ""
      }
      this.onEmailChange = this.onEmailChange.bind(this);
      this.onPasswordChange = this.onPasswordChange.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
  }

  onEmailChange(event) {
    this.setState( { email: event.target.value })
  }

  onPasswordChange(event) {
    this.setState( { password: event.target.value })
  }

  onSubmit(event) {
    event.preventDefault();
    console.log("post!!!");
    console.log(this.state);
    axios({
          method : "POST",
          url : "http://localhost:3000/auth/sign_in", 
          data : { email: this.state.email, password: this.state.password }
          })
          .then((response) => {
            console.log("login success");
          })
          .catch((error) => {
            console.log("login failed");
          })
  }

  // async authenticate() {
  //   await axios
  //     .post('http://localhost:3000/auth/sign_in', {
  //     })
  //     .then(response => { 
  //       const data = response.status;
  //       console.log(data);
  //       this.setState({
  //         info : data[0]
  //       });
  //     });
  // }
 
  render() {
    return (
    <div className = "login">
      <form onSubmit = {this.onSubmit}>
        ログイン
        <div class ="email" >
          <TextField required label="メールアドレス" variant="outlined" value = {this.state.email} onChange = {this.onEmailChange} />
        </div>
        <div class = "password" >
          <TextField required label="パスワード" type="password" autoComplete="current-password" variant="outlined" value = {this.state.password} onChange = {this.onPasswordChange} />
        </div>
        <Button variant="outlined" type = "submit">ログイン</Button>
      </form>
    </div>
    )
  }
}
 
export default Login