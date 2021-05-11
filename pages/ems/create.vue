<template>
	<div>
		<client-only>
			<EmployeeForm button-text="Add"
				:submit-form="addEmployee"
				title-text="Add Employee"
				:has-submit-button="true"
				:get-record="getRecord"
			/>
		</client-only>
	</div>
</template>
<script>
import  EmployeeForm from "~/components/serviceComponents/ems/employee-form";
export default {
	components:{
		EmployeeForm
	},
	layout: 'employee',
	methods:{
		addEmployee (dependants, personal_details, work_details, contact_details, kins, work_history, academic_qualifications, referees){
			const headers={
				headers: {
					'x-service': 'ems-svc'
				},
			}
			try {
				this.$axios.post( 'api/employee', {
					first_name: personal_details.first_name,
					middle_name: personal_details.middle_name,
					last_name: personal_details.last_name,
					personal_identification_type_id: personal_details.personal_identification_type_id,
					identification_number: personal_details.identification_number,
					date_of_birth: personal_details.date_of_birth,
					gender_id: personal_details.gender_id,
					relationship_status_id: personal_details.relationship_status_id,
					nationality: personal_details.nationality,
					primary_mobile_number: contact_details.primary_mobile_number,
					alternate_mobile_number:contact_details.alternate_mobile_number,
					primary_email:contact_details.primary_email,
					work_email:contact_details.work_email,
					postal_address:contact_details.postal_address,
					postal_address:contact_details.postal_address,
					residential_address:contact_details.residential_address,
					permanent_address:contact_details.permanent_address,
					department_id: work_details.department_id,
					section_id: work_details.section_id,
					employment_type: work_details.employment_type,
					employment_duration: work_details.employment_duration,
					employment_date: work_details.employment_date,
					exit_date: work_details.exit_date,
					Dependants:dependants,
					Kins:kins,
					Referees:referees,
					WorkHistory:work_history,
					AcademicQualifications:academic_qualifications,	
	
				}, headers).then(response=>{
				// this.$router.push('/ems')			
			
				}) .catch(function (response) {
				})
			} catch (err) {  
	          return
			      }	
		},
	 getRecord (leaveUpdate) {
		}
	}
	
}
</script>