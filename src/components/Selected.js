import React from 'react'
import Card from '../containers/Card'

export default ({ cities, selected, toggleOption }) => {
	const renderData = cities && cities.some((c) =>
		selected.some((s) => s.cityId === c.id)
  )
	const renderCities = cities
		.filter((c) => selected.some((s) => s.cityId === c.id))
		.map((city) => (
			<Card key={city.id} title={city.name}>
				{selected
					.filter((op) => op.cityId === city.id)
					.map((name) => (
						<div key={name.id} className="panel-block is-active">
							<span className="tag is-warning is-medium">
								{name.name}
								<button onClick={e => toggleOption(name)} className="delete is-small"></button>
							</span>
						</div>
					))}
			</Card>
		))

	if (renderData) {
		return <div data-testid="selected" className="box">{renderCities}</div>
	} else {
		return <div data-testid="selected" className="box">No data selected</div>
	}
}
