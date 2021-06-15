<template>
	<div>
	</div>
</template>
<script>
export default {
	props: {
		buttonGroup: {
			type: Array,
			default: () => [
				{"size":"small", "theme":"success", "type":"round",
			  "action":"action", 
			 "captionType":{'iconText':{"icon":"mdi mdi-chart-areaspline", "text":"Default"}}, "tooltip":"{title:default,pos:top-left}"
			 },
			 {"size":"small", "theme":"danger", "type":"rouxnd",
			  "action":"action", 
			 "captionType":{'iconText':{"icon":"mdi mdi-chart-areaspline", "text":"Default"}}, "tooltip":"{title:default,pos:top-left}"
			 }
			 ]		
		},
		triggerClick:{
			type: Function,
			default:null
		},
    	},
	mounted (){
		this.classes()
	},
		 methods: {
			 		 classes (){
			var buttonProps = this.buttonGroup
			var buttonSpecs="sc-button"
			var roundSpecs="sc-fab"
			var roundText="sc-fab-text"
			var buttonFlex="sc-button-flex"
			let result = '';
			var objects = {};
			for(let i = 0;i < this.buttonGroup.length; i++ ) {
				//  objects[i] = new Object();
				// objects[i]=new Object['button', roundText, roundSpecs+"-"+buttonProps[i].size, roundSpecs+"-"+buttonProps[i].theme, buttonProps[i].disable, buttonProps[i].captionType.theme ]
				// if(buttonProps[i].type === "round"){
				// 	 result += ['button', roundText, roundSpecs+"-"+buttonProps[i].size, roundSpecs+"-"+buttonProps[i].theme, buttonProps[i].disable, buttonProps[i].captionType.theme ].join(" ")
				//   result +=  [roundText+" "+ roundSpecs+"-"+buttonProps[i].size+" "+ roundSpecs+"-"+buttonProps[i].theme+" "+ buttonProps[i].disable+" "+ buttonProps[i].captionType.theme].join("")									
				// }else{
				var  selectedcol = ['button', buttonFlex, buttonSpecs, buttonSpecs+"-"+buttonProps[i].size, buttonSpecs+"-"+buttonProps[i].theme, buttonProps[i].captionType.theme, buttonSpecs+"-"+buttonProps[i].disable].join(" ")
				//   result += roundText+" "+  roundSpecs+"-"+buttonProps[i].size+" "+  roundSpecs+"-"+buttonProps[i].theme+" "+  buttonProps[i].disable+" "+  buttonProps[i].captionType.theme
				// }
				if(i>0){
					result += ','; 
				}
				result += selectedcol;
				objects[i]={
					result
				}	
			}
	
			var nameArr = result.split(',');
			console.log(nameArr);
			console.log(result);
			return nameArr;
		},
		//  classes (){
		// 	var buttonProps = this.buttonGroup
		// 	var buttonSpecs="sc-button"
		// 	var roundSpecs="sc-fab"
		// 	var roundText="sc-fab-text"
		// 	var buttonFlex="sc-button-flex"
		// 	let result = '';
		// 	var objects = {};
		// 	for(let i = 0;i < this.buttonGroup.length; i++ ) {
		// 		//  objects[i] = new Object();
		// 		// objects[i]=new Object['button', roundText, roundSpecs+"-"+buttonProps[i].size, roundSpecs+"-"+buttonProps[i].theme, buttonProps[i].disable, buttonProps[i].captionType.theme ]
		// 		// if(buttonProps[i].type === "round"){
		// 		// 	 result += ['button', roundText, roundSpecs+"-"+buttonProps[i].size, roundSpecs+"-"+buttonProps[i].theme, buttonProps[i].disable, buttonProps[i].captionType.theme ].join(" ")
		// 		//   result +=  [roundText+" "+ roundSpecs+"-"+buttonProps[i].size+" "+ roundSpecs+"-"+buttonProps[i].theme+" "+ buttonProps[i].disable+" "+ buttonProps[i].captionType.theme].join("")									
		// 		// }else{
		// 		  result += ['button', buttonFlex, buttonSpecs, buttonSpecs+"-"+buttonProps[i].size, buttonSpecs+"-"+buttonProps[i].theme, buttonProps[i].captionType.theme, buttonSpecs+"-"+buttonProps[i].disable].join(" ")
		// 		//   result += roundText+" "+  roundSpecs+"-"+buttonProps[i].size+" "+  roundSpecs+"-"+buttonProps[i].theme+" "+  buttonProps[i].disable+" "+  buttonProps[i].captionType.theme
		// 		// }
				
		// 	}
		// 	return result;
		// },



		
		//  classes (){
		// 	var buttonProps = this.buttonGroup
		// 	var buttonSpecs="sc-button"
		// 	var roundSpecs="sc-fab"
		// 	var roundText="sc-fab-text"
		// 	var buttonFlex="sc-button-flex"
		// 	var myarray=[]
		// 	let result = '';
		// 	var objects = {};
		// 	for(let i = 0;i < this.buttonGroup.length; i++ ) {
		// 		//  objects[i] = new Object();
		// 		// objects[i]=new Object['button', roundText, roundSpecs+"-"+buttonProps[i].size, roundSpecs+"-"+buttonProps[i].theme, buttonProps[i].disable, buttonProps[i].captionType.theme ]
		// 		// if(buttonProps[i].type === "round"){
		// 		// 	 result += ['button', roundText, roundSpecs+"-"+buttonProps[i].size, roundSpecs+"-"+buttonProps[i].theme, buttonProps[i].disable, buttonProps[i].captionType.theme ].join(" ")
		// 		var	  selectedcol =  [roundText+" "+ roundSpecs+"-"+buttonProps[i].size+" "+ roundSpecs+"-"+buttonProps[i].theme+" "+ buttonProps[i].disable+" "+ buttonProps[i].captionType.theme].join(",")									
		// 		// }else{
		// 		// //   result += ['button',buttonFlex, buttonSpecs, buttonSpecs+"-"+buttonProps[i].size, buttonSpecs+"-"+buttonProps[i].theme, buttonProps[i].disable, buttonProps[i].captionType.theme ].join(" ")
		// 		//   result += roundText+" "+  roundSpecs+"-"+buttonProps[i].size+" "+  roundSpecs+"-"+buttonProps[i].theme+" "+  buttonProps[i].disable+" "+  buttonProps[i].captionType.theme
		// 		// }
		// 		//      result[i] = {
		// 		// 		 result
		// 		// };	
		// 		if(i>0){
		// 			result += ','; 
		// 		}
		// 		result += selectedcol;
		// 		objects[i]={
		// 			selectedcol
		// 		}
		// 	}
		// 	myarray.push(objects);
		// 	// return result;
		// 	console.log(objects)
		// 	return objects;
		// },
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
	// methods:{
	// 	 action (action) {
	// 		return action;
	// 	}
	// }
};
// numberTrack () {
// 	var buttonProps = this.buttonGroup
// 	let result='';
// 	var objects = {};
// 	for (var i = 0; i < this.buttonGroup.length; i ++) {
	  	// 		var  selectedProps = buttonProps[i].action
// 		// var tmpFunc = new Function(result);
// 		if(i>0){
// 			result += ','; 
// 		}
// 		result += selectedProps;
// 		objects[i]={
// 			result
// 		}	
// 	}
// 	// console.log(tmpFunc)
// 	var nameArr = result.split(',');
// 	console.log(nameArr);
// 	return nameArr;
// 	console.log(result)
// 	return result;
		
// },
</script>
