import React from 'react';
import { Link } from 'gatsby-link';

export default class Structure extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const data = this.props.data;
        return(
            <div>
                <div
                    className="w-100 vh-100 bg-white">
                    <div
                        className="flex flex-column justify-center items-center h-75">
                            <h1
                                className="avenir normal color-redOrange">
                                <span className="fw4">we</span><span className="fw1">group</span>
                            </h1>
                            <p
                                className="avenir normal color-redOrange">
                                {data.allContentfulStructurePage.edges["0"].node.structureDescription}
                            </p>
                    </div>
                </div>
            </div>
        )
    }
}

export const query = graphql`
    query StructurepageQuery {
        allContentfulStructurePage {
            edges {
                node {
                    structureDescription
                }
            }
        }
    }`
