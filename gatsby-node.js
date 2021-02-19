exports.onCreatePage = ({ page, actions }) => {
  const { createPage } = actions

  switch (page.path) {
    // Note that we have files in /_dynamic/ to workaround the following bug:
    // https://github.com/gatsbyjs/gatsby/issues/29606 This is to ensure that
    // we're only covering the problem with `gatsby-plugin-netlify`
    case '/_dynamic/thing/':
      createPage({
        ...page,
        matchPath: '/dynamic/thing/:id/'
      })
      break
    case '/_dynamic/fallback/':
      createPage({
        ...page,
        matchPath: '/dynamic/*'
      })
      break
  }
}
