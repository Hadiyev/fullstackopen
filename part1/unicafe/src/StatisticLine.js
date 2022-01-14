import React from 'react'

export default function StatisticLine(props) {
    return (
        <div>
            <p>{props.text}: {props.value} {props.percentage ? '%' : ''}</p>
        </div>
    )
}
