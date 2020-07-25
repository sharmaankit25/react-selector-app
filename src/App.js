import React, { useEffect } from 'react'
import Selector from './components/Selector'
import Selected from './components/Selected'
import { loadCities, loadNames, toggleName } from "./actions"
import { connect } from 'react-redux'

function App({ loadCities, loadNames, toggleName, cities, names }) {
  useEffect(()=>{
    loadCities()
    loadNames()
  },[loadCities, loadNames]);

  const toggleOption = (name) => {
    toggleName(name)
  }

  return <div className="has-background-info">
  <div className="section">
    <div className="columns">
      <div className="column">
        <Selector cities={cities} toggleOption={toggleOption} options={names} />
      </div>
      <div className="column">
        <Selected cities={cities}toggleOption={toggleOption}   selected={names.filter(s => s.status)} />
      </div>
    </div>
    </div>
  </div>
}

const mapStateToProps = ({ cities, names }) => {
  return { cities, names }
}

export default connect(mapStateToProps,{ loadCities, loadNames, toggleName })(App)
