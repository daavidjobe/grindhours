import React from 'react'
import styles from './header.scss'

const Header = ({ children }) => (
  <header className={styles.header}>
    {children}
  </header>
)

export default Header
