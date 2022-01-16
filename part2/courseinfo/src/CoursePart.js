import React from 'react'

export default function CoursePart(props) {
    return (
        <div>
            <p>{props.part.name} {props.part.exercises}</p>
        </div>
    )
}
