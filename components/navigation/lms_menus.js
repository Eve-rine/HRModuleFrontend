import { scHelpers } from "~/assets/js/utils";
const { uniqueID } = scHelpers;

export const menuEntries = [
	{
		id: uniqueID(),
		title: "Leave Applications",
		page: "/lms",
		icon: "mdi mdi-briefcase-check",
		isOpen: false,
		level: 0,
		submenu:[
			{
				id: uniqueID(),
				title: "Apply Leave",
				page: "/lms/create"
			},
			{
				id: uniqueID(),
				title: "Applications",
				page: "/lms"
			}
		],
	},
	{
		id: uniqueID(),
		title: "System Presets",
		page: "/system_presets",
		icon: "mdi mdi-cogs",
		isOpen: false,
		level: 0,
		submenu: [
			{
				id: uniqueID(),
				title: "Holidays",
				icon: "mdi mdi-logout",
				page: "/lms/system_presets/holidays"
			},
			{
				id: uniqueID(),
				title: "Leave Types",
				icon: "mdi mdi-format-list-bulleted-type",
				page: "/lms/system_presets/leave_types"
			},
			{
				id: uniqueID(),
				title: "Holiday List",
				icon: "mdi mdi-view-list",
				page: "/lms/system_presets/holiday_lists"
			},
		]
	},
];

