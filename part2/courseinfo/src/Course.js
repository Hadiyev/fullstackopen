import CoursePart from './CoursePart'
import React from 'react'

export default function Course(props) {
    return (
        <div>
            <h1>{props.course.name}</h1>
            {props.course.parts.map( part => {
                return <CoursePart key={part.id} part={part} />
            })}
        </div>
    )
}
