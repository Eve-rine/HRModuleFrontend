<template>
	<div id="sc-page-wrapper">
		<div id="sc-page-top-bar" class="sc-top-bar" data-uk-sticky="offset:48; show-on-up: true; animation: uk-animation-slide-top-medium">
			<div class="sc-top-bar-content uk-flex uk-flex-1">
				<h1 class="sc-top-bar-title uk-flex-1">
					Personal Identification Types
				</h1>
			</div>
			<div class="sc-actions uk-margin-right uk-margin-small-top">
				<a href="javascript:void(0)" class="sc-fab sc-fab-small sc-fab-text sc-fab-primary" data-uk-toggle="target:  #modal-identity_type">
					<i class="mdi mdi-plus"></i>Add Type
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
					<el-table :data="identity_types"
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
								<p>Gender: {{ props.row.gender }}</p>
							</template>
						</el-table-column>
						<el-table-column prop="personal_identification_type" label="ID Type" sortable="custom">
						</el-table-column>
						<el-table-column label="Action">
							<template slot-scope="scope">
								<el-button-group>
									<el-button type="success"
										class="elbutton"
										size="mini"
										uk-tooltip="Edit"
										@click="handleEditRow(scope.row.personal_identification_id,null)"
									>
										<i class="el-icon-edit" />
									</el-button>
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
			<div id="modal-identity_type" class="uk-flex-middle" uk-modal="bg-close:false">
				<div class="uk-modal-dialog uk-width-1-4@l uk-margin-auto uk-modal-body">
					<button class="uk-modal-close-default" data-uk-close></button>
					<h2 class="uk-modal-title">
						Add Type
					</h2>
					<client-only>
						<PersonalIdentificationForm button-text="Add"
							:submit-form="addType"
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
import  PersonalIdentificationForm from "~/components/serviceComponents/ems/personal-identification-form";
export default {
	components: {
		PersonalIdentificationForm
	},
	layout: 'employee',
	data: () => ({
		identity_types:[],
		searchTerm:''		
	}),
	head () {
		return {
			'title': 'EMS | Personal Identification Types'
		}
	},
	computed: {

	},

	mounted () {
		this.getIdentityTypes()
	},
	methods: {
		async addType (identification_details) {
			let formData = new FormData();
			formData.append('personal_identification_type', identification_details.personal_identification_type);
			try {
				await this.$axios.post( 'api/identification-type',
					formData,
					{
						headers: {
							'x-service': 'ems-svc'
						},
					},
				).then(response=>{
					this.$store.dispatch('modules/notificationModule/setToast', response.data.toast);						
			
				}) .catch(function (response) {

				})
			}catch{

			}
				
		},
		async getIdentityTypes () {
			const headers = {'x-service': 'ems-svc'};
			await this.$axios.get(`api/identification-types`, { headers })
				.then(response =>{
					this.identity_types = response.data.data
				})
				.catch(error => {
				})
		},
		async Search (){
					 const headers = {'x-service': 'ems-svc'};
			await this.$axios.get(`api/identification-types?qpsearch=${this.searchTerm}`, { headers })
				.then(response =>{
					this.identity_types = response.data.data
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
