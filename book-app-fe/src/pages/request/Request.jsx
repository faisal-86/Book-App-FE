import React from 'react'

export default function Request(props) {
  return (
    <>
        <td>{props.book}</td>
        <td>{props.user}</td>
        <td>{props.description}</td>
        <td>{props.approval}</td>
    </>
  )
}
