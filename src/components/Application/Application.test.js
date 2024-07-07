import { render, screen } from '@testing-library/react'
import { Application } from './Application'

describe('Application', () => {
  test('renders', () => {
    render(<Application />)

    /** getByRole */

    const nameElement = screen.getByRole('textbox', {
        name: 'Name'
    })
    expect(nameElement).toBeInTheDocument()

    const jobLocationElement = screen.getByRole('combobox')
    expect(jobLocationElement).toBeInTheDocument()

    const termsElement = screen.getByRole('checkbox')
    expect(termsElement).toBeInTheDocument()

    const submitElement = screen.getByRole('button')
    expect(submitElement).toBeInTheDocument()

    const bioElement = screen.getByRole('textbox', {
        name: 'Bio',
    })
    expect(bioElement).toBeInTheDocument()

    const pageHead = screen.getByRole('heading', {
        name: 'Job application form',
    })
    expect(pageHead).toBeInTheDocument()

    const pageHeading = screen.getByRole('heading', {
        level: 1,
    })
    expect(pageHeading).toBeInTheDocument()

    const sectionHeading = screen.getByRole('heading', {
        level: 2,
    })
    expect(sectionHeading).toBeInTheDocument()

     /** getByLabelText */
    const nameElement2 = screen.getByLabelText('Name')
    expect(nameElement2).toBeInTheDocument()

    const termsElement2 = screen.getByLabelText('I agree to the terms and conditions')
    expect(termsElement2).toBeInTheDocument()

    const nameElement3 = screen.getByLabelText('Name', {
        selector: 'input'
    })
    expect(nameElement3).toBeInTheDocument()

    /** getByPlaceholderText */

    const nameElement4 = screen.getByPlaceholderText('Fullname')
    expect(nameElement4).toBeInTheDocument()

    /** getByText */

    const paragraphElement = screen.getByText('All fields are mandatory')
    expect(paragraphElement).toBeInTheDocument()

    const paragraphElement1 = screen.getByText((content)=>content.startsWith('All'))
    expect(paragraphElement1).toBeInTheDocument()

    const paragraphElement2 = screen.getByText((content)=>content.endsWith('mandatory'))
    expect(paragraphElement2).toBeInTheDocument()

    /** getByTestId */

    const customElement = screen.getByTestId('custom-element')
    expect(customElement).toBeInTheDocument()

  })

})