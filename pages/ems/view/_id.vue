<template>
	<div>
		<EmployeeForm button-text="Update" title-text="Update Employee" :get-record="getEmployee" />
	</div>
</template>
<script>
import EmployeeForm from "~/components/serviceComponents/ems/employee-form";
export default {
	components:{
		EmployeeForm
	},
	layout: 'employee',
	mounted (){
		this.getEmployee
	},
	methods:{
		async getEmployee (dependants, personal_details, work_details, contact_details, kins) {
		 	const headers={
				headers: {
					'x-service': 'ems-svc'
				},
			}
			try {
				await	this.$axios.get(
					`api/employee/${this.$route.params.id}`, headers
				)
					.then(response =>{
						personal_details.first_name= JSON.stringify(response.data.data.first_name)
						personal_details.middle_name= JSON.stringify(response.data.data.middle_name),
						personal_details.last_name= JSON.stringify(response.data.data.last_name),
						personal_details.personal_identification_type_id= JSON.stringify(response.data.data.personal_identification_type_id),
						personal_details.identification_number= JSON.stringify(response.data.data.identification_number),
						personal_details.date_of_birth= JSON.stringify(response.data.data.date_of_birth),
						personal_details.gender_id= JSON.stringify(response.data.data.gender_id),
						personal_details.relationship_status_id= JSON.stringify(response.data.data.relationship_status_id),
						personal_details.nationality= JSON.stringify(response.data.data.nationality),
						contact_details.primary_mobile_number= JSON.stringify(response.data.data.primary_mobile_number),
						contact_details.alternate_mobile_number= JSON.stringify(response.data.data.alternate_mobile_number),
						contact_details.primary_email=JSON.stringify( response.data.data.primary_email),
						contact_details.work_email= JSON.stringify(response.data.data.work_email),
						contact_details.postal_address= JSON.stringify(response.data.data.postal_address),
						contact_details.residential_address= JSON.stringify(response.data.data.residential_address),
						contact_details.permanent_address= JSON.stringify(response.data.data.permanent_address),
						work_details.department_id= JSON.stringify(response.data.data.employment_data.department_id),
						work_details.section_id=JSON.stringify(response.data.data.employment_data.section_id),
						work_details.employment_type=JSON.stringify(response.data.data.employment_data.employment_type),
						work_details.employment_duration=JSON.stringify(response.data.data.employment_data.employment_duration),
						work_details.employment_date=response.data.data.employment_data.employment_date,
						work_details.exit_date=response.data.data.employment_data.exit_date
						let	kinDetails=response.data.data.kins
						     for (let i = 0; i < kinDetails.length; i++) {
							kins[i]=kinDetails[i]
						}
						// let	dependantDetails=response.data.data.dependants
						//      for (let i = 0; i < dependantDetails.length; i++) {
						// 	dependants[i]=dependantDetails[i]
						// }
						let	refereeDetails=response.data.data.referees
						     for (let i = 0; i < refereeDetails.length; i++) {
							referees[i]=refereeDetails[i]
						}
						let	workDetails=response.data.data.work_history
						     for (let i = 0; i < workDetails.length; i++) {
							work_history[i]=workDetails[i]
						}
						let	academicDetails=response.data.data.academic_qualifications
						     for (let i = 0; i < academicDetails.length; i++) {
							academic_qualifications[i]=academicDetails[i]
						}							
					})
					.catch(error => {
			       
					})
			} catch (error) {
				return
			}
		},
	}
	
}
</script>