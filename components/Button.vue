<template>
	<div>
		<button :class="classes" class="sc-button" @click="handleClick">
			{{ text }}
		</button>
	</div>
</template>
<script>
export default {
	props: {
		text: { type: String, default: 'Default' },
		size: { type: String, default: 'sc-button-small' },
		type: { type: String, default: 'sc-button-primary' },
          disabled: Boolean,
    	},
		 computed: {
		classes: function () {
			return ['button', this.size, this.type].join(' ')
		}
	},
	methods:{
	      handleClick (evt) {
			this.$emit('click', evt);
		}
	}
};
</script>