import React from 'react'
import {context} from "../index"


function ComponentA() {
  return (
    <div>
      <context.Consumer>
        {(student)=>{
          return(<div>
            <h1>Student Details</h1>
            <h1>{(student.name)}</h1>
          </div>
          )
        }}
      </context.Consumer>
    </div>
  )
}

export default ComponentA
