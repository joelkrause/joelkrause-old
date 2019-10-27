import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"


const Author = ({ siteTitle }) => (
    <div className="author__block">
        <div className="author__block-image">Image</div>
        <div className="author__block-description">
            Published by <a href="https://twitter.com/joel_krause" target="_blank">@joel_Krause</a>
        </div>
    </div>
)

export default Author