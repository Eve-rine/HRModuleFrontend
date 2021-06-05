<template>
	<div id="sc-page-wrapper">
		<div id="sc-page-content">
			<div>
				<BaseButton
					:button-group="payload"
					:trigger-click="triggerClick"
				>
				</BaseButton>
			</div>
		</div>
	</div>
</template>

<script>
import BaseButton from "~/components/BaseButton";

export default {
	components: {
		BaseButton
	},
	data () {
		return {
			payload: [
				{"text":"success", "success":true, "action":"action2", "icon":true, "iconName":"mdi mdi-check"},
				{"text":"danger", "danger":true, "action":"displayAlert"},
				{"text":"warning", "warning":true, "action":"action3", "icon":true, "iconName":"mdi mdi-close"},
				{"text":"primary", "primary":true, "action":"action5"},
				{"text":"primary", "action":"action5", "disabled":true},
			],
		};
	},
	methods:{
	 triggerClick (action) {
			if (action === "displayAlert") {
				alert("Action1")
			} else if (action === "action2") {
				alert("Action2")
			}else if (action === "action3") {
				alert("Action3")
			}else if (action === "action4") {
				alert("Primary button")
			}
		}
	}
};
</script>
