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
			this.$axios.put(`leave-svc/v1/leave-types/update/${this.$route.params.id}`, {
				leave_type:leave_details.leave_type,
		    number_of_days:leave_details.number_of_days,
		    maximum_roll_over:leave_details.maximum_roll_over, 
				gender:leave_details.gender, 
			})
				.then((response) => {
					this.$router.push('/leave-types')
					this.message = response.data.message
					
				})
				.catch(error => {
					this.errors=error.response.data.errors
						
				})
		},
		
		async getLeaveType (leave_details) {
			try {
				await this.$axios.get(
					`leave-svc/v1/leave-types/leave-type/${this.$route.params.id}`
				)
					.then(response =>{
						leave_details.leave_type= response.data.data.leave_type
						leave_details.number_of_days= JSON.stringify(response.data.data.number_of_days)						
						leave_details.maximum_roll_over= response.data.data.maximum_roll_over	
						leave_details.gender= response.data.data.gender					
					})
					.catch(error => {

			       
					})
			} catch (error) {
				
			}
		},
	}
}
</script>