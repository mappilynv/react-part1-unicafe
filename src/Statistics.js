const StatisticsLine = ({ text, value }) => {
    return (
        <>
            <tr>
                <td>{text}</td>
                <td>{value}</td>
            </tr> 
        </>
    )
}

const Statistics = (props) => {
    const SomeFeedback = (props.good+props.neutral+props.bad) !== 0;
    if(SomeFeedback){
        return (
            <>
                <table>
                    <tbody>
                        <StatisticsLine text='Good' value={props.good} />
                        <StatisticsLine text='Neutral' value={props.neutral} />
                        <StatisticsLine text='Bad' value={props.bad} />
                        <StatisticsLine text='All'value={props.good + props.bad + props.neutral}/>
                        <StatisticsLine text='Average' value={(props.good*1 + props.bad*-1)/(props.good + props.bad + props.neutral)}/>
                        <StatisticsLine text='Positive Percentage'value={Math.round((props.good*100)/(props.good + props.bad + props.neutral)) + '%'} />
                    </tbody>
                </table>
            </>
          )
    } else {
        return(
            <div>No Feedback Given</div>
        )
    }
}

export default Statistics;
