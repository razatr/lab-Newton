import React from 'react'
import { VictoryChart, VictoryLine, VictoryTheme, VictoryContainer } from 'victory'
import { connect } from 'react-redux'
import { func, getNewton } from './newton'

function Chart(props) {

    const { points } = props
    const newton = getNewton(points)

    return (<VictoryChart
        maxDomain={ { x: 7, y: 4 } }
        minDomain={ { x: -1, y: -4 } }
        theme={ VictoryTheme.material }
        containerComponent={ <VictoryContainer responsive={ false }/> }
        width={ 800 }
        height={ 800 }>
        <VictoryLine data={ func }
                     animate={ { duration: 1500 } }
                     style={ {
                         data: {
                             stroke: '#ff0000'
                         }
                     } }/>
        <VictoryLine data={ newton }
                     animate={ {
                         duration: 1500
                     } }
                     style={ {
                         data: {
                             stroke: '#00ff00'
                         }
                     } }/>
    </VictoryChart>)
}

export default connect(state => ({
    points: state
}))(Chart)