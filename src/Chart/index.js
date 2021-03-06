import React, { Fragment } from 'react'
import { VictoryChart, VictoryLine, VictoryTheme, VictoryContainer, VictoryLegend } from 'victory'
import { connect } from 'react-redux'
import { func, getNewton } from './newton'

function Chart(props) {

    const { points } = props
    const newton = getNewton(points)

    return (<Fragment>
        <VictoryChart
            maxDomain={ { x: 7, y: 4 } }
            minDomain={ { x: -1, y: -4 } }
            theme={ VictoryTheme.material }
            containerComponent={ <VictoryContainer responsive={ false }/> }
            width={ 800 }
            height={ 800 }>
            <VictoryLegend x={ 200 } y={ 50 }
                           orientation="horizontal"
                           gutter={ 20 }
                           data={ [
                               {
                                   name: 'Graph of a function',
                                   symbol: { fill: 'd00f50' },
                                   labels: { fill: 'd00f50' }
                               },
                               {
                                   name: 'Graph of a Newton polynomial',
                                   symbol: { fill: '4256b1' },
                                   labels: { fill: '4256b1' }
                               },
                           ] }
            />
            <VictoryLine data={ func }
                         animate={ { duration: 1500 } }
                         style={ {
                             data: {
                                 stroke: '#d00f50'
                             }
                         } }/>
            <VictoryLine data={ newton }
                         animate={ {
                             duration: 1500
                         } }
                         style={ {
                             data: {
                                 stroke: '#4256b1'
                             }
                         } }/>
        </VictoryChart>
    </Fragment>)
}

export default connect(state => ({
    points: state
}))(Chart)