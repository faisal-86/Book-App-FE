import React from 'react'

export default function Review(props) {
    return (
        <>
            <td>{props.book}</td>
            <td>{props.user}</td>
            <td>{props.comment}</td>
            <td>{props.rating}</td>
        </>
      )
}
