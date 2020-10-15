import React, { useState, Fragment } from 'react'
import { Checkbox, FormControlLabel, makeStyles } from '@material-ui/core'
import { addPoint, deletePoint } from '../AC'
import { connect } from 'react-redux'

const h = Math.PI / 7

function Settings(props) {

    const [checkbox1, setCheckbox1] = useState(true)
    const [checkbox2, setCheckbox2] = useState(true)
    const [checkbox3, setCheckbox3] = useState(true)
    const [checkbox4, setCheckbox4] = useState(true)
    const [checkbox5, setCheckbox5] = useState(true)

    const { addPoint, deletePoint } = props

    return (<div >
        <FormControlLabel
            control={ <Checkbox checked={ checkbox1 }
                                onClick={ () => {
                                    checkbox1 ? deletePoint(0.5 * h) : addPoint(0.5 * h)
                                    setCheckbox1(!checkbox1)
                                } }
                                name="Point1"
                                color='primary'/> }
            label="Point 0.5h"
        />
        <FormControlLabel
            control={ <Checkbox checked={ checkbox2 }
                                onClick={ () => {
                                    checkbox2 ? deletePoint(2.5 * h) : addPoint(2.5 * h)
                                    setCheckbox2(!checkbox2)
                                } }
                                name="Point2"
                                color='primary'/> }
            label="Point 2.5h"
        />
        <FormControlLabel
            control={ <Checkbox checked={ checkbox3 }
                                onClick={ () => {
                                    checkbox3 ? deletePoint(6.5 * h) : addPoint(6.5 * h)
                                    setCheckbox3(!checkbox3)
                                } }
                                name="Point3"
                                color='primary'/> }
            label="Point 6.5h"
        />
        <FormControlLabel
            control={ <Checkbox checked={ checkbox4 }
                                onClick={ () => {
                                    checkbox4 ? deletePoint(4.5 * h) : addPoint(4.5 * h)
                                    setCheckbox4(!checkbox4)
                                } }
                                name="Point4"
                                color='primary'/> }
            label="Point 4.5h"
        />
        <FormControlLabel
            control={ <Checkbox checked={ checkbox5 }
                                onClick={ () => {
                                    checkbox5 ? deletePoint(1.5 * h) : addPoint(1.5 * h)
                                    setCheckbox5(!checkbox5)
                                } }
                                name="Point4"
                                color='primary'/> }
            label="Point 1.5h"
        />
    </div >)
}

export default connect(null, {
    addPoint,
    deletePoint
})(Settings)