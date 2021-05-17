<template>
	<div>
		<HolidayListForm button-text="Update" :submit-form="UpdateHoliday" title-text="Add Holiday List" :get-record="getHoliday" />
	</div>
</template>
<script>

import  HolidayListForm from "~/components/serviceComponents/lms/holiday-list-form";
export default {
	components:{
		HolidayListForm
	},
	layout:'lms',
	methods:{
		async getHoliday (holiday_details) {
			try {
				await this.$axios.get(
					`leave-svc/v1/holiday-lists/holiday-list/${this.$route.params.id}`
				)
					.then(response =>{
						holiday_details.holiday_id= response.data.data.holiday_id
						holiday_details.holiday_date= response.data.data.holiday_date
						holiday_details.holiday_description= response.data.data.holiday_description						
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