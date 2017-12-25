import React from 'react';
import Link from 'gatsby-link';

export default class ConceptPage extends React.Component {
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
                            <span className="fw4">We</span><span className="fw1">Group</span>
                        </h1>
                        <p
                        className="avenir normal color-redOrange">
                            {data.allContentfulConcepts.edges["0"].node.conceptsDescription.conceptsDescription}
                        </p>
                    </div>
                </div>
                {/* WeBrush section */}
                <div className="flex flex-wrap bt b--light-gray">
                    <div className="w-50 vh-50 flex flex-column items-center justify-center">
                        <h3 className="avenir fw4 silver">{data.allContentfulConcepts.edges["0"].node.webrushimageHeadline}</h3>
                        <p className="avenir tc lh-copy-l ph5 silver fw1 ">{data.allContentfulConcepts.edges["0"].node.webrushimageDescription}</p>
                        <a href="https://webrush.dk/" className="avenir fw1 link light-blue" target="_blank">www.webrush.dk</a>
                    </div>
                    <div className="w-50 vh-50 flex justify-center">
                        <img className="w-80 h-100 mb0" src={data.allContentfulConcepts.edges["0"].node.webrushimage.file.url} alt=""/>
                    </div>
                </div>
                {/* WeSnack section */}
                <div className="flex flex-wrap bt b--light-gray">
                    <div className="w-50 vh-50 flex justify-center">
                        <img className="w-80 h-100 mb0" src={data.allContentfulConcepts.edges["0"].node.wesnackimage.file.url} alt=""/>
                    </div>
                    <div className="w-50 vh-50 flex flex-column items-center justify-center">
                        <h3 className="avenir fw4 silver">{data.allContentfulConcepts.edges["0"].node.wesnackimageHeadline}</h3>
                        <p className="avenir tc lh-copy-l ph5 silver fw1 ">{data.allContentfulConcepts.edges["0"].node.wesnackimageDescription}</p>
                        <a href="https://wesnack.dk/" className="avenir fw1 link light-blue" target="_blank">www.wesnack.dk</a>
                    </div>
                </div>
                {/* WeSomething section
                <div className="flex flex-wrap bt b--light-gray">
                    <div className="w-50 vh-50 flex flex-column items-center justify-center">
                        <h3 className="avenir fw4 silver">{data.allContentfulConcepts.edges["0"].node.webrushimageHeadline}</h3>
                        <p className="avenir tc lh-copy-l ph5 silver fw1 ">{data.allContentfulConcepts.edges["0"].node.webrushimageDescription}</p>
                        <a href="https://webrush.dk/" className="avenir fw1 link light-blue" target="_blank">www.webrush.dk</a>
                    </div>
                    <div className="w-50 vh-50 flex justify-center">
                        <img className="w-80 h-100 mb0" src={data.allContentfulConcepts.edges["0"].node.webrushimage.file.url} alt=""/>
                    </div>
                </div>
                */}
            </div>
        )
    }
}

export const query = graphql`
    query ConceptspageQuery {
        allContentfulConcepts {
            edges {
                node {
                    conceptsDescription {
                        conceptsDescription
                    }
                    webrushimageHeadline
                    webrushimageDescription
                    webrushimage {
                        file {
                            url
                        }
                    }
                    wesnackimageHeadline
                    wesnackimageDescription
                    wesnackimage {
                        file {
                            url
                        }
                    }
                }
            }
        }
    }`
