import React from 'react'
import ReactDOM from 'react-dom'
import Card from './../Card'
import { render, cleanup, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

afterEach(cleanup)

describe('Card Component', () => {
    it('renders correctly', () =>{
        const div = document.createElement('div')
        ReactDOM.render(<Card></Card>, div)
        ReactDOM.unmountComponentAtNode(div)
    })

    it('renders title correctly', () => {
        const { queryByTestId } = render(<Card title='My Title'></Card>)
        expect(queryByTestId('card').textContent).toEqual('My Title')
    })

    test('renders children correctly', () => {
        const testMessage = 'Test Message'
        render(<Card>{testMessage}</Card>)
        expect(screen.getByText(testMessage)).toBeInTheDocument()
      })
})
