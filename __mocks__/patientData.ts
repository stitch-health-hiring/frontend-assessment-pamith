import { Patient } from '../types/patients'

const patientData: { patients: Patient[] } = {
	patients: [
		{
			id: '1',
			firstName: 'John',
			lastName: 'Smith',
			dateOfBirth: '1931-02-07',
			dateOfRegistration: '2023-03-15',
			favoriteColor: 'blue',
		},
		{
			id: '2',
			firstName: 'August',
			lastName: 'Winters',
			dateOfBirth: '1969-07-16',
			dateOfRegistration: '2022-05-29',
			favoriteColor: 'black',
		},
		{
			id: '3',
			firstName: 'Sarah',
			lastName: 'Jane',
			dateOfBirth: '1985-03-12',
			dateOfRegistration: '2021-09-02',
			favoriteColor: 'purple',
		},
	],
}

export default patientData
