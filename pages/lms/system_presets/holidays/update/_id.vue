<template>
	<div>
		<HolidayForm 
			button-text="Update" 
			:submit-form="updateHoliday" 
			title-text="Update Holiday"
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
		updateHoliday (holiday_details) {
			this.$axios.put(  `leave-svc/v1/holidays/update/${this.$route.params.id}`,   {
				holiday_name:holiday_details.holiday_name,
		    holiday_date:holiday_details.holiday_date,
		    holiday_date_description:holiday_details.holiday_date_description,
		    holiday_type:holiday_details.holiday_type,
			
			}).then(response=>{
				this.$router.push('/holidays')
				let responseMessage = response.data.message
			
			}).catch(error => {
				this.errors=error.response.data.errors
			})
				
		},
		getHoliday (holiday_details) {
			try {
			 this.$axios.get(
					`leave-svc/v1/holidays/holiday/${this.$route.params.id}`
				)
					.then(response =>{
						holiday_details.holiday_name= response.data.data.holiday_name
						holiday_details.holiday_date= response.data.data.holiday_date
						holiday_details.holiday_date_description= response.data.data.holiday_date_description	
						holiday_details.holiday_type= response.data.data.holiday_type						
					})
					.catch(error => {
						let errorMessage = JSON.stringify(error.response.data.message)

			       
					})
			} catch (error) {

			}
		},
	}
	
}
</script>