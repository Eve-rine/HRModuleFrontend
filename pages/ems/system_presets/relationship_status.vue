<template>
	<div id="sc-page-wrapper">
		<div id="sc-page-top-bar" class="sc-top-bar" data-uk-sticky="offset:48; show-on-up: true; animation: uk-animation-slide-top-medium">
			<div class="sc-top-bar-content uk-flex uk-flex-1">
				<h1 class="sc-top-bar-title uk-flex-1">
					Relationship Status
				</h1>
			</div>
			<div class="sc-actions uk-margin-right uk-margin-small-top">
				<a href="javascript:void(0)" class="sc-fab sc-fab-small sc-fab-text sc-fab-primary" data-uk-toggle="target:  #modal-status">
					<i class="mdi mdi-plus"></i>Add New
				</a>
			</div>
		</div>
		<div id="sc-page-content">
			<ScCard>
				<ScCardBody>
					<el-table :data="relationshipStatus"
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
						<el-table-column prop="relationship_status" label="Rtn. Status" sortable="custom">
						</el-table-column>
						<el-table-column label="Action">
							<template slot-scope="scope">
								<el-button-group>
									<el-button type="success"
										class="elbutton"
										size="mini"
										uk-tooltip="Edit"
										@click="handleEditRow(scope.row.relationship_status_id,null)"
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
			<div id="modal-status" class="uk-flex-middle" uk-modal="bg-close:false">
				<div class="uk-modal-dialog uk-width-1-4@l uk-margin-auto uk-modal-body">
					<button class="uk-modal-close-default" data-uk-close></button>
					<h2 class="uk-modal-title">
						Add Status
					</h2>
					<client-only>
						<RelationshipStatusForm button-text="Add"
							:submit-form="addStatus"
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
import  RelationshipStatusForm from "~/components/serviceComponents/ems/relationship-status-form";
export default {
	components: {
		RelationshipStatusForm
	},
	layout: 'employee',
	data: () => ({
		relationshipStatus:[],	
	}),
	head () {
		return {
			'title': 'Employee | Relationship Status'
		}
	},
	computed: {
	},

	mounted () {
		this.getStatus()
	},
	methods: {
		async getStatus () {
			const headers = {'x-service': 'ems-svc'};
			await this.$axios.get(`api/relationship-statuses`, { headers })
				.then(response =>{
					this.relationshipStatus = response.data.data
				})
				.catch(error => {
				})
		},
		addStatus (){
			
		}

	}
}
</script>
<style lang="scss">
  @import '~scss/plugins/vue-good-table.scss';
</style>
