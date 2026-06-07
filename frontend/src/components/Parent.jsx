import React from 'react'
import Child from './Child'

const Parent = () => {
  return (
    <div>
        <Child name ="kanishka" age= {19}  marks={[90,98,97,96,99]} person={{name :"hari",dept :["AI&DS"]}}/>
    </div>
  )
}

export default Parent
