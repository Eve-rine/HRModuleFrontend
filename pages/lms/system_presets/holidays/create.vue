<template>
	<div>
		<HolidayForm 
			button-text="Add" 
			:submit-form="addHoliday" 
			title-text="Create Holiday"
			:get-record="getHoliday"
			:has-submit-button="true"
		/>
	</div>
</template>
<script>
import  HolidayForm from "~/components/serviceComponents/lms/holiday-form";
export default {
	components:{
		HolidayForm
	},
	layout:'lms',
	methods:{
		addHoliday (holiday_details) {
            	this.$axios.post('leave-svc/v1/holidays/create', holiday_details)
				.then((response) => {
					this.$router.push('/holidays')
					this.message = response.data.message
				
				})
				.catch(error => {
					this.errors=error.response.data.errors
						
				})
		},
			 getHoliday (leaveUpdate) {
		},

	}
	
}
</script>