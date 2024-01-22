import React from 'react'

export default function Book(props) {
  return (
    <>
        <td>{props.title}</td>
        <td>{props.author}</td>
        <td>{props.description}</td>
        <td>{props.isbn}</td>
        <td>{props.publish_date}</td>
        <td>{props.category}</td>
        <td>{props.library}</td>
        <td>{props.review}</td>
    

    </>
  )
}
