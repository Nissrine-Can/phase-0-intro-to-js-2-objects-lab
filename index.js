const employee = {
  name: 'Joe',
  streetAddress: "123 Drive",
};

function updateEmployeeWithKeyAndValue(employee, key, value) {

    const newEmployee = { ...employee};
    newEmployee[key] = value;
    return newEmployee;

}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {

   employee.streetAddress = "12 Broadway";
   return employee;
}

function deleteFromEmployeeByKey(employee, key, value) {

  const newEmployee = { ...employee};
    newEmployee[key] = value;
    return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key, value) {

  delete employee.name;
  return employee;
}



