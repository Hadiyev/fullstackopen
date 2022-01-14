import React from 'react'
import StatisticLine from './StatisticLine'

export default function Statistics(props) {
    const calculateAverageFeedback = () => {
        return (props.numGood + props.numBad + props.numNeutral)/3;
    }

    const calculatePositiveFeedbackPercentage = () => {
        return props.numGood/(props.numGood + props.numBad + props.numNeutral)*100;
    }
    return (
        <div>
            <h2>statistics</h2>
            <table>
                <tbody>
                    <StatisticLine text = 'good' value = {props.numGood}/>
                    <StatisticLine text = 'neutral' value = {props.numNeutral}/>
                    <StatisticLine text = 'bad' value = {props.numBad}/>
                    <StatisticLine text = 'average' value = {calculateAverageFeedback()}/>
                    {(props.numGood + props.numBad + props.numNeutral) !== 0 ? 
                        <StatisticLine text = 'positive' value = {calculatePositiveFeedbackPercentage()} percentage = {true} /> : 
                        <StatisticLine text = 'No feedback given' />
                    }
                </tbody>
            </table>
        </div>
    )
}
