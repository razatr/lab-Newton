import React from 'react'
import Chart from './Chart'
import Settings from './Settings'

function App() {
    return (<div style={ { display: 'flex', alignItems: 'center', flexDirection: 'column' } }>
        <Chart/>
        <Settings/>
    </div>)
}

export default App
