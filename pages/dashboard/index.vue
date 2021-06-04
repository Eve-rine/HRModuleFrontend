<template>
	<div id="sc-page-wrapper">
		<div id="sc-page-content">
		</div>
	</div>
</template>

<script>
import {createButton} from "~/plugins/helpers";
export default {
	name: 'DashboardV2',
	mounted () {
		createButton('<mdi mdi-checkbox-marked-outline"></i> Please wait...Please wait... ', this.displayAlert, "blue")
		createButton('<mdi mdi-checkbox-marked-outline"></i> Please wait...Please wait... ', this.displayAlert, "blue")
	},
}
</script>

