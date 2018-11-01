module.exports = {
  plugins: [
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `open sans\:300,600`
        ]
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-50747244-1",
        head: true
      }
    },
  ],
  siteMetadata: {
    title: 'ckwright',
    pathPrefix: "/ckwright.com",
    description: 'Senior Product Manager',
    keywords: 'ux, product manager, portfolio, personal website',
    url: 'http://ckwright.com/'
  }
};
