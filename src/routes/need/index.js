module.exports = {
  path: 'need',
  getComponent(location, cb) {
    require.ensure([], (require) => {
      cb(null, require('components/need'))
    })
  }
}