<template>
	<div id="sc-page-wrapper">
		<div id="sc-page-top-bar" class="sc-top-bar" data-uk-sticky="offset:48; show-on-up: true; animation: uk-animation-slide-top-medium">
			<div class="sc-top-bar-content uk-flex uk-flex-1">
				<h1 class="sc-top-bar-title uk-flex-1">
					Gender
				</h1>
			</div>
			<div class="sc-actions uk-margin-right uk-margin-small-top">
				<BaseButton
					:button-group="payload"
					:trigger-click="triggerClick"
				>
				</BaseButton>
				<!-- <a href="javascript:void(0)" class="sc-fab sc-fab-small sc-fab-text sc-fab-primary" data-uk-toggle="target:  #modal-gender">
					<i class="mdi mdi-plus"></i>Add Gender
				</a> -->
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
					<el-table :data="genders"
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
						<el-table-column prop="gender" label="Gender" sortable="custom">
						</el-table-column>
						<el-table-column label="Action">
							<template slot-scope="scope">
								<el-button-group>
									<el-button type="success"
										class="elbutton"
										size="mini"
										uk-tooltip="Edit"
										@click="viewGender(scope.row.gender_id)"
									>
										<i class="el-icon-edit" />
									</el-button>
									<el-button type="danger" size="mini" uk-tooltip="Delete" @click="deleteGender(scope.row.gender_id)">
										<i class="el-icon-delete" />
									</el-button>
									<el-button type="primary" size="mini" uk-tooltip="View" @click="viewRecord(scope.row.gender_id)">
										<i class="el-icon-view" />
									</el-button>
								</el-button-group>
							</template>
						</el-table-column>
					</el-table>
					<Pagination v-if="showPagination"
						:total-pages="pages"
						:current-page="currentPage"
						:per-page="perPage"
						@pagechanged="getGenders"
						@dropChanged="getGenders"
					/>
				</ScCardBody>
			</ScCard>
			<div id="modal-gender" class="uk-flex-middle" uk-modal="bg-close:false" container="false">
				<div class="uk-modal-dialog uk-width-1-4@l uk-margin-auto uk-modal-body">
					<button class="uk-modal-close-default" data-uk-close @click.prevent="clearForm($event)"></button>
					<h2 class="uk-modal-title">
						Add Gender
					</h2>
					<client-only>
						<GenderForm button-text="Add"
							:submit-form="addGender"
							:has-submit-button="true"
							:gender-details="gender_details"
						/>
					</client-only>
				</div>
			</div>
			<div id="modal-view" class="uk-flex-middle" uk-modal="bg-close:false">
				<div class="uk-modal-dialog uk-width-1-4@l uk-margin-auto uk-modal-body">
					<button class="uk-modal-close-default" data-uk-close @click.prevent="clearForm($event)"></button>
					<h2 class="uk-modal-title">
						Gender
					</h2>
					<client-only>
						<GenderForm button-text="Add"
							:has-submit-button="false"
							:get-record="viewRecord"
							:gender-details="gender_details"
						/>
					</client-only>
				</div>
			</div>
			<div id="modal-edit" class="uk-flex-middle" uk-modal="bg-close:false">
				<div class="uk-modal-dialog uk-width-1-4@l uk-margin-auto uk-modal-body">
					<button class="uk-modal-close-default" data-uk-close @click.prevent="clearForm($event)"></button>
					<h2 class="uk-modal-title">
						Edit Gender
					</h2>
					<client-only>
						<GenderForm button-text="EDIT"
							:submit-form="editRecord"
							:has-submit-button="true"
							:gender-details="gender_details"
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
import Swal from 'sweetalert2'
locale.use(lang)
import  GenderForm from "~/components/serviceComponents/ems/gender-form";
import Pagination from "~/components/pagination";
// import {createButton} from "../../../plugins/helpers";
import BaseButton from "~/components/BaseButton";
export default {
	components: {
		GenderForm,
		Pagination,
		BaseButton
	},
	layout: 'employee',
	data: () => ({
		genders:[],	
		searchTerm:'',
		pages:0,
		perPage:10,
		currentPage:1,
		showPagination:false,
		gender_details:{
			gender:'',
			gender_id:''	
		},
		payload: [
			{"text":"Add Gender", "primary":true, "action":"action2", "icon":true, "iconName":"mdi mdi-plus"},
		],
	}),
	head () {
		return {
			'title': 'EMS | Genders'
		}
	},
	computed: {
	},

	mounted () {
		this.getGenders()
		// createButton("Edit Record", this.displayAlert, "red")
	},
	methods: {
		async getGenders (page) {
			this.currentPage=page
			const headers = {'x-service': 'ems-svc'};
			await this.$axios.get(`api/gender?page=${page}&per-page=${this.perPage}`, { headers })
				.then(response =>{
					this.genders = response.data.data	
					this.totalRecords=response.data.totalCount
					this.pages=response.data.pageCount
					this.currentPage=1
					this.perPage=JSON.parse(response.data.pageSize)
					if(response.data.pageCount>1){
						this.showPagination=true
					}
					// <i class="mdi mdi-checkbox-marked-outline"></i>
				})
				.catch(error => {
				})
		},
		displayAlert (){
			alert('OKAY')
		},
		async addGender () {
			let formData = new FormData();
			formData.append('gender', this.gender_details.gender);
			try {
				await this.$axios.post( 'api/gender',
					formData,
					{
						headers: {
							'x-service': 'ems-svc'
						},
					},
				).then(response=>{
					UIkit.modal('#modal-gender').hide()	
					this.$store.dispatch('modules/notificationModule/setToast', response.data.toast);
					// UIkit.modal('#modal-gender').hide()	
					this.clearForm()					
			
				}) .catch(function (response) {

				})
			}catch{

			}
				
		},
		async triggerClick () {
			UIkit.modal('#modal-gender').show()
		},	
		async clearForm () {
			UIkit.modal('#modal-gender').hide()
			UIkit.modal('#modal-view').hide()
			UIkit.modal('#modal-edit').hide()
			this.$store.dispatch('modules/validationModule/clearErrors');
			this.gender_details.gender=""
		},
		async Search (){
			const headers = {'x-service': 'ems-svc'};
			await this.$axios.get(`api/gender?qpsearch=${this.searchTerm}`, { headers })
				.then(response =>{
					this.genders = response.data.data
				})
				.catch(error => {
				})
		},

		async editRecord () {
			let formData = new FormData();
			formData.append('gender', this.gender_details.gender);
			try {
				await this.$axios.put(
					`api/gender/${id}`, formData,
					{
						headers: {
							'x-service': 'ems-svc'
						},
					},
				)
					.then(response =>{
						this.gender_details.gender=response.data.data.gender	
					})
					.catch(error => {
						return
					})
			} catch (err) {
			}
		},
		

		async viewRecord (id) {
			const headers = {'x-service': 'ems-svc'};
			try {
				await this.$axios.get(
					`api/gender/${id}`, { headers }
				)
					.then(response =>{
						UIkit.modal('#modal-view').show()
						this.gender_details.gender=response.data.data.gender	
					})
					.catch(error => {

					})
			} catch (error) {
			}
		},

		async viewGender (id) {
			const headers = {'x-service': 'ems-svc'};
			try {
				await this.$axios.get(
					`api/gender/${id}`, { headers }
				)
					.then(res =>{
						UIkit.modal('#modal-edit').show()
						this.gender_details.gender=res.data.data.gender	
					})
					.catch(error => {

					})
			} catch (error) {
			}
		},
		async deleteGender ( id) {	
		 Swal({
				title: 'Are you sure you want to delete this Record?',
				showCancelButton: true,
				confirmButtonText: 'Yes, Delete!', 
				cancelButtonText: 'No',
				cancelButtonColor: '#ff7674',
				confirmButtonColor: '#41b882',
			}).then((isConfirm) => {
				if (isConfirm.value) {
					const headers = {'x-service': 'ems-svc'};
				 this.$axios.delete(`api/gender/${id}`, {headers})
						.then((response) => {
							this.getGenders()					
						})
						.catch(err => {		
						})
				}
				else {
					Swal(
						'Cancelled',
						'Record not Deleted',
						'error'
					)					
				}
			}			
			)				
		},

	}
}
</script>

