import React from 'react'
import Link from 'gatsby-link'

export default class Index extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const data = this.props.data;
        return(
            <div
                className="w-100 vh-100 bg-white">
                <div
                    className="flex flex-column justify-center items-center h-75">
                    <h1
                        className="avenir normal color-redOrange">
                        <span className="fw4">We are </span><span className="fw1">Group</span>
                    </h1>
                    <p
                        className="avenir normal color-redOrange">
                            {data.allContentfulWegroupFrontpage.edges["0"].node.frontpageDescription.frontpageDescription}
                    </p>
                </div>
            </div>
        )
    }
}

export const query = graphql`
  query FrontpageQuery {
      allContentfulWegroupFrontpage {
          edges {
              node {
                  frontpageDescription {
                      frontpageDescription
                  }
              }
          }
      }
  }`
