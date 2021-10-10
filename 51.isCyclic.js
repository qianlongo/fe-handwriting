const isCyclic = (obj) => {
  let stackSet = new Set()
  let detected = false

  const detect = (obj) => {
    if (obj && typeof obj != 'object') {
      return
    }

    if (stackSet.has(obj)) {
      return detected = true
    }

    stackSet.add(obj)

    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        detect(obj[key])
      }
    }

    stackSet.delete(obj)
  }

  detect(obj)

  return detected
}

// 对象之间相互引用

let obj1 = { name: '前端胖头鱼1' }
let obj2 = { name: '前端胖头鱼2' }
// 对象1的属性引用了对象2
obj1.obj = obj2
// 对象2的属性引用了对象1
obj2.obj = obj1

let obj = { name: '前端胖头鱼1' }
// 对象的属性引用了对象本身
obj.child = obj

let obj3 = {
  name: '前端胖头鱼',
  child: {}
}

obj3.child.obj = obj3.child

let tempObj = {
  name: '前端胖头鱼'
}
let obj4 = {
  obj1: tempObj,
  obj2: tempObj
}

console.log(isCyclic(obj1))
console.log(isCyclic(obj2))
console.log(isCyclic(obj))
console.log(isCyclic(obj3))
console.log(isCyclic(obj4))

console.log(isCyclic(1))
console.log(isCyclic('前端胖头鱼'))
console.log(isCyclic(false))
console.log(isCyclic(null))
console.log(isCyclic(undefined))
console.log(isCyclic([]))
console.log(isCyclic(Symbol('前端胖头鱼')))