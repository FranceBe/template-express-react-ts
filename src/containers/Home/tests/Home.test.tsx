import '@testing-library/jest-dom/extend-expect'

import { render, screen } from '@testing-library/react'
import { Home } from 'containers/Home'
import React from 'react'

describe('Home', () => {
  it('should match snapshot', () => {
    const { container } = render(<Home />)
    expect(container.firstChild).toMatchSnapshot()
  })
  it('should render the Home text', () => {
    render(<Home />)
    expect(screen.getByText('Home :)')).toBeInTheDocument()
  })
})
