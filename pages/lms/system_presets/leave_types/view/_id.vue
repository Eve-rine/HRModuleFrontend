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