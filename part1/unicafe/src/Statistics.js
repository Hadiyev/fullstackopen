import React from 'react'

export default function Statistics(props) {
    const calculateAverageFeedback = () => {
        return (props.numGood + props.numBad + props.numNeutral)/3;
    }

    const calculatePositiveFeedbackPercentage = () => {
        return props.numGood/(props.numGood + props.numBad + props.numNeutral)*100;
    
    }
    return (
        <div>
            <p>average: {calculateAverageFeedback()}</p>
            {(props.numGood + props.numBad + props.numNeutral) !== 0 ? 
                <div>
                  <p>positive: {calculatePositiveFeedbackPercentage()} %</p> 
                 </div>
            : <p>There is not any feedback yet.</p>
            }
        </div>
    )
}
