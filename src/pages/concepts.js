import React from 'react';
import Link from 'gatsby-link';

export default class ConceptPage extends React.Component {
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
                            {data.allContentfulConcepts.edges["0"].node.conceptsHeadline}
                    </h1>
                    <p
                        className="avenir normal color-redOrange">
                            {data.allContentfulConcepts.edges["0"].node.conceptsDescription.conceptsDescription}
                    </p>
                </div>
            </div>
        )
    }
}

export const query = graphql`
    query ConceptspageQuery {
        allContentfulConcepts {
            edges {
                node {
                    conceptsHeadline
                    conceptsDescription {
                        conceptsDescription
                    }
                }
            }
        }
    }`
