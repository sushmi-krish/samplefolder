const employees = [
    {id: 1 , name : 'John Doe',age:30,department:'IT',salary:50000},
    {id: 2 , name : 'Alice Smith',age:28,department:'HR',salary:45000},
    {id: 3 , name : 'Bob Johnson',age:35,department:'Finance',salary:60000},
    {id: 4, name : 'Peter Jackson',age:32,department:'HR',salary:52000},
    {id: 3 , name : 'David Samuvel',age:38,department:'Finance',salary:46000},
    ];
    //function to display all employess
    const totalEmployees = employees.map((employee,index) => `<p>${employee.id}: ${employee.name} - ${employee.age} - ${employee.department} - $${employee.salary}</p>`).join(' ');
    document.getElementById('employeeDetails').innerHTML = totalEmployees;
    //function to calculateTotal salaries
    function calculateTotalSalaries(){
        const totalSalaries = employees.reduce((acc,employee) => acc + employee.salary,0);
        alert(`Total Salaries : $${totalSalaries}`)
    }
    //function to display employee details based on HR department
    function displayHREmployees(){
        const hrEmployee =employees.filter((employee) => employee.department === 'HR');
        const hrEmployeesDisplay = hrEmployee.map((employee,index) =>`<p> ${employee.id}: ${employee.name} - ${employee.age} -${employee.department} - ${employee.salary} </p>`).join(' ')
        document.getElementById('employeeDetails').innerHTML = hrEmployeesDisplay;
    }
//function to display employee details based on ID
 function findEmployeeById(employeeID){
    const foundEmployee = employees.find(employee => employee.id === employeeID)
    if(foundEmployee)
    {
        document.getElementById('employeeDetails').innerHTML = `<p>${foundEmployee.id}: ${foundEmployee.name} - ${foundEmployee.age}-${foundEmployee.department}-${foundEmployee.salary}`
    }
    else
    {
        document.getElementById('employeeDetails').innerHTML =`no employee has been found with this ID`;
    }
 }