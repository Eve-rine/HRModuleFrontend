<template>
	<div id="sc-page-wrapper">
		<div id="sc-page-top-bar" class="sc-top-bar" data-uk-sticky="offset:48; show-on-up: true; animation: uk-animation-slide-top-medium">
			<div class="sc-top-bar-content uk-flex uk-flex-1">
				<h1 class="sc-top-bar-title uk-flex-1">
					Countries
				</h1>
			</div>
			<div class="sc-actions uk-margin-right uk-margin-small-top">
				<a href="javascript:void(0)" class="sc-fab sc-fab-small sc-fab-text sc-fab-primary" data-uk-toggle="target: #modal-nationality">
					<i class="mdi mdi-plus"></i>Add New
				</a>
			</div>
		</div>
		<div id="sc-page-content">
			<ScCard>
				<ScCardBody>
					<div class="uk-flex uk-flex-right">
						<form class="uk-flex">
							<input v-model="searchTerm"
								name="search"
								type="search"
								class=""
								placeholder="Search"
								@keypress.enter.prevent="Search"
							>
							<button class="uk-button-primary" @click.prevent="Search">
								<i class="mdi mdi-magnify" />
							</button>
						</form>
					</div>
					<div>
						<el-table :data="countries"
							:pagination-props="null"
							:paging="false"
							stripe
						>
							<el-table-column prop="flow_no"
								label="#"
								sortable="custom"
								type="expand"
							>
								<template slot-scope="props">
									<p>Country Code: {{ props.row.country-code }}</p>
									<p>Country: {{ props.row.country }}</p>
									<p>Nationality: {{ props.row.nationality }}</p>
									<p>Mobile Number: {{ props.row.mobile_number }}</p>
									<p>Email: {{ props.row.email_address }}</p>
									<p>Section: {{ props.row.section }}</p>
								</template>
							</el-table-column>
							<el-table-column prop="country_code" label="Country Code" sortable="custom">
							</el-table-column>
							<el-table-column prop="country" label="Country" sortable="custom">
							</el-table-column>
							<el-table-column prop="nationality" label="nationality" sortable="custom">
							</el-table-column>
							<el-table-column label="Action">
								<!-- <template slot-scope="scope"> -->
								<!-- <el-button-group>
										<nuxt-link :to="'/ems/view/'+ scope.row.employee_id">
											<el-button type="success"
												class="elbutton"
												size="mini"
												uk-tooltip="Edit"
												@click="handleEditRow(scope.$index)"
											>
												<i class="el-icon-edit" />
											</el-button>
										</nuxt-link>
										<el-button type="danger" size="mini" uk-tooltip="Delete" @click="handleSaveRow(scope.$index)">
											<i class="el-icon-delete" />
										</el-button>
										<el-button type="primary" size="mini" uk-tooltip="View" @click="handleSaveRow(scope.$index)">
											<i class="el-icon-view" />
										</el-button>
									</el-button-group> -->
								<BaseButton
									:button-group="payload"
									:trigger-click="triggerClick"
								>
								</BaseButton>
								<!-- </template> -->
							</el-table-column>
						</el-table>
					</div>
				</ScCardBody>
			</ScCard>
			<div id="modal-nationality" class="uk-flex-middle" uk-modal="bg-close:false">
				<div class="uk-modal-dialog uk-width-1-3@l uk-margin-auto uk-modal-body">
					<button class="uk-modal-close-default" data-uk-close></button>
					<h2 class="uk-modal-title">
						Add Country
					</h2>
					<client-only>
						<CountriesForm button-text="Add"
							:submit-form="addCountries"
							:has-submit-button="true"
						/>
					</client-only>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Vue from 'vue';
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
import lang from 'element-ui/lib/locale/lang/en'
import locale from 'element-ui/lib/locale'
locale.use(lang)
import  CountriesForm from "~/components/serviceComponents/ems/countries-form";
import BaseButton from "~/components/BaseButton";
export default {
	components: {
		CountriesForm,
		BaseButton
	},
	layout: 'employee',
	data: () => ({
		countries:[],
		searchTerm:'',
		payload: 			[
			{"size":"mini", "theme":"success",
			  "action":"action", 
			 "captionType":{'Icon':{"icon":"mdi  mdi-square-edit-outline"}}
			 },
			 {"size":"mini", "theme":"danger",
			  "action":"action", 
			 "captionType":{'Icon':{"icon":"mdi  mdi-square-edit-outline"}}
			 }
			 ]	 
	}),
	head () {
		return {
			'title': 'EMS | Countries'
		}
	},
	computed: {
	},

	mounted () {
		this.getCountries()
	},
	methods: {
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
		},
		async addCountries (country_details) {
			let formData = new FormData();
			formData.append('country_code', country_details.country_code);
			formData.append('country', country_details.country);
			formData.append('nationality', country_details.nationality);
			try {
				await this.$axios.post( 'api/country',
					formData,
					{
						headers: {
							'x-service': 'ems-svc'
						},
					},
				).then(response=>{
				

				}) .catch(function (response) {

				})
			}catch{

			}
				
		},
		async getCountries () {
			const headers = {'x-service': 'ems-svc'};
			await this.$axios.get(`api/countries`, { headers })
				.then(response =>{
					this.countries = response.data.payload
					// alert(this.payload.length)
				})
				.catch(error => {
				})
		},
		async Search (){
			const headers = {'x-service': 'ems-svc'};
			await this.$axios.get(`api/countries?qpsearch=${this.searchTerm}`, { headers })
				.then(response =>{
					this.countries = response.data.payload
				})
				.catch(error => {
				})
		}

	}
}
</script>
<style lang="scss">
  @import '~scss/plugins/vue-good-table.scss';
</style>
