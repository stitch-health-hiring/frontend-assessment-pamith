import React from 'react'
import { findByTestId, render, screen } from '@testing-library/react'
import mockPatientData from '../__mocks__/patientData'
import Index from '../pages/index'

test('renders title', () => {
	render(<Index patientData={mockPatientData.patients} />)
	const headerElement = screen.getByText(/Patients/)
	expect(headerElement).toBeInTheDocument()
})

test('renders patient information', () => {
	render(<Index patientData={mockPatientData.patients} />)

	expect(
		screen.getByText(
			`${mockPatientData.patients[0].firstName} ${mockPatientData.patients[0].lastName}`,
		),
	).toBeInTheDocument()
})
