/**
 * Created by 35031 on 2017/1/9.
 */
module.exports={
  entry:'./entry.js',
  output: {
      path:__dirname,
      filname:'bundle.js'
  },
    devtool:'source-map',
    module:{
      loaders:[
          {test:/\.css$/,loader:'style!css'}
      ]
    }
};