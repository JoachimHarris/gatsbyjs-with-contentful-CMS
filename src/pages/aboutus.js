import React from 'react';
import Link from 'gatsby-link'

export default class AboutUs extends React.Component {
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
                            <span
                                className="fw4">We</span><span className="fw1">
                                Group
                            </span>
                        </h1>
                        <p
                            className="avenir normal color-redOrange">
                            {data.allContentfulAboutUsPage.edges["0"].node.aboutUsDescription.aboutUsDescription}
                        </p>
                    </div>
            </div>
            <div className="flex flex-wrap bt b--light-gray">
                <div className="w-50 vh-50 flex flex-column items-center justify-center">
                    <h3 className="avenir color-redOrange normal">About us</h3>
                </div>
                <div className="w-50 vh-50 flex justify-center items-center">
                <p className="avenir color-redOrange normal ph6 tj">
                Eu legam despicationes, sint hic pariatur. Laboris sempiternum in laboris de nulla proident quibusdam, ne anim illum eu vidisse, multos est in noster
                quamquam, nam eram occaecat probant hic quis ne nostrud eu quae ne qui ipsum
                constias eruditionem, excepteur efflorescere ita litteris. An pariatur
                relinqueret ita laboris cohaerescant.</p>
                </div>
            </div>
            <div className="w-100 vh-10 flex flex-column items-center justify-center bt b--light-gray pt5">
            <h3 className="avenir color-redOrange normal">Our Values</h3>
            </div>
            <div className="flex flex-wrap">
                <div className="w-25 vh-25 flex justify-center items-center">
                <p className="avenir color-redOrange normal">
                    Design
                </p>
                </div>
                <div className="w-25 vh-25 flex justify-center items-center">
                <p className="avenir color-redOrange normal">
                    People
                </p>
                </div>
                <div className="w-25 vh-25 flex justify-center items-center">
                <p className="avenir color-redOrange normal">
                    Fun
                </p>
                </div>
                <div className="w-25 vh-25 flex justify-center items-center">
                <p className="avenir color-redOrange normal">
                    Love
                </p>
                </div>
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
                    aboutUsDescription {
                        aboutUsDescription
                    }
                }
            }
        }
    }`
