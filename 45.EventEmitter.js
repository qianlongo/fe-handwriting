class EventEmitter {
  constructor () {
    this.events = {}
  }
  // 事件监听
  on (evt, callback, ctx) {
    if (!this.events[ evt ]) {
      this.events[ evt ] = []
    }
    
    this.events[ evt ].push(callback)

    return this
  }
  // 发布事件
  emit (evt, ...payload) {
    const callbacks = this.events[ evt ]

    if (callbacks) {
      callbacks.forEach((cb) => cb.apply(this, payload))
    }

    return this
  } 
  // 删除订阅
  off (evt, callback) {

    // 啥都没传，所有的事件都取消
    if (typeof evt === 'undefined') {
      delete this.events
    } else if (typeof evt === 'string') {
      // 删除指定事件的回调 
      if (typeof callback === 'function') {
        this.events[ evt ] = this.events[ evt ].filter((cb) => cb !== callback)
      } else {
        // 删除整个事件
        delete this.events[ evt ]
      }
    }

    return this
  }
  // 只进行一次的事件订阅
  once (evt, callback, ctx) {
    const proxyCallback = (...payload) => {
      callback.apply(ctx, payload)
      // 回调函数执行完成之后就删除事件订阅
      this.off(evt, proxyCallback)
    }

    this.on(evt, proxyCallback, ctx)
  }
}

// 测试

const e1 = new EventEmitter()

const e1Callback1 = (name, sex) => {
  console.log(name, sex, 'evt1---callback1')
}
const e1Callback2 = (name, sex) => {
  console.log(name, sex, 'evt1---callback2')
}
const e1Callback3 = (name, sex) => {
  console.log(name, sex, 'evt1---callback3')
}

e1.on('evt1', e1Callback1)
e1.on('evt1', e1Callback2)
e1.once('evt1', e1Callback3)
e1.emit('evt1', '前端胖头鱼', 'boy')
console.log('------尝试删除e1Callback1------')
e1.off('evt1', e1Callback1)
e1.emit('evt1', '前端胖头鱼', 'boy')




