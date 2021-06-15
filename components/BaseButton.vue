<template>
	<div>
		<div class="uk-flex-middle">
			<button v-for="(button,index) in buttonGroup"
				:key="index"				
				style="margin-right: 4px;"
				:class="classes[index]"			
				data-uk-tooltip="button.tooltip"				
				@click="proxy(button.action,index)"
			>
				<!-- @click="handleClick" -->
				<!-- @click="triggerClick(button.action)"	 -->
				<!-- data-uk-tooltip="{pos:'bottom-left',title: Hello Wo}"
			title="zsdx" -->
				<div v-if="Caption == 'iconText'">
					<i
						class="uk-margin-small-right"
						:class="[button.captionType.iconText.icon]"
					>
					</i>
					{{ button.captionType.iconText.text }}
				</div>
				<div v-else-if="Caption=='Text'">
					<span>{{ button.captionType.Text.text }}</span>
				</div>
				<div v-else-if="Caption=='Icon'">
					<i
						:class="[button.captionType.Icon.icon]"
					>
					</i>
				</div>
			</button>
		</div>
	</div>
</template>
<script>
export default {
	props: {
		buttonGroup: {
			type: Array,
			default: () => [
				{"size":"large",  "tooltip":"bufgb", "theme":"primary", "disable":"disabled", "type":"round",
			  "action":"action1", 
			 "captionType":{'iconText':{"icon":"mdi mdi-chart-areaspline", "text":"Default"}}, "tooltip":"{title:default,pos:top-left}"
			 },
				{"size":"small", "theme":"danger", "type":"round", 
			  "action":"action2", 
			 "captionType":{'iconText':{"icon":"mdi mdi-chart-areaspline", "text":"Default"}}, "tooltip":"{title:default,pos:top-left}"
			 },
			 ]		
		},
		triggerClick:{
			type: Function,
			default:null
		},
    	},
		 computed: {
		 classes (){
			var buttonProps = this.buttonGroup
			var buttonSpecs="sc-button"
			var roundSpecs="sc-fab"
			var roundText="sc-fab-text"
			var buttonFlex="sc-button-flex"
			let result = '';
			var objects = {};
			for(let i = 0;i < this.buttonGroup.length; i++ ) {
				// if(buttonProps[i].type === "round"){
				// 	var  selectedProps= ['button', roundText, roundSpecs+"-"+buttonProps[i].size, roundSpecs+"-"+buttonProps[i].theme, buttonProps[i].disable, buttonProps[i].captionType.theme ].join(" ")											
				// }else{
				var  selectedProps = ['button', buttonFlex, buttonSpecs, buttonSpecs+"-"+buttonProps[i].size, buttonSpecs+"-"+buttonProps[i].theme, buttonProps[i].captionType.theme, buttonSpecs+"-"+buttonProps[i].disable].join(" ")
				// }
				if(i>0){
					result += ','; 
				}
				result += selectedProps;
				objects[i]={
					result
				}	
			}	
			var nameArr = result.split(',');
			return nameArr;
		},
		Caption () {
			var buttonProps = this.buttonGroup
  			var buttonCaption =''
  				for(let i = 0;i < buttonProps.length; i++ ) {
				 let result = buttonProps[i].captionType
				buttonCaption = Object.keys(result);
			}
			return buttonCaption;
		},
		Tooltip () {
			var buttonProps = this.buttonGroup
  			var buttonTooltip =''
  				for(let i = 0;i < buttonProps.length; i++ ) {
					   let result = buttonProps[i].captionType
					  result = [buttonProps[i].size, buttonProps[i].theme, buttonProps[i].disable, buttonProps[i].captionType.theme ].join(" ")
				
				buttonTooltip= Object.keys(result);
			}
			return buttonTooltip;
		}
	},
	methods:{
		proxy (method, payload) {
			this[method](payload)
		},
		// triggerClick (methodsNums, evt){
		// 	//Method to trigger this parameter
		// 	this.$emit('click', evt);
		// 	this[methodsNums]()
			
		// },
		action1 (){
			alert('Update 1');
		}, 
		// handleClick (methodName, evt) {
		// 	this.$emit('click', evt);
		// 	this.$nextTick(() => {
		// 		// will run after $emit is done
		// 		this[methodName]()
		// 	})
		// }
		
	}
};
</script>