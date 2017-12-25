import React from 'react';
import Link from 'gatsby-link';

export default class Contact extends React.Component {
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
                                {data.allContentfulWeGroupContact.edges["0"].node.contactDescription.contactDescription}
                            </p>
                    </div>
                </div>
                <div className="flex flex-wrap bt b--light-gray">
                    <div className="w-50-ns w-100-m h-60 flex flex-column items-center justify-center pt4">
                        <h3 className="avenir fw4 silver">
                            {data.allContentfulWeGroupContact.edges["0"].node.contactFieldHeadline}
                        </h3>
                        <p className="avenir lh-copy-l tc ph5 silver fw1 f6">
                            {data.allContentfulWeGroupContact.edges["0"].node.contactFieldMessage}
                        </p>
                        <a className="avenir ph5 silver fw1 link mb3 light-blue f6" href="tel:+4512345678">{data.allContentfulWeGroupContact.edges["0"].node.contactFieldPhoneNumber}</a>
                        <a href="" className="avenir ph5 silver link light-blue fw1 mb3 f6">
                            {data.allContentfulWeGroupContact.edges["0"].node.contactFieldEmail}
                        </a>
                        <p className="avenir ph5 silver fw1 f6">
                            {data.allContentfulWeGroupContact.edges["0"].node.contactFieldAddress}
                        </p>
                        <p className="avenir ph5 silver fw1 f7">
                            Danish Vat Number: {data.allContentfulWeGroupContact.edges["0"].node.contactFieldVatNumber}
                        </p>
                    </div>
                    <div className="w-50-ns w-100-m h-60 flex justify-center">
                        <img className="w-100 h-100 mb0 o-60" src={data.allContentfulWeGroupContact.edges["0"].node.contactFieldGoogleMap.file.url} alt=""/>
                    </div>
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
                    contactDescription {
                        contactDescription
                    }
                    contactFieldHeadline
                    contactFieldMessage
                    contactFieldPhoneNumber
                    contactFieldEmail
                    contactFieldAddress
                    contactFieldVatNumber
                    contactFieldGoogleMap {
                        file {
                            url
                        }
                    }
                }
            }
        }
    }`
