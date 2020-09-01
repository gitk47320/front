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
    const headers = {
      'Content-Type': 'application/json',
    }
    axios({
          method : "POST",
          url : "http://localhost:3000/auth/sign_in", 
          data : { email: this.state.email, password: this.state.password },
          headers: headers
          })
          .then((response) => {
            console.log("login success");
            //とりあえずローカルストレージに保存するが
            //セキュリティ的によくないので後でちゃんとやる。
            //せめてcookie保存とかにしたい。
            window.localStorage.setItem('uid', response.headers['uid']);
            window.localStorage.setItem('access-token', response.headers['access-token']);
            window.localStorage.setItem('client', response.headers['client']);
            this.props.history.push('/articles');
          })
          .catch((error) => {
            console.log("login failed");
          })
  }

  render() {
    return (
    <div className = "login">
      <form onSubmit = {this.onSubmit}>
        ログイン
        <div className ="email" >
          <TextField required label="メールアドレス" variant="outlined" value = {this.state.email} onChange = {this.onEmailChange} />
        </div>
        <div className = "password" >
          <TextField required label="パスワード" type="password" autoComplete="current-password" variant="outlined" value = {this.state.password} onChange = {this.onPasswordChange} />
        </div>
        <Button variant="outlined" type = "submit">ログイン</Button>
      </form>
    </div>
    )
  }
}
 
export default Login