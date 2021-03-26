// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const nodeExternals = require('webpack-node-externals')
const axios = require('axios')
module.exports = function (api) {
  api.chainWebpack((config, { isServer }) => {
    if (isServer) {
      config.externals([
        nodeExternals({
          allowlist: [/^vuetify/]
        })
      ])
    }
  })

  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
  })

  api.loadSource(async actions => {
    const { data } = await axios.get('http://localhost:1337/workouts/')

    const collection = actions.addCollection({
      typeName: 'Workout',
      path: '/workouts/:id'
    })

    for (const workouts of data) {
      collection.addNode({
        id: workouts.id,
        path: '/workouts/' + workouts.id,
        title: workouts.title,
        description: workouts.description,
        duration: workouts.duration,
        thumbnail: workouts.image.formats.thumbnail.url,
        image: workouts.image.formats.medium.url,
        category: workouts.categories[0].id,
        videourl: workouts.video_url
      })
    }
  })

  api.loadSource(async actions => {
    const { data } = await axios.get('http://localhost:1337/nutritions/')

    const collection = actions.addCollection({
      typeName: 'Nutrition',
      path: '/nutritions/:id'
    })

    for (const nutritions of data) {
      collection.addNode({
        id: nutritions.id,
        path: '/nutritions/' + nutritions.id,
        title: nutritions.title,
        description: nutritions.description,
        duration: nutritions.duration,
        thumbnail: nutritions.thumbnail.formats.medium.url,
        videourl: nutritions.video_url,
        type: nutritions.types[0].id
      })
    }
  })
}
