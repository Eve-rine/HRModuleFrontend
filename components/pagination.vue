<template>
	<div>
		<!-- <div class="vgt-wrap__footer vgt-clearfix"> -->
		<div class="uk-flex uk-align-left uk-form-select uk-pagination uk-flex-left uk-margin-small-top" data-uk-form-select>
			<!-- <div class="uk-form-select" data-uk-form-select> -->
			<span>Per page:</span>
			<select v-model="recordsPerPage" @change="onClickDrop">
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
		<div class="uk-flex uk-align-right uk-pagination uk-flex-right uk-margin-small-top">
			<ul class="el-pager">
				<li>
					<a 
						:disabled="isInFirstPage"
						aria-label="Go to first page"
						@click="onClickFirstPage"
					>
						<i class="el-icon-d-arrow-left" data-uk-tooltip="First"></i>
					</a>
				</li>

				<li>
					<a
						:disabled="isInFirstPage"
						aria-label="Go to previous page"
						@click="onClickPreviousPage"
					>
						<i class="el-icon-arrow-left" data-uk-tooltip="Previous"></i>

					</a>
				</li>

				<li v-for="(page , idx) in pages" :key="idx">
					<a
						:disabled="page.isDisabled"
						:class="{ active: isPageActive(page.name) }"
						:aria-label="`Go to page number ${page.name}`"
						@click="onClickPage(page.name)"
					>
						{{ page.name }}
					</a>
				</li>
				<li>
					<a
						:disabled="isInLastPage"
						aria-label="Go to next page"
						@click="onClickNextPage"
					>
						<i class="el-icon-arrow-right" data-uk-tooltip="Next"></i>
					</a>
				</li>

				<li>
					<a
						:disabled="isInLastPage"
						aria-label="Go to last page"
						@click="onClickLastPage"
					>
						<i class="el-icon-d-arrow-right" data-uk-tooltip="Last"></i>
					</a>
				</li>
			</ul>
		</div>
		<!-- </div> -->
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
			required: true,
		},
		currentPage: {
			type: Number,
			required: true,
		},
		perPage: {
			type: Number,
			required: true,
			default:10			
		},
	},
	data () {
		return {
			recordsPerPage: this.perPage,
			maximumVisible:this.maxVisibleas
		}
	},
	computed: {
		startPage () {
			if (this.currentPage === 1) {
				return 1;
			}
			if (this.currentPage === this.totalPages) { 
				return this.totalPages - this.maximumVisible + 1;
			}
			return this.currentPage - 1;

		},

		endPage () {      
			return Math.min(this.startPage + this.maximumVisible - 1, this.totalPages);      
		},
		pages () {
			const range = [];
			for (let i = this.startPage; i <= this.endPage; i+= 1 ) {
				if (this.i <= this.maximumVisible) {
					i = this.maximumVisible;
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
			let drop=this.recordsPerPage;
			this.$emit('dropChanged', drop);
		}, 	
		onClickFirstPage () {
			this.$emit('pagechanged', 1);
		},
		onClickPreviousPage () {
			if(this.currentPage!=1){
				this.$emit('pagechanged', this.currentPage - 1);
			}
		},
		onClickPage (page) {
			this.$emit('pagechanged', page);
			if(this.maximumVisible > this.totalPages){
				this.maximumVisible=this.totalPages;
			}
		},
		onClickNextPage () {
			if(this.currentPage!=this.totalPages){
				this.$emit('pagechanged', this.currentPage + 1);
			}
						
			if(this.maximumVisible>=this.totalPages){
				this.maximumVisible=this.totalPages;
			}
		},
		onClickLastPage () {
			this.$emit('pagechanged', this.totalPages);
			if(this.maximumVisible>this.totalPages){
				this.maximumVisible=this.totalPages;
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
