import React, { Component } from 'react';
import axios from "axios";
import { TextField, Button } from '@material-ui/core';
import './login.scss'

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {value:}
  }

  async authenticate() {
    await axios
      .post('http://localhost:3000/auth/sign_in')
      .then(response => { 
        const data = response.status;
        console.log(data);
        this.setState({
          info : data[0]
        });
      });
  }
 
  render() {
    return (
    <div className = "login">
      <form>
        ログイン
        <div class ="user-id" >
          <TextField required label="メールアドレス" variant="outlined" />
        </div>
        <div class = "password" >
          <TextField required label="パスワード" type="password" autoComplete="current-password" variant="outlined" />
        </div>
        <Button variant="outlined" type = "submit">ログイン</Button>
      </form>
    </div>
    )
  }
}
 
export default Login