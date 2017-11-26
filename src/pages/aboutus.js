import React from 'react';
import Link from 'gatsby-link'

export default class AboutUs extends React.Component {
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
                            {data.allContentfulAboutUsPage.edges["0"].node.aboutUsHeadline}
                    </h1>
                    <p
                        className="avenir normal color-redOrange">
                            {data.allContentfulAboutUsPage.edges["0"].node.aboutUsDescription.aboutUsDescription}
                    </p>
                </div>
            </div>
        )
    }
}

export const query = graphql`
    query AboutpageQuery {
        allContentfulAboutUsPage {
            edges {
                node {
                    aboutUsHeadline
                    aboutUsDescription {
                        aboutUsDescription
                    }
                }
            }
        }
    }`
