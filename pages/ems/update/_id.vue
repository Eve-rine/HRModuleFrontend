<template>
	<div>
		<EmployeeForm button-text="Update"
			:submit-form="updateEmployee"
			:has-submit-button="true"
			title-text="Update Employee"
			:get-record="getEmployee"
		/>
	</div>
</template>
<script>
import EmployeeForm from "~/components/serviceComponents/ems/employee-form";
export default {
	components:{
		EmployeeForm
	},
	layout: 'employee',
	methods:{
		updateEmployee (dependants, personal_details, work_details, contact_details, kins) {
				
		},
		getEmployee (dependants, personal_details, work_details, contact_details, kins) {	
		},
	}
	
}
</script>