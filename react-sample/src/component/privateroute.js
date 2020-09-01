import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom'
// import AuthService from '../services/AuthService.js'
import axios from 'axios'

class PrivateRoute extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true,
      isAuthenticated: false
    }
  }

  componentDidMount() {
    axios({
      method : "GET",
      url : "http://localhost:3000/auth/validate_token", 
      headers : { "uid": window.localStorage.getItem('uid'), 
                  "client": window.localStorage.getItem('client'), 
                  "access-token" : window.localStorage.getItem('access-token') 
                }
      })
      .then(() => {
        this.setState({
          loading: false,
          isAuthenticated: true
        })
        console.log('authenticated!')
      })
      .catch(() => {
        this.setState({
          loading: true,
          isAuthenticated: false
        })
      })
  }

  render() {
    // ルーティング情報を取得.
    const { component : Component, ...rest } = this.props

    // ログインチェック状態を取得.
    const { loading, isAuthenticated } = this.state

    // ログインチェック前なら、ローディングを表示.
    if (loading) {
      return <div className="loading">Loading...</div>
    }

    // ログインチェック後はルーティング処理を行う.
    return (
      <Route {...rest} render={() => {
        // 未ログインなら、ログイン画面にリダイレクト.
        if (!isAuthenticated) {
          return <Redirect to={{ pathname: '/login', state: { from: this.props.location } }} />
        }
        // ログイン済なら、指定されたコンポーネントを表示.
        return <Component {...this.props} />
      }}
      />
    )
  }
}

export default PrivateRoute