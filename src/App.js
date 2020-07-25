import React, { useEffect } from 'react'
import Selector from './components/Selector'
import Selected from './components/Selected'
import { loadCities, loadNames } from "./actions"
import { connect } from 'react-redux'

function App({ loadCities, loadNames, cities, names }) {
  useEffect(()=>{
    loadCities()
    loadNames()
  },[loadCities, loadNames]);

  return <div className="has-background-info">
  <div className="section">
    <div className="columns">
      <div className="column">
        <Selector cities={cities} options={names} />
      </div>
      <div className="column">
        <Selected cities={cities} selected={names} />
      </div>
    </div>
    </div>
  </div>
}

const mapStateToProps = ({ cities, names }) => {
  return { cities, names }
}

export default connect(mapStateToProps,{ loadCities, loadNames })(App)
