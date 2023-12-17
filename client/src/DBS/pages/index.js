import Landing from "./Landing";
import SignUp from "./SignUp";
import Login from "./Login";
import Features from "./Features";
import Pricing from "./Pricing";
import Download from "./Download";
import Support from "./Support";
import Dashboard from "./Dashboard";
import CreateEmployees from "./Employees/CreateEmployees";
import CreateOrganization from "./Organization/CreateOrganization";
import Organization from "./Organization";
import Employees from "./Employees";
import Settings from "./Settings";
import EmployeeProfile from "./Employees/Employee/EmployeeProfile";
import Visitor_Profile from "./Dashboard/components/visitors/Visitor_Profile";

export const pages = [
  {
    component: Landing,
    path: "/dbs",
  },
  {
    component: SignUp,
    path: "/dbs/signup",
  },
  {
    component: Login,
    path: "/dbs/login",
  },
  {
    component: Features,
    path: "/dbs/features",
  },
  {
    component: Pricing,
    path: "/dbs/pricing",
  },
  {
    component: Download,
    path: "/dbs/download",
  },
  {
    component: Support,
    path: "/dbs/support",
  },
];

export const authPages = [
  // Core Components
  {
    component: Dashboard,
    path: "/dbs/dashboard",
  },
  {
    component: Settings,
    path: "/dbs/settings",
  },
  // Org Pages
  {
    component: Organization,
    path: "/dbs/organization",
  },
  {
    component: CreateOrganization,
    path: "/dbs/create-organization",
  },
  // Emp Pages
  {
    component: Employees,
    path: "/dbs/employees",
  },
  {
    component: CreateEmployees,
    path: "/dbs/create-employees",
  },
  {
    component: EmployeeProfile,
    path: "/dbs/employee/:employee_number",
  },
  // Visitor Pages
  {
    component: Visitor_Profile,
    path: "/dbs/visitor/:visitor_number",
  },
];
