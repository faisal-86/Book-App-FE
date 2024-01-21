import React from 'react'

export default function Category(props) {
  return (
    <>
            <td>{props.name}</td>
            <td>{props.book}</td>
            <td>{props.image}</td>
    </>
  )
}
