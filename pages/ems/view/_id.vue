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
	 getEmployee (dependants, personal_details, work_details, contact_details, kins) {
		 	const headers={
				headers: {
					'x-service': 'ems-svc'
				},
			}
			try {
				this.$axios.get(
					`api/employee/${this.$route.params.id}`, headers
				)
					.then(response =>{
						personal_details.first_name= response.data.data.first_name
						personal_details.middle_name= response.data.data.middle_name,
						personal_details.last_name= response.data.data.last_name,
						personal_details.personal_identification_type_id= response.data.data.personal_identification_type_id,
						personal_details.identification_number= JSON.stringify(response.data.data.identification_number),
						personal_details.date_of_birth= response.data.data.date_of_birth,
						personal_details.gender_id= response.data.data.gender_id,
						personal_details.relationship_status_id= response.data.data.relationship_status_id,
						personal_details.nationality= response.data.data.nationality,
						contact_details.primary_mobile_number= response.data.data.primary_mobile_number,
						contact_details.alternate_mobile_number= response.data.data.alternate_mobile_number,
						contact_details.primary_email= response.data.data.primary_email,
						contact_details.work_email= response.data.data.work_email,
						contact_details.postal_address= response.data.data.postal_address,
						contact_details.residential_address= response.data.data.residential_address,
						contact_details.permanent_address= response.data.data.permanent_address,
						work_details.department_id= response.data.data.employment_data.department_id,
						work_details.section_id=response.data.data.employment_data.section_id,
						work_details.employment_type=response.data.data.employment_data.employment_type,
						work_details.employment_duration=response.data.data.employment_data.employment_duration,
						work_details.employment_date=response.data.data.employment_data.employment_date,
						work_details.exit_date=response.data.data.employment_data.exit_date,
						dependants=response.data.data.dependants,
						// kins[0]=response.data.data.kins[0],
						kins = response.data.data.kins;
						kins.forEach(element => console.log(element));

						referees=response.data.data.referees,
						work_history=response.data.data.work_history,
						academic_qualifications=response.data.data.academic_qualifications							
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