import React, { useEffect } from 'react'

// 自己封装的hook都要使用use开头
const useChangeTitle = (title) => {
  useEffect(() => {
    document.title = title
  }, [title])
}

export default function CustomHooks() {
  useChangeTitle('自定义修改标题的hooks1')
  return (
    <div>
      测试自己封装的hooks
    </div>
  )
}
