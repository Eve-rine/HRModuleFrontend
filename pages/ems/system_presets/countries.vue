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
							<template slot-scope="scope">
								<el-button-group>
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
								</el-button-group>
							</template>
						</el-table-column>
					</el-table>
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
import  CountriesForm from "~/components/serviceComponents/ems/countries-form";
export default {
	components: {
		CountriesForm
	},
	layout: 'employee',
	data: () => ({
		countries:[],	
	}),
	head () {
		return {
			'title': 'Employee | Countries'
		}
	},
	computed: {
		columns () {
			return [
				{
					label: '#',
					field: 'nationality_id',
				},
				{
					label: 'Country Code',
					field: 'country_code',
				},
				{
					label: 'Country',
					field: 'country',
				},
				{
					label: 'Nationality',
					field: 'nationality',
				},
				{
					label: 'Action',
					field: 'action',
				},
			]
		}
	},

	mounted () {
		this.getCountries()
	},
	methods: {
		addCountries (){
			
		},
		async getCountries () {
			const headers = {'x-service': 'ems-svc'};
			await this.$axios.get(`api/countries`, { headers })
				.then(response =>{
					this.countries = response.data.data
				})
				.catch(error => {
				})
		},

	}
}
</script>
<style lang="scss">
  @import '~scss/plugins/vue-good-table.scss';
</style>
