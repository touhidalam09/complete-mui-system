const KEYS = {
  employees: "employee",
  employeeId: "employeeId",
};

export const getDepartmentCollection = () => [
  { id: "1", title: "Development" },
  { id: "2", title: "Marketing" },
  { id: "3", title: "SQA" },
  { id: "4", title: "Testing" },
  { id: "5", title: "Accounting" },
];

export function insertEmployee(data) {
  let employees = getAllEmployee();
  data["id"] = generateEmployeeId();
  employees.push(data);
  localStorage.setItem(KEYS.employees, JSON.stringify(employees));
}

export function updateEmployee(data) {
  let employees = getAllEmployee();
  let recordIndex = employees.findIndex((x) => x.id === data.id);
  employees[recordIndex] = { ...data };
  localStorage.setItem(KEYS.employees, JSON.stringify(employees));
}

export function generateEmployeeId() {
  if (localStorage.getItem(KEYS.employeeId) == null)
    localStorage.setItem(KEYS.employeeId, "0");

  var id = parseInt(localStorage.getItem(KEYS.employeeId));
  localStorage.setItem(KEYS.employeeId, (++id).toString());
  return id;
}

export function getAllEmployee() {
  if (localStorage.getItem(KEYS.employees) == null)
    localStorage.setItem(KEYS.employees, JSON.stringify([]));
  let employees = JSON.parse(localStorage.getItem(KEYS.employees));
  //map departmentID to department title
  let departments = getDepartmentCollection();
  return employees.map((x) => ({
    ...x,
    department: departments[x.departmentID - 1].title,
  }));
}
