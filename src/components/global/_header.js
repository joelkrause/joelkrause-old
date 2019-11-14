import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Logo from "./_logo"
import Hamburger from "./_hamburger"

const Header = ({ siteTitle }) => (
  <header className="site__header">
    <div className="site__header-logo">
      <Link to="/">
        <Logo />
      </Link>
    </div>
    <Hamburger />
    <nav className="site__header-nav">
      <Link to="/">Home</Link>
      <Link to="/posts">Posts</Link>
    </nav>
  </header>
)

export default Header