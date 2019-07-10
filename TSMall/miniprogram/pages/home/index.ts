//index.js
//获取应用实例
import { IMyApp } from '../../app'
// app实例不使用会报错
const app = getApp<IMyApp>()

Page({
  data: {
    userInfo: {}
  },
  onLoad() {
    console.log(app)
  },
})
