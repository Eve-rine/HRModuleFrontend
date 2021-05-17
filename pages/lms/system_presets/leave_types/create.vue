<template>
	<div>
		<LeaveTypeForm 
			button-text="Create" 
			:submit-form="addLeaveType" 
			title-text="Create Leave Type"
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
		addLeaveType (leave_details) {
		},
		
			 getLeaveType (leavetype) {
		},

	}
	
}
</script>