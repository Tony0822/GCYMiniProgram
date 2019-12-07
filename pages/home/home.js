// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:"师姐",
    age:18,
    students:[
      { id: 1, name: "A", age: 18 },
      { id: 2, name: "B", age: 19 },
      { id: 3, name: "C", age: 10 },
      { id: 4, name: "D", age: 21 }
    ],
    counter: 0
  },
  plusNumClick() {
    // 1.错误的做法：界面是不会刷新的
    // this.data.counter += 1
    // console.log(this.data.counter)
    this.setData({
      // console.log(this.data.counter),
      counter: this.data.counter + 1
    })
  },
  subNumClick(){
    this.setData({
      counter: this.data.counter - 1
    })
  }
  
})