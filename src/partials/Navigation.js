import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

export default class Navigation extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="flex justify-between items-center ph6-l pa2">
                <h2 className="mt3 avenir">
                    <Link
                        className="link f5 avenir normal color-navGrey"
                        to="/">
                            WeGroup
                    </Link>
                </h2>
                <div>
                    <ul className="flex items-center ma0 list">
                        <Link
                            to="/concepts/"
                            className="ma0 mr4 avenir color-navGrey no-underline">
                                Concepts
                        </Link>
                        <Link
                            to="/aboutus/"
                            className="ma0 mr4 avenir color-navGrey no-underline">
                                About Us
                        </Link>
                        <Link
                            to="/contact/"
                            className="ma0 mr4 avenir color-navGrey no-underline">
                                Contact
                        </Link>
                    </ul>
                </div>
            </div>
        )
    }
}
