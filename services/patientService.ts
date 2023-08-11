import { Patient } from '../types/patients'

// Added a service inbetween api and page to allow for thorough unit testing and manipulation of data
export const getAllPatients = async (): Promise<Patient[]> => {
	const response = await fetch('http://localhost:3000/api/patients')

	if (response.status != 200) {
		throw { status: response.status }
	}

	const patientData = (await response.json()) as { patients: Patient[] }

	return patientData.patients
}
