<template>
	<div>
		<HolidayListForm button-text="Update"
			:submit-form="UpdateHoliday"
			:has-submit-button="true"
			title-text="Add Holiday List"
			:get-record="getHoliday"
		/>
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
		async UpdateHoliday (holiday_details) {
			let formData = new FormData();
			formData.append('holiday_id', holiday_details.holiday_id);
			formData.append('holiday_date', holiday_details.holiday_date);
			formData.append('holiday_description', holiday_details.holiday_description);
			this.$axios.put( 'leave-svc/v1/holiday-lists/update',
				formData,
			).then(response=>{
				this.$router.push('/holiday-lists')
				let responseMessage = response.data.message			
			
			}) .catch(function (response) {
			})
				
		},
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