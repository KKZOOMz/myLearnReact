import React, { useContext } from 'react'
import {tom} from '../store/index'
// import {Context} from './UseContext'
// 创建Context对象
export default function UseContext() {
  const ctx = useContext(tom)
  console.log(ctx)
  return (
    <div>
      <div>
        我是{ctx.name} ---- 今年{ctx.age}
      </div>
    </div>
  )
}
