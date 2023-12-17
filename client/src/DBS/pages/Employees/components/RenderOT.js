import { Link } from "react-router-dom";

export default function renderOT(e) {
  const empData = e.props.emps.data;
  let emp = empData
    .map((employee) => {
      return parseInt(employee.hoursPayPeriod) >= 40 ? (
        <tr key={employee.email} className="Emp-table-rows">
          <td>
            <Link
              to={`/dbs/employee/${employee.employeeNumber}`}
              className="Emp-Link"
            >
              {employee.firstname}
            </Link>
          </td>
          <td>{employee.lastname}</td>
          <td>{employee.email}</td>
          <td>
            <span
              className={
                employee.clockStatus !== "false" ? "ClockedIn" : "ClockedOut"
              }
            >
              {employee.clockStatus !== "false" ? "Clocked In" : "Clocked Out"}
            </span>
          </td>
          <td>{employee.hoursPayPeriod}</td>
          <td>{employee.employeeNumber}</td>
          <td>{employee.office || "-"}</td>
          <td>{employee.position || "-"}</td>
          <td>{employee.phonenumber || "-"}</td>
        </tr>
      ) : null;
    })
    .filter((n) => n);

  if (emp.length > 0) {
    return (
      <div className="Emp-list" key={"Emp-overtime"}>
        <div className="Emp-card-title">
          Employees Over Time
          <input
            className="Emp-card-search"
            id="OTSearch"
            placeholder="Search..."
            onKeyUp={searchOT}
          />
        </div>
        <div className="Emp-card-content">
          {emp.length !== 0 ? (
            <table
              className="Emp-table"
              id="OT-table"
              key={"Emp-overtime-table"}
            >
              <tbody key={"Emp-overtime-tbody"}>
                <tr className="Emp-table-headers">
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Email</th>
                  <th>Clock Status</th>
                  <th>Hours This Week</th>
                  <th>Employee Number</th>
                  <th>Office</th>
                  <th>Position</th>
                  <th>Phone Number</th>
                </tr>
                {emp}
              </tbody>
            </table>
          ) : (
            <div className="Emp-overtime" key={"No OT Emp"}>
              No employees are on over time hours
            </div>
          )}
        </div>
      </div>
    );
  } else {
    return;
  }
}

function searchOT() {
  var input, filter, table, tr, td, i, txtValue;

  input = document.getElementById("OTSearch");
  table = document.getElementById("OT-table");
  filter = input.value.toUpperCase();

  tr = table.getElementsByTagName("tr");
  for (i = 1; i < tr.length; i++) {
    td = tr[i];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}
