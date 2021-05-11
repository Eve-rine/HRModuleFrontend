<template>
	<div>
	</div>						
</template>

<script>
export default {
	name: 'ComponentsNotifications',
	data: () => ({
		notification: {
			text: '',
		}
	}),
	created () {
		this.$store.subscribe((mutation, state) => {
			if (mutation.type === "modules/notificationModule/showMessage") {
				this.notification.text = state.modules.notificationModule.content;
				this.show = true;
			}
		});

	},
}
</script>
