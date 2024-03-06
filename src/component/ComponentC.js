import React from 'react'
import {context} from "../index"

function ComponentC() {
  return (
    <>
    <context.Consumer>
        {
            (student)=>{
                return(
                    <>
                    <h2>{student.qualification}</h2>
                    </>
                )
            }
        }
    </context.Consumer>
    </>
  )
}

export default ComponentC
