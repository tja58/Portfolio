import { combineReducers } from "redux";
import { reducer as reduxForm } from "redux-form";

// Import Auth Reducers
import authReducer from "../../DBS/store/reducers/authReducers/authReducer";
import orgReducer from "../../DBS/store/reducers/orgReducers/orgReducer";
import empReducer from "../../DBS/store/reducers/empReducers/empReducer";
import orgDataReducer from "../../DBS/store/reducers/orgReducers/orgDataReducer";
import createEmpReducer from "../../DBS/store/reducers/empReducers/createEmpReducer";
import empsReducer from "../../DBS/store/reducers/empReducers/empsReducer";
import visitorsReducer from "../../DBS/store/reducers/visitorReducers/visitorsReducer";
import visitorReducer from "../../DBS/store/reducers/visitorReducers/visitorReducer";

export default combineReducers({
  // DBS Reduers
  // auth
  auth: authReducer,

  // org
  org: orgReducer,
  orgData: orgDataReducer,

  // emp
  emp: empReducer,
  emps: empsReducer,
  createEmp: createEmpReducer,

  // visitor
  visitor: visitorReducer,
  visitors: visitorsReducer,

  // Other Reducers
  form: reduxForm,
});
