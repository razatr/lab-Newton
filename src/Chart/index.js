import React from 'react'
import { VictoryChart, VictoryLine, VictoryTheme, VictoryContainer } from 'victory'
import { func, newton } from './newton'

function Chart() {
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
                             stroke: '#c43a31'
                         }
                     } }/>
        <VictoryLine data={ newton }
                     animate={ {
                         duration: 1500,
                         delay: 1000
                     } }
                     style={ {
                         data: {
                             stroke: '#00ff00'
                         }
                     } }/>
    </VictoryChart>)
}

export default Chart