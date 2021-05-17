<template>
	<div>
		<LeaveTypeForm 
			button-text="Update" 
			:submit-form="UpdateLeaveType" 
			title-text="Update Leave Type"
			:get-record="getLeaveType"
			:has-submit-button="true"
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
		UpdateLeaveType (leave_details) {
		},
		
		async getLeaveType (leave_details) {
		},
	}
}
</script>