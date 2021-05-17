<template>
	<div>
		<HolidayListForm button-text="Create"
			:submit-form="addHoliday"
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
		addHoliday (holiday_details) {
            	this.$axios.post('leave-svc/v1/holiday-lists/create', holiday_details)
				.then((response) => {
					this.$router.push('/holiday-lists')
					this.message = response.data.message
			
				})
				.catch(error => {
					this.errors=error.response.data.errors
						
				})
		},
	 getHoliday (holidayUpdate) {
		}
	}
}
</script>