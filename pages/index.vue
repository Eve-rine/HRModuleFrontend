<template>
	<div id="sc-page-wrapper">
		<div id="sc-page-content">
			<div>
				<UiButton 
					modal-id="modal-gender"
					uk-tooltip="{title: default button}"
					size="mini"							
					theme="primary"		
					type="link"			
					url="http://www.google.com"
					caption="iconText"
					text="default text"
					icon="mdi mdi-chart-areaspline"
					button-width="1-6"
					@click="gotosite"
				>
					<!-- :disabled="clickable === false?false:false" -->
				</UiButton>
				<div id="modal-gender" class="uk-flex-middle" uk-modal="bg-close:false" container="false">
					<div class="uk-modal-dialog uk-width-1-4@l uk-margin-auto uk-modal-body">
						<button class="uk-modal-close-default" data-uk-close></button>
						<h2 class="uk-modal-title">
							Modal Heading
						</h2>
						<client-only>
							<h6>Default Modal Content</h6>
						</client-only>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import UiButton from "~/components/UiButton";

export default {
	components: {
		UiButton
	},
	data: () => ({
		clickable:false,
		google:"http://www.google.com",
		permission:0
	}),
	methods:{
		gotosite (site){
			window.location=site
		}
	}
};
</script>
