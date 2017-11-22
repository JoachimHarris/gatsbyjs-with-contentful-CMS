module.exports = {
    siteMetadata: {
        title: `Gatsby Default Starter`
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-sass`,
        {
            resolve: `gatsby-source-contentful`,
            options: {
                spaceId: `p6m1eepbneht`,
                accessToken: `38ebf679ec9b431edfa34617134f1212668ee8da6acf407bb921a61c8fd69938`,
            }
        }
    ]
};
