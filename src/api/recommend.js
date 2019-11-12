import jsonp from '../common/js/jsonp'
import {
  commonParams,
  options
} from './config.js'
export function getRecommend () {
  const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'
  /**
         * todo:Object.assign方法用来将源对象（source）的所有可枚举属性，复制到目标对象（target）。它至少需要两个对象作为参数，第一个参数是目标对象，后面的参数都是源对象。只要有一个参数不是对象，就会抛出TypeError错  下面是合并两个公共配置
         */
  const data = Object.assign({}, commonParams, {
    // 请求来源h5平台
    platform: 'h5',
    uin: 0,
    needNewcode: 1
  })
  return jsonp(url, data, options)
}
