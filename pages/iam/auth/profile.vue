<template>
	<div id="sc-page-wrapper">
		<div id="sc-page-content">
			<div class="uk-flex uk-flex-center">
				<div class="uk-width-4-5@l">
					<!-- <div class="uk-grid" data-uk-grid>
						<div class="uk-width-1-3@l">
							<client-only> -->
					<ScCard v-sc-sticky="sideMenu">
						<ScCardBody>
							<div class="uk-text-center">
								<div class="uk-flex uk-flex-center uk-margin-bottom">
									<ScUploader :image="require('~/assets/img/avatars/profile.png')" />
								</div>
								<ScCardTitle>
									{{ user.name }}
								</ScCardTitle>
								<span class="sc-color-secondary uk-text-small">
									{{ user.company }}
								</span>
							</div>
							<ul class="uk-list uk-list-divider">
								<li class="sc-list-group">
									<div class="sc-list-addon">
										<i class="mdi mdi-email"></i>
									</div>
									<div class="sc-list-body">
										<div class="sc-list-body-inner">
											{{ user.email }}
										</div>
									</div>
								</li>
								<li class="sc-list-group">
									<div class="sc-list-addon">
										<i class="mdi mdi-phone"></i>
									</div>
									<div class="sc-list-body">
										{{ user.phone }}
									</div>
								</li>
								<li class="sc-list-group">
									<div class="sc-list-addon">
										<i class="mdi mdi-office-building"></i>
									</div>
									<div class="sc-list-body">
										{{ user.company }}
									</div>
								</li>
								<li class="sc-list-group">
									<div class="sc-list-addon">
										<i class="mdi mdi-link"></i>
									</div>
									<div class="sc-list-body">
										<a :href="user.www" class="sc-link">
											{{ user.www }}
										</a>
									</div>
								</li>
							</ul>
						</ScCardBody>
					</ScCard>
					<!-- </client-only>
						</div>
					</div> -->
				</div>
			</div>
		</div>
		<div class="sc-fab-page-wrapper">
			<a href="javascript:void(0)" class="sc-fab sc-fab-secondary sc-fab-large">
				<i class="mdi mdi-pencil"></i>
			</a>
		</div>
	</div>
</template>

<script>
import { scHelpers, scFakeData } from "~/assets/js/utils";
const { uniqueID } = scHelpers;
const { first, last, sentence, phone, company, email } = scFakeData;

import ScUploader from '~/components/Uploader'

export default {
	name: 'PagesUserProfile',
	components: {
		// ScPhoto,
		// ScAvatar,
		ScUploader
	},
	data: () => ({
		sideMenu: {
			media: 'largeMin',
			options: {
				'offset_top': 'inPlace'
			},
			on: {
				'sticky_kit:stick' (e) {
					// console.log("has stuck!", e.target);
				},
				'sticky_kit:unstick' (e) {
					// console.log("has unstuck!", e.target);
				},
			}
		}
	}),
	computed: {
		user () {
			return {
				name: "khadija" + ' ' + "abubakar",
				phone: "07777777777",
				email:"khadija@gmail.com",
				company: "Enchanting Company",
			}
		},
	}
}
</script>
