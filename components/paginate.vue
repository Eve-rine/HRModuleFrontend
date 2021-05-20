<template>
	<div class="vgt-wrap__footer vgt-clearfix">
		<div class="footer__row-count vgt-pull-left ">
			<span class="footer__row-count__label">Rows per page:</span>
			<select v-model="perPag" class="footer__row-count__select" @change="onClickDrop">
				<option value="10">
					10
				</option>
				<option value="25">
					25
				</option>
				<option value="50">
					50
				</option>
				<option value="100">
					100
				</option>
			</select>
		</div>
		<div class="footer__navigation vgt-pull-right">
			<ul class="uk-pagination">
				<li class="pagination-item">
					<a 
						:disabled="isInFirstPage"
						aria-label="Go to first page"
						@click="onClickFirstPage"
					>
						<i class="mdi mdi-chevron-double-left" data-uk-tooltip="First"></i>
					</a>
				</li>

				<li
					class="pagination-item"
				>
					<a
						:disabled="isInFirstPage"
						aria-label="Go to previous page"
						@click="onClickPreviousPage"
					>
						<i class="mdi mdi-chevron-left" data-uk-tooltip="Previous"></i>

					</a>
				</li>

				<li v-for="(page , idx) in pages" :key="idx" class="pagination-item">
					<a
						:disabled="page.isDisabled"
						:class="{ active: isPageActive(page.name) }"
						:aria-label="`Go to page number ${page.name}`"
						@click="onClickPage(page.name)"
					>
						{{ page.name }}
					</a>
				</li>
				<li class="pagination-item">
					<a
						:disabled="isInLastPage"
						aria-label="Go to next page"
						@click="onClickNextPage"
					>
						<i class="mdi mdi-chevron-right" data-uk-tooltip="Next"></i>
					</a>
				</li>

				<li class="pagination-item">
					<a
						:disabled="isInLastPage"
						aria-label="Go to last page"
						@click="onClickLastPage"
					>
						<i class="mdi mdi-chevron-double-right" data-uk-tooltip="Last"></i>
					</a>
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
export default {
	props: {
		maxVisibleas: {
			type: Number,
			required: false,
			default: 4,
		},
		totalPages: {
			type: Number,
			required: true
		},
		total: {
			type: Number,
			required: true
		},
		currentPage: {
			type: Number,
			required: true
		},
		perPage: {
			type: Number,
			required: true,
			default:10			
		},
	},

	computed: {
		startPage () {
			if (this.currentPage === 1) {
				return 1;
			}

			if (this.currentPage === this.totalPages) { 
				return this.totalPages - this.maxVisibleas + 1;
			}

			return this.currentPage - 1;

		},

		endPage () {
      
			return Math.min(this.startPage + this.maxVisibleas - 1, this.totalPages);
      
		},
		pages () {
			const range = [];

			for (let i = this.startPage; i <= this.endPage; i+= 1 ) {
				if (this.i <= this.maxVisibleas) {
					i = this.maxVisibleas;
				}
				range.push({
					name: i,
					isDisabled: i === this.currentPage 
				});
			}


			return range;

		},
		isInFirstPage () {
			return this.currentPage === 1;
		},
		isInLastPage () {
			return this.currentPage === this.totalPages;
		},

	},
	
	  methods: {
		  	onClickDrop () {
				  let drop=this.perPage;
			this.$emit('dropChanged', drop);
		},
		// 	let myNumber = this.number;
		//   myNumber++;
		//   this.$emit("update-number", myNumber);
          	
		onClickFirstPage () {
			this.$emit('pagechanged', 1);
		},
		onClickPreviousPage () {
			// if(this.currentPage!=1){
			// 	this.$emit('pagechanged', this.currentPage - 1);
			// }
		},
		onClickPage (page) {
			this.$emit('pagechanged', page);
			if(this.maxVisibleas > this.totalPages){
				// this.maxVisibleas=this.totalPages;
			}
		},
		onClickNextPage () {
			if(this.currentPage!=this.totalPages){
				this.$emit('pagechanged', this.currentPage + 1);

			}
						
			// if(this.maxVisibleas>=this.totalPages){
			// 	this.maxVisibleas=this.totalPages;
			// }
		},
		onClickLastPage () {
			this.$emit('pagechanged', this.totalPages);
			if(this.maxVisibleas>this.totalPages){
				// this.maxVisibleas=this.totalPages;
			}
		},
		isPageActive (page) {
			return this.currentPage === page;
		},

	
	}
  
    
}
</script>
<style scoped>
.pagination {
  list-style-type: none;
}

.pagination-item {
  display: inline-block;
}

.active {
  background-color: #4AAE9B;
  color: #ffffff;
}
</style>
