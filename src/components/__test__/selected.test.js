import React from 'react'
import ReactDOM from 'react-dom'
import Selected from '../Selected'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { cities } from '../../data'

afterEach(cleanup)

describe('Selected Component', () => {
    it('renders correctly', () =>{
        const div = document.createElement('div')
        ReactDOM.render(<Selected cities={[]} />, div)
        ReactDOM.unmountComponentAtNode(div)
    })

})
