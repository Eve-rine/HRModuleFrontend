<template>
	<div id="sc-page-wrapper">
		<client-only>
			<div id="sc-page-top-bar" class="sc-top-bar" data-uk-sticky="offset:48; show-on-up: true; animation: uk-animation-slide-top-medium">
				<div class="sc-top-bar-content uk-flex uk-flex-1">
					<h1 class="sc-top-bar-title uk-flex-1">
						Leave Types
					</h1>
				</div>
				<div class="sc-actions uk-margin-right uk-margin-small-top">
					<nuxt-link :to="'/lms/system_presets/leave_types/create'" class="sc-fab sc-fab-small sc-fab-text sc-fab-primary">
						<i class="mdi mdi-plus"></i>Add Leave Type
					</nuxt-link>
				</div>
			</div>
		</client-only>
		<div id="sc-page-content">
			<ScCard>
				<ScCardBody>
					<form class="uk-search uk-search-default uk-width-1-1">
						<span uk-search-icon></span>
						<input v-model="searchTerm"
							class="uk-search-input"
							type="search"
							placeholder="Search Leave Types ..."
							@keypress.enter.prevent="SearchLeaveTypes"
						>
					</form>
					<el-table :data="leaveTypes"
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
								<p>Leave Type: {{ props.row.leave_type }}</p>
								<p>Days: {{ props.row.number_of_days }}</p>
								<p>Max Rollover: {{ props.row.maximum_roll_over }}</p>
								<p>Gender: {{ props.row.gender }}</p>
							</template>
						</el-table-column>
						<el-table-column prop="leave_type" label="Leave Type" sortable="custom">
						</el-table-column>
						<el-table-column prop="number_of_days" label="Days" sortable="custom">
						</el-table-column>
						<el-table-column prop="maximum_roll_over" label="Max Rollover" sortable="custom">
						</el-table-column>
						<el-table-column prop="gender" label="Gender" sortable="custom">
						</el-table-column>
						<el-table-column label="Action">
							<template slot-scope="scope">
								<el-button-group>
									<nuxt-link :to="'/ems/view/'+ scope.row.leave_id">
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
export default {
	components: {

	},
	layout:'lms',
	data: () => ({
		leaveTypes:[],
		searchTerm:''
	}),
	head () {
		return {
			'title': 'Leave | leaveTypes'
		}
	},
	computed: {
	},
	mounted () {
		this.getLeaveTypes()
	},
	methods: {
		SearchLeaveTypes () {
		},
		async getLeaveTypes () {
		},
	}
}
</script>
<style lang="scss">
  @import '~scss/plugins/vue-good-table.scss';
</style>
