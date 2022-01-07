// assets
import {
  IconUserPlus,
  IconFileInvoice,
  IconKarate,
  IconKey,
  IconBlockquote,
  IconBug,
  IconBellRinging,
  IconPhoneCall,
  IconSoccerField,
  IconArrowBarToUp,
  IconUsers,
  IconFriends,
  IconBuildingWarehouse,

} from "@tabler/icons";

// constant
const icons = {
  IconUserPlus,
  IconKey,
  IconFileInvoice,
  IconKarate,
  IconBlockquote,
  IconBug,
  IconBellRinging,
  IconPhoneCall,
  IconSoccerField,
  IconArrowBarToUp,
  IconUsers,
  IconFriends,
  IconBuildingWarehouse,

};

// ===========================|| EXTRA PAGES MENU ITEMS ||=========================== //

const pages = {
  id: "pages",
  title: "Manage",
  caption: "Information, Reporting",
  type: "group",
  children: [
    {
      id: "playersall",
      title: "Players",
      type: "collapse",
      icon: icons.IconKarate,
      children: [
        {
          id: "players",
          title: "Player Information",
          type: "item",
          icon: icons.IconFileInvoice,
          url: "/player-information",
          breadcrumbs: false,
        },
        {
          id: "playerStatistics",
          title: "Player Statistics",
          type: "item",
          icon: icons.IconArrowBarToUp,
          url: "/player-statistic-information",
          breadcrumbs: false,
        },
      ],
    },
    {
      id: "recruitmentall",
      title: "Recruitment",
      type: "collapse",
      icon: icons.IconPhoneCall,
      children: [
        {
          id: "recruitmentIncidents",
          title: "Recruitment Incident Information",
          type: "item",
          icon: icons.IconFileInvoice,
          url: "/recruitment-incident-information",
          breadcrumbs: false,
        },
        {
          id: "recruitmentRules",
          title: "Recruitment Rules",
          type: "item",
          icon: icons.IconBlockquote,
          url: "/recruitment-rule-information", 
          breadcrumbs: false,
        },
      ],
    },
    {
      id: "gamesall",
      title: "Games",
      type: "collapse",
      icon: icons.IconSoccerField,
      children: [
        {
          id: "games",
          title: "Game Information",
          type: "item",
          icon: icons.IconFileInvoice,
          url: "/game-information",
          breadcrumbs: false,
        },
        {
          id: "stadium",
          title: "Stadium Entry",
          type: "item",
          icon: icons.IconFileInvoice,
          url: "/stadium-information",
          breadcrumbs: false,
        },
        {
          id: "location",
          title: "Location Entry",
          type: "item",
          icon: icons.IconFileInvoice,
          url: "/location-information",
          breadcrumbs: false,
        },
      ],
    },
    {
      id: "teamssall",
      title: "Teams",
      type: "collapse",
      icon: icons.IconFriends,
      children: [
        {
          id: "teams",
          title: "Team Information",
          type: "item",
          icon: icons.IconFileInvoice,
          url: "/team-information",
          breadcrumbs: false,
        },
      ],
    },
    {
      id: "schoolall",
      title: "Schools",
      type: "collapse",
      icon: icons.IconBuildingWarehouse,
      children: [
/*         {
          id: "schools",
          title: "School Information",
          type: "item",
          icon: icons.IconFileInvoice,
          url: "/school-information",
          breadcrumbs: false,
        },
        {
          id: "coaches",
          title: "Coach Information",
          type: "item",
          icon: icons.IconFileInvoice,
          url: "/coaches-information",
          breadcrumbs: false,
        }, */
        {
          id: "scholarships",
          title: "Scholarship Information",
          type: "item",
          icon: icons.IconFileInvoice,
          url: "/scholarship-information",
          breadcrumbs: false,
        },
      ],
    },
  ],
};

export default pages;
