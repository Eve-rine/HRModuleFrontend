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
		async addEmployee (dependants, personal_details, work_details, contact_details, kins, work_history, academic_qualifications, referees){
			let formData = new FormData();
			// let Dependants= dependants;
			// for (var i = 0; i < Dependants.length; i++) {
			// 	let tag= Dependants[i];
			// 	formData.append("Dependants[" + i + "]", tag.dependant_id);
			// }
			formData.append('first_name', personal_details.first_name);
			formData.append('middle_name', personal_details.middle_name);
			formData.append('last_name', personal_details.last_name);
			formData.append('personal_identification_type_id', personal_details.personal_identification_type_id);
			formData.append('identification_number', personal_details.identification_number);
			formData.append('date_of_birth', personal_details.date_of_birth);
			formData.append('gender_id', personal_details.gender_id);
			formData.append('relationship_status_id', personal_details.relationship_status_id);
			formData.append('nationality', personal_details.nationality);
			formData.append('primary_mobile_number', contact_details.primary_mobile_number);
			formData.append('alternate_mobile_number', contact_details.alternate_mobile_number);
			formData.append('primary_email', contact_details.primary_email);
			formData.append('work_email', contact_details.work_email);
			formData.append('postal_address', contact_details.postal_address);
			formData.append('residential_address', contact_details.residential_address);
			formData.append('permanent_address', contact_details.permanent_address);
			formData.append('department_id', work_details.department_id);
			formData.append('section_id', work_details.section_id);
			formData.append('alternate_mobile_number', work_details.alternate_mobile_number);
			formData.append('primary_email', work_details.primary_email);
			formData.append('work_email', work_details.work_email);
			formData.append('employment_type_id', work_details.employment_type_id);
			formData.append('employment_type', work_details.employment_duration);
			formData.append('employee_number', work_details.employment_duration);
			formData.append('section_id', work_details.employment_duration);
			formData.append('employment_duration', work_details.employment_duration);
			formData.append('employment_date', work_details.employment_date);
			formData.append('exit_date', work_details.exit_date);
			formData.append('Dependants', dependants);
			// formData.append('Kins[]', kins);
			// formData.append('Referees[]', referees);
			formData.append('WorkHistory', work_history);
			formData.append('AcademicQualifications', academic_qualifications);
			try {
				await this.$axios.post( 'api/employee',
					formData,
					{
						headers: {
							'x-service': 'ems-svc'
						},
					},
				).then(response=>{
					this.$router.push('/ems')
					return response;
								
			
				}) .catch(function (response) {

				})
			}catch{

			}
				
		},
	 getRecord (leaveUpdate) {
		}
	}
	
}
</script>