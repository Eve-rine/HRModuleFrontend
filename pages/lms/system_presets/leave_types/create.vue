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
            	this.$axios.post('/leave-svc/v1/leave-types/create', leave_details)
				.then((response) => {
					this.$router.push('/leave-types')
					this.message = response.data.message
				
				})
				.catch(error => {
					this.errors=error.response.data.errors
						
				})
		},
		
			 getLeaveType (leavetype) {
		},

	}
	
}
</script>