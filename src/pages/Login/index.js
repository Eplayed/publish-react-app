
import React from 'react'

import './index.scss'


class Login extends React.Component {
  constructor() {
    super()
    this.state = {
      operName: '',
      operPassword: '',
      loading: false
    }
  }
  componentDidMount() {}

  login = () => {
    const { operName, operPassword } = this.state
    const reg = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/
    if (!reg.test(operName) && !operName && operName === '') {
      // 请填写正确邮箱
      return
    }
    if (!operPassword && operPassword === '') {
       // 请输入密码
      return
    } else {
      this.setState({ loading: true })
      
    }
  }

  handleOperName = e => {
    this.setState({ operName: e.target.value })
  }

  handleOperPassword = e => {
    this.setState({ operPassword: e.target.value })
  }

  render() {
    const { operName, operPassword, loading } = this.state
    return (
      <div>
        <div className="Wrap">
          <section className="homeSection">
            <header className="head">
            </header>
            <section className="slogan">
              <div className="sloganInfo">
                <div className="infoTitleCN">登录</div>
              </div>

              <div className="loginForm">
                <input
                  className="loginInput"
                  value={operName}
                  onChange={this.handleOperName}
                  type="email"
                  placeholder="请输入公司邮箱"
                />
                <input
                  className="loginInput"
                  value={operPassword}
                  onChange={this.handleOperPassword}
                  type="password"
                  placeholder="请输入域密码"
                />
              </div>
            </section>
          </section>
        </div>
      </div>
    )
  }
}

export default Login
