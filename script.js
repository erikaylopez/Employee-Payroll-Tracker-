// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function() {
  //function collectEmployees() {
    const employees = [];

    let addEmployee = true;

    while (addEmployee) {
        const firstName = prompt('Enter the employee\'s first name:');
        const lastName = prompt('Enter the employee\'s last name:');
        const salaryInput = prompt('Enter the employee\'s salary:');
        const salary = isNaN(parseInt(salaryInput)) ? 0 : parseInt(salaryInput);

        employees.push({
            firstName: firstName,
            lastName: lastName,
            salary: salary
        });

        const continueInput = confirm('Add employee?  er "yes" to continue or cancel to stop.');
console.log("continueInput", continueInput)
       addEmployee = continueInput
        //   if (continueInput.toLowerCase() === 'yes') {
        //     // Continue adding an employee
        //     console.log('Adding a new employee...');
        //     // Call a function to add an employee
        // } else if (continueInput.toLowerCase() === 'cancel') {
        //     // Stop adding employees
        //     console.log('Stopping the process of adding employees.');
        //     // Perform any necessary actions when the user cancels
        // } else {
        //     // Handle invalid input
        //     console.log('Invalid input. Please enter "yes" to continue or "cancel" to stop.');
        // }
    }
    return employees;
}

// Call the function to collect employee data
// const employeeArray = collectEmployees() {
// console.log(employeeArray);

//   // TODO: Get user input to create and return an array of employee objects
// }

// Display the average salary
//const displayAverageSalary = function(employeesArray) {
  function displayAverageSalary(employees) {
    let totalSalary = 0;

    employees.forEach(employee => {
        totalSalary += employee.salary;
    });

    const averageSalary = totalSalary / employees.length;

    console.log(`Average Salary: ${averageSalary.toFixed(2)}`);
}

// Assuming you have an array of employee objects stored in the 'employeeArray' variable
//displayAverageSalary(employeeArray);
  
  // TODO: Calculate and display the average salary


// Select a random employee
//const getRandomEmployee = function(employeesArray) {
  function getRandomEmployee(employees) {
    const randomIndex = Math.floor(Math.random() * employees.length);
    const randomEmployee = employees[randomIndex];

    console.log('Random Employee:', randomEmployee.firstName, randomEmployee.lastName);
    //console.log(randomEmployee);
}

// Assuming you have an array of employee objects stored in the 'employeeArray' variable
//selectRandomEmployee(employeeArray);
  // TODO: Select and display a random employee


/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');
//to do: 
 getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData); 
