import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

export default class Navigation extends React.Component {
    render() {
        return(
            <div className="flex justify-between items-center ph6">
                <h2 className="mt3 avenir">
                    <Link
                        className="link"
                        to="/">
                            Gatsby
                    </Link>
                </h2>
                <div>
                    <ul className="flex items-center ma0 list">
                        <Link
                            to="/page-2/"
                            className="ma0 mr4 avenir black no-underline">
                                Nav 1
                        </Link>
                        <Link
                            to="/"
                            className="ma0 mr4 avenir black no-underline">
                                Nav 2
                        </Link>
                        <Link
                            to="/"
                            className="ma0 mr4 avenir black no-underline">
                                Nav 3
                        </Link>
                    </ul>
                </div>
            </div>
        )
    }
}
