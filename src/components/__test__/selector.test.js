import React from 'react'
import ReactDOM from 'react-dom'
import Selector from '../Selector'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { cities } from '../../data'

afterEach(cleanup)

describe('Selector Component', () => {
    it('renders correctly', () =>{
        const div = document.createElement('div')
        ReactDOM.render(<Selector cities={[]} />, div)
        ReactDOM.unmountComponentAtNode(div)
    })
})
