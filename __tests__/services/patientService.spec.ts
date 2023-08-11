import { getAllPatients } from '../../services/patientService'
import mockPatientData from '../../__mocks__/patientData'

describe('when getting all patient data', () => {
	test('should return all patient data', async () => {
		fetchMock.mockResponseOnce(JSON.stringify(mockPatientData))

		const patients = await getAllPatients()

		expect(patients).toEqual(mockPatientData)
	})
})
