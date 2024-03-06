import React, { useContext } from 'react'
import {context} from "../index"

function ComponentB() {
    let x=useContext(context)
  return (
    <>
    <h2>{x.add}</h2>
    <h2>{x.gender}</h2>
    </>
  )
}

export default ComponentB
