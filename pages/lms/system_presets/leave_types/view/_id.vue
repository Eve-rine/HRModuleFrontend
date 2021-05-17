<template>
	<div>
		<LeaveTypeForm 
			button-text="Add" 
			:submit-form="UpdateLeaveType" 
			title-text="View Leave Type"
			:get-record="getLeaveType"
		/>
	</div>
</template>
<script>
import  LeaveTypeForm from "~/components/serviceComponents/lms/leave-type-form";
export default {
	components:{
		LeaveTypeForm
	},
	layout:'lms',
	methods:{
		async getLeaveType (leave_details) {
		},
	}
}
</script>