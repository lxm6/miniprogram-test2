Page({
  onTap: function(event) {
    // wx.navigateTo({
    //   url: "../posts/post"
    // });
    wx.switchTab({
      url: "../posts/post"
    });
  //如果要跳转到一个带tab的页面，需要使用switchTab方法，不带tab可以使用navigateTo或redirect
  }

})