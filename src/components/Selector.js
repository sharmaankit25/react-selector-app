import React from 'react'
import Card from '../containers/Card'

export default ({ cities, options, toggleOption }) => {
    return (
      <div className="box">
      { cities.map(city => (
        <Card key={city.id} title={city.name}>
          { options.filter(op => op.cityId === city.id).map(name => (
            <div key={name.id} className="panel-block is-active">
            <label className="checkbox">
              <input checked={name.status}  onClick={e => toggleOption(name)} type="checkbox" />
              { name.name }
            </label>
            </div>
          ))
        }

        </Card>
      )) }

      </div>
      )
}
