const storage = {
  prefix: 'fatFish',
  timeSign: '|fatFish|',
  setItem (key, value, time) {
    // 做一个key的保护
    key = `${this.prefix}${key}`
    // 没有传入时间，默认过期时间是一个月，当然也可以是其他时间或者不设置
    time = time ? new Date(time).getTime() : Date.now() + 24 * 60 * 60 * 31 * 1000
    // 构造一个形如 1646094676134|fatFish|"前端胖头鱼" 结构的字符串
    window.localStorage.setItem(key, `${time}${this.timeSign}${JSON.stringify(value)}`)
  },
  getItem (key) {
    key = `${this.prefix}${key}`
    let value = window.localStorage.getItem(key)

    if (value) {
      let index = value.indexOf(this.timeSign)
      let time = +value.slice(0, index)
      // 判断时间是否已过期
      if (time > Date.now()) {
        value = JSON.parse(value.slice(index + this.timeSign.length))
      } else {
        value = null
        window.localStorage.removeItem(key)
      }
    }

    return value
  }
}