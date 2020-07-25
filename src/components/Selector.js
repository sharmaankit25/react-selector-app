import React from 'react'
import Card from '../containers/Card'

export default ({ cities, options }) => {
    return (
      <div className="box">
      { cities.map(city => (
        <Card key={city.id} title={city.name}>
          { options.filter(op => op.cityId === city.id).map(name => (
            <div key={name.id} className="panel-block is-active">
              { name.name }
            </div>
          )) }

        </Card>
      )) }

      </div>
      )
}
