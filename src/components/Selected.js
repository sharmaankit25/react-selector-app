import React from 'react'
import Card from '../containers/Card'

export default ({ cities, selected }) => {
    return (
      <div className="box">
      { cities.map(city => (
        <Card key={city.id} title={city.name}>
          { selected.filter(op => op.cityId === city.id).map(name => (
            <div key={name.id} className="panel-block is-active">
            <span className="tag is-warning is-medium">
              { name.name }
              <button className="delete is-small"></button>
            </span>
            </div>
          )) }

        </Card>
      )) }

      </div>
    )
}
