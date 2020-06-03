/*
 * @Author: huangzibin
 * @Date: 2020-04-16 14:24:05
 * @Last Modified by: huangzibin
 * @Last Modified time: 2020-06-03 16:16:18
 */

module.exports = {
  // chainWebpack: config => {
  //   config.module
  //     .rule('css')
  //     .test(/\.css$/)
  //     .oneOf('vue')
  //     .resourceQuery(/\?vue/)
  //     .use('px2rem')
  //     .loader('px2rem-loader')
  //     .options({
  //       remUnit: 80   //代表的是 1rem = ？px  这里假设设计稿是 1920px ，那么这里的比例就是 1/10
  //     })
  //     .end()
  // },
 
  css: {
      loaderOptions: {
        postcss: {
          plugins: [
            //remUnit这个配置项的数值是多少呢？？？ 通常我们是根据设计图来定这个值，原因很简单，便于开发。
            //假如设计图给的宽度是750，我们通常就会把remUnit设置为75，这样我们写样式时，可以直接按照设计图标注的宽高来1:1还原开发。
            require('postcss-px2rem')({
              remUnit: 64
            })
          ]
        }
      },
    },
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views',
      }
    }
  },
  
}