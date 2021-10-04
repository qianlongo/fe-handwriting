var LRUCache = function (capacity) {
  // 用数组记录读和写的顺序
  this.keys = []
  // 用对象来保存key value值
  this.cache = {}
  // 容量
  this.capacity = capacity
}

LRUCache.prototype.get = function (key) {
  // 如果存在
  if (this.cache[key]) {
    // 先删除原来的位置
    remove(this.keys, key)
    // 再移动到最后一个，以保持最新访问
    this.keys.push(key)
    // 返回值
    return this.cache[key]
  }
  return -1
}

LRUCache.prototype.put = function (key, value) {
  if (this.cache[key]) {
    // 存在的时候先更新值
    this.cache[key] = value
    // 再更新位置到最后一个
    remove(this.keys, key)

    this.keys.push(key)
  } else {
    // 不存在的时候加入
    this.keys.push(key)
    this.cache[key] = value
    // 容量如果超过了最大值，则删除最久未使用的（也就是数组中的第一个key）
    if (this.keys.length > this.capacity) {
      removeCache(this.cache, this.keys, this.keys[0])
    }
  }
}

// 移出数组中的key
function remove(arr, key) {
  if (arr.length) {
    const index = arr.indexOf(key)

    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

// 移除缓存中 key
function removeCache(cache, keys, key) {
  cache[key] = null
  remove(keys, key)
}

const lRUCache = new LRUCache(2)

console.log(lRUCache.put(1, 1)) // 缓存是 {1=1}
console.log(lRUCache.put(2, 2)) // 缓存是 {1=1, 2=2}
console.log(lRUCache.get(1))    // 返回 1
console.log(lRUCache.put(3, 3)) // 该操作会使得关键字 2 作废，缓存是 {1=1, 3=3}
console.log(lRUCache.get(2))    // 返回 -1 (未找到)
console.log(lRUCache.put(4, 4)) // 该操作会使得关键字 1 作废，缓存是 {4=4, 3=3}
console.log(lRUCache.get(1) )   // 返回 -1 (未找到)
console.log(lRUCache.get(3))    // 返回 3
console.log(lRUCache.get(4) )   // 返回 4