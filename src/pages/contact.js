import React from 'react';
import Link from 'gatsby-link';

export default class Contact extends React.Component {
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
                            {data.allContentfulWeGroupContact.edges["0"].node.weGroupContactHeadline}
                    </h1>
                    <p
                        className="avenir normal color-redOrange">
                            {data.allContentfulWeGroupContact.edges["0"].node.contactDescription.contactDescription}
                    </p>
                </div>
            </div>
        )
    }
}

export const query = graphql`
    query ContactpageQuery {
        allContentfulWeGroupContact {
            edges {
              node {
                weGroupContactHeadline
                contactDescription {
                  contactDescription
                }
              }
            }
          }
      }`
