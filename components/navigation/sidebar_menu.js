import { scHelpers } from "~/assets/js/utils";
const { uniqueID } = scHelpers;

export const menuEntries = [
	{
		id: uniqueID(),
		title: "Dashboard",
		icon: "mdi mdi-home-circle",
		page: "/dashboard"
	},
	{
		id: uniqueID(),
		title: "Employee",
		icon: "mdi mdi-account-group",
		page: "/ems"
	},
	{
		id: uniqueID(),
		title: "Leave",
		icon: "mdi mdi-briefcase",
		page: "/leave"
	},
	
];

