<template>
	<div>
		<HolidayForm 
			button-text="Update" 
			title-text="Holiday Details"
			:get-record="getHoliday"
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
						
									       
					})
			} catch (error) {
				
			}
		},
	}
	
}
</script>