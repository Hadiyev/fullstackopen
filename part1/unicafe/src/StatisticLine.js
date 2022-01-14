import React from 'react'

export default function StatisticLine(props) {
    return (
        <tr>
            <td>{props.text}: </td>
            <td>{props.value} {props.percentage ? '%' : ''}</td>
        </tr>
    )
}
