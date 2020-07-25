import React from 'react'

export default ({ children, title }) => (
    <article className="panel is-primary">
        <p className="panel-heading">
          { title }
        </p>
        { children }
    </article>
)
