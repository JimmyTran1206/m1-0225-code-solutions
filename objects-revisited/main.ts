interface Employee {
  position: string;
  daysOfWeekWorking: string[];
  fullTime?: boolean;
}

interface User {
  name: string;
}

interface Business {
  opens: string;
  closes: string;
  totalEmployees: number;
  daysOpen: string[];
  employees: { [employeeName: string]: Employee };
}

const business: Business = {
  opens: '9am',
  closes: '5pm',
  totalEmployees: 4,
  daysOpen: ['M', 'T', 'W', 'Th', 'F'],
  employees: {
    john: {
      position: 'Owner',
      daysOfWeekWorking: ['M', 'T', 'W', 'Th', 'F'],
    },
    michael: {
      position: 'Clerk',
      daysOfWeekWorking: ['M', 'W'],
    },
    shawn: {
      position: 'Developer',
      daysOfWeekWorking: ['T', 'Th'],
    },
    bob: {
      position: 'Accountant',
      daysOfWeekWorking: ['M', 'W', 'F'],
    },
  },
};

// helper functions
// create random workdays with random length
function randomWorkDayInclWeekend(): string[] {
  const daysOfWorkingWeek: string[] = ['M', 'T', 'W', 'Th', 'F'];
  const workingWeekLength: number = Math.floor(Math.random() * 5 + 1);
  const employeeWorkdays: string[] = [];

  // fill up the elements of employeeWorkdays
  for (let i = 0; i < workingWeekLength; i++) {
    const index = Math.floor(Math.random() * 5);
    if (employeeWorkdays.includes(daysOfWorkingWeek[index])) {
      i--;
    } else {
      employeeWorkdays.push(daysOfWorkingWeek[index]);
    }
  }
  // sorting the days in order
  employeeWorkdays.sort(
    (a, b) => daysOfWorkingWeek.indexOf(a) - daysOfWorkingWeek.indexOf(b)
  );
  employeeWorkdays.push('Sa', 'S');
  return employeeWorkdays;
}

// create a new employee
function createNewEmployee(
  business: Business,
  name: string,
  position: string,
  daysOfWeekWorking: string[]
): void {
  const fullTime: boolean = daysOfWeekWorking.length >= 5;
  business.employees[name] = { position, daysOfWeekWorking, fullTime };
}

// add fullTime property to all employees
function addFullTimeProp(business: Business): void {
  for (const name in business.employees) {
    business.employees[name].fullTime =
      business.employees[name].daysOfWeekWorking.length >= 5;
  }
}

// Task 1: add weekend
function addWeekend(business: Business): void {
  business.daysOpen.push('Sa', 'S');
  for (const employee in business.employees) {
    if (!business.employees[employee].daysOfWeekWorking.includes('Sa'))
      business.employees[employee].daysOfWeekWorking.push('Sa');
    if (!business.employees[employee].daysOfWeekWorking.includes('S'))
      business.employees[employee].daysOfWeekWorking.push('S');
  }
}

// Task 2: addEmployee
async function addEmployees(business: Business): Promise<void> {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!res.ok) throw new Error(`HTTP Error Status: ${res.status} `);
    const data = (await res.json()) as User[];
    // adding 4 new employees
    createNewEmployee(
      business,
      data[0].name,
      'Data Analyst',
      randomWorkDayInclWeekend()
    );
    createNewEmployee(
      business,
      data[1].name,
      'System Engineer',
      randomWorkDayInclWeekend()
    );
    createNewEmployee(
      business,
      data[2].name,
      'DevOps',
      randomWorkDayInclWeekend()
    );
    createNewEmployee(
      business,
      data[3].name,
      'Network Admin',
      randomWorkDayInclWeekend()
    );

    // Update the total employees
    business.totalEmployees = Object.keys(business.employees).length;
  } catch (error) {
    console.log('HTTP connection error: ', error);
  }
}

// task 3: delete employee
function deleteEmployee(business: Business, employeeName: string): void {
  for (const name in business.employees) {
    if (name === employeeName) {
      delete business.employees[name];
    }
  }
  // Update the total employees
  business.totalEmployees = Object.keys(business.employees).length;
}

document.addEventListener('DOMContentLoaded', async () => {
  addWeekend(business);
  addFullTimeProp(business);
  await addEmployees(business);
  deleteEmployee(business, 'bob');
});
