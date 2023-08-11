import { useEffect } from 'react'
import { Patient } from '../../types/patients'

export default function PatientTable({
	patientData,
}: {
	patientData: Patient[]
}) {
	return (
		<>
			<table>
				<thead>
					<tr>
						<th>Name</th>
						<th>ID</th>
						<th>Date of birth</th>
						<th>Registration date</th>
					</tr>
				</thead>
				<tbody>
					{patientData.map((patient) => {
						return (
							<tr key={patient.id}>
								<td>{`${patient.firstName} ${patient.lastName}`}</td>
								<td>{patient.id}</td>
								<td>{patient.dateOfBirth}</td>
								<td>{patient.dateOfRegistration}</td>
							</tr>
						)
					})}
				</tbody>
			</table>
		</>
	)
}
