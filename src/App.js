import React, { useState, useEffect } from 'react'

// 在这个组件里面使用useEffect
function Effect() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    // 处理副作用逻辑
    document.title = `你点击了${count}了喔`
    // return 返回对应的卸载时的处理
    return () => {
      console.log('组件卸载或更新了')
    }
    // 空数组只执行一次
    // 非空数组，数组里的值变一次执行一次,return也每次都执行
    // 不填则每次都执行
  }, [])
  return (
    <div>
      <div>你点击了{count}次</div>
      <button onClick={() => setCount(count + 1)}>点击+1</button>
    </div>
  )
}

export default function App() {
  const [count, setCount] = useState(0)
  return (
    <div>
      我是小弟，今天学习Hooks
      <div>你点击了{count}次</div>
      <button onClick={() => setCount(count + 1)}>点击+1</button>
      <button onClick={() => setCount(count - 1)}>点击-1</button>
      <p>使用使用了useEffect的组件</p>
      {count > 10 ? <Effect></Effect> : null}
    </div>
  )
}
