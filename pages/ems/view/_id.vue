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
	methods:{
	 getEmployee (dependants, personal_details, work_details, contact_details, kins) {
		},
	}
	
}
</script>