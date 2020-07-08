import fse from 'fs-extra'
import _ from 'lodash'
import path from 'path'
import webpack from 'webpack'
import pkg from './package.json'
import common from './webpack.common.config'

fse.emptyDirSync('__build__')

/**
 * 生产环境编译所需要webpack配置
 */
const webpackConfig: webpack.Configuration = {
  ...common,
  mode: 'none',
  devtool: 'source-map',
  externals: _.keys(pkg.dependencies),
  output: {
    libraryTarget: 'umd',
    filename: `main.umd.js`,
    path: path.join(__dirname, '__build__'),
  },
}

export default webpackConfig
