import React from 'react'
import Header from '../components/header/Header'
import TopNav from '../components/top-nav/TopNav'

export default props => (
  <div>
    <Header>
      <h1>grindhours</h1>
      <TopNav />
    </Header>
    { props.children }
  </div>
)
