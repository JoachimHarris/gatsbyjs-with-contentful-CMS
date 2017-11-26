import React from 'react'
import Link from 'gatsby-link'

export default class Index extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const data = this.props.data;
        console.log(data);
        return(
            <div>
                <div>
                    <img
                        className="w-100 vh-75"
                        src={data.allContentfulFrontpage.edges["0"].node.frontpageImage.file.url}
                        alt=""
                    />
                </div>
                <div className="ph6">
                    <h1>{data.allContentfulFrontpage.edges["0"].node.frontpageHeadline}</h1>
                    <p>{data.allContentfulFrontpage.edges["0"].node.frontpageDescription.frontpageDescription}</p>
                    <Link to="/page-2/">Go to page 2</Link>
                </div>
            </div>
        )
    }
}

export const query = graphql`
  query FrontpageQuery {
      allContentfulFrontpage {
          edges {
              node {
                  frontpageHeadline,
                  frontpageImage {
                      file {
                          url
                      }
                  },
                  frontpageDescription {
                      frontpageDescription
                  }
              }
          }
      }
  }`
