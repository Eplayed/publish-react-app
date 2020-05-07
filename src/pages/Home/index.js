
import React from 'react'
import { getKey } from '@/utils/auth'
import './index.scss'

class Home extends React.Component {
  constructor() {
    super()
    this.state = {

    }
  }
  componentDidMount() {
    const user = getKey('userInfo')
  }


  render() {
    return (
      <div>
      home
      </div>
    )
  }
}

export default Home
