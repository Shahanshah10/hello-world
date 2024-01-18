import React from 'react'

export default function Person({person}) {
  return (
    <div>
      <h2>I am {person.name}. I am {person.age} old. I am working as {person.role}</h2>
    </div>
  )
}
