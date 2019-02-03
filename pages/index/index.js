// pages/index/index.js

//获取应用实例
const app = getApp()
Page({
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
//获得dialog组件
    this.picker = this.selectComponent("#picker");
  },
  showPicker(){
    this.picker.showPicker();
  },
//取消事件
  _cancelEvent(){
    console.log('你点击了取消');
    this.picker.hidePicker();
  },
//确认事件
  _confirmEvent(){
    console.log('你点击了确定');
    this.picker.hidePicker();
  }
})