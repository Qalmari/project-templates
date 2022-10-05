import { describe, expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from './App'

describe('Test App.tsx', () => {
  test('Should show a button', () => {
    render(<App/>)

    const button = screen.getByText(/count is 0/i)
    expect(button).toBeDefined()
  })
})
