import React, { useContext } from 'react'
import Child from './ContextChild'
import {tim} from '../store/index'
// 创建context对象
// export const Context = React.createContext({ name: 'tom', age: '25' })

export default function UseContext() {
  const ctx = useContext(tim)
  console.log(ctx)
  return (
    <div>
      <h1>今天使用UseContext</h1>
      <div>
        我是{ctx.name} ---- 今年{ctx.age}
      </div>
      <p>使用子组件</p>
      <Child></Child>
    </div>
  )
}
