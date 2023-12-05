import { useState } from "react"

export default function Greeting( {name} ) {

  return (
    <p>{`Hello, ${!name ? 'visitor' : name}`}</p>
  )
}