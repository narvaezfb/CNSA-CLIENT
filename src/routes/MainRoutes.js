import React, { lazy } from "react";

// project imports
import MainLayout from "layout/MainLayout";
import Loadable from "ui-component/Loadable";
import ScholarshipForm from "views/pages/Forms/ScholarshipForm";
import StadiumForm from "views/pages/Forms/StadiumForm";
import SchoolForm from "views/pages/Forms/SchoolForm";

// dashboard routing
const DashboardDefault = Loadable(
  lazy(() => import("views/dashboard/Default"))
);

// utilities routing
const UtilsTypography = Loadable(
  lazy(() => import("views/utilities/Typography"))
);
const UtilsColor = Loadable(lazy(() => import("views/utilities/Color")));
const UtilsShadow = Loadable(lazy(() => import("views/utilities/Shadow")));
const UtilsMaterialIcons = Loadable(
  lazy(() => import("views/utilities/MaterialIcons"))
);
const UtilsTablerIcons = Loadable(
  lazy(() => import("views/utilities/TablerIcons"))
);

// form routing
const PlayerForm = Loadable(lazy(() => import("views/pages/Forms/PlayerForm")));
const TeamForm = Loadable(lazy(() => import("views/pages/Forms/TeamForm")));
const GameForm = Loadable(lazy(() => import("views/pages/Forms/GameForm")));
const IncidentForm = Loadable(
  lazy(() => import("views/pages/Forms/IncidentForm"))
);
const RecruitmentIncidentForm = Loadable(
  lazy(() => import("views/pages/Forms/RecruitmentIncidentForm"))
);
const RecruitmentRuleForm = Loadable(
  lazy(() => import("views/pages/Forms/RecruitmentRuleForm"))
);
const PlayerStatisticsForm = Loadable(
  lazy(() => import("views/pages/Forms/PlayerStatisticsForm"))
);
const TeamStaffForm = Loadable(
  lazy(() => import("views/pages/Forms/TeamStaffForm"))
);
const LocationForm = Loadable(
  lazy(() => import("views/pages/Forms/LocationForm"))
);


// information routing
const PlayerInformation = Loadable(
  lazy(() => import("views/pages/Displays/PlayerInformation"))
);

// information routing
const GameInformation = Loadable(
  lazy(() => import("views/pages/Displays/GameInformation"))
);
// information routing
const TeamInformation = Loadable(
  lazy(() => import("views/pages/Displays/TeamInformation"))
);

// information routing
const PlayerStatisticInformation = Loadable(
  lazy(() => import("views/pages/Displays/PlayerStatisticsInformation"))
);

//internal support routing
const InternalSupport = Loadable(lazy(() => import('views/pages/Displays/InternalSupport')));

//internal support routing
const RecruitmentIncidentInformation = Loadable(lazy(() => import('views/pages/Displays/RecruitmentIncidentInformation')));

const RecruitmentRuleInformation = Loadable(lazy(() => import('views/pages/Displays/RecruitmentRuleInformation')));
const ScholarshipInformation = Loadable(lazy(() => import('views/pages/Displays/ScholarshipInformation')));

// ===========================|| MAIN ROUTING ||=========================== //

const MainRoutes = {
  path: "/",
  element: <MainLayout />,
  children: [
    {
      path: "/",
      element: <DashboardDefault />,
    },
    {
      path: "/dashboard/default",
      element: <DashboardDefault />,
    },
    {
      path: "/utils/util-typography",
      element: <UtilsTypography />,
    },
    {
      path: "/utils/util-color",
      element: <UtilsColor />,
    },
    {
      path: "/utils/util-shadow",
      element: <UtilsShadow />,
    },
    {
      path: "/icons/tabler-icons",
      element: <UtilsTablerIcons />,
    },
    {
      path: "/icons/material-icons",
      element: <UtilsMaterialIcons />,
    },
    {
      path: "/player-form",
      element: <PlayerForm />,
    },
    {
      path: "/game-form",
      element: <GameForm />,
    },
    {
      path: "/incident-form",
      element: <IncidentForm />,
    },
    {
      path: "/recruitment-incident-form",
      element: <RecruitmentIncidentForm />,
    },
    {
      path: "/team-form",
      element: <TeamForm />,
    },
    {
      path: "/recruitment-rule-form",
      element: <RecruitmentRuleForm />,
    },
    {
      path: "/scholarship-form",
      element: <ScholarshipForm />,
    },
    {
      path: "/player-statistics-form",
      element: <PlayerStatisticsForm />,
    },
    {
      path: "/stadium-form",
      element: <StadiumForm />,
    },
    {
      path: "/school-form",
      element: <SchoolForm />,
    },
    {
      path: "/team-form",
      element: <TeamForm />,
    },
    {
      path: "/location-form",
      element: <LocationForm />,
    },
    {
      path: "/team-staff-form",
      element: <TeamStaffForm />,
    },
    {
      path: "/player-information",
      element: <PlayerInformation />,
    },
    {
      path: "/game-information",
      element: <GameInformation />,
    },
    {
      path: "/player-statistic-information",
      element: <PlayerStatisticInformation />,
    },
    {
      path: "/recruitment-rule-information", 
      element: <RecruitmentRuleInformation />,
    },
    {
      path: "/recruitment-incident-information",
      element: <RecruitmentIncidentInformation />,
    },
    {
      path: "/internal-support",
      element: <InternalSupport />,
    },
    {
      path: "/team-information",
      element: <TeamInformation />,
    },
    {
      path: "/stadium-information",
      element: <StadiumForm />,
    },
    {
      path: "/location-information",
      element: <LocationForm />,
    },
    {
      path: "/scholarship-information",
      element: <ScholarshipInformation />,
    },
  ],
};

export default MainRoutes;
