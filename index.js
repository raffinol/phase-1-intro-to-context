function createEmployeeRecord(record) {
  let testEmployee = {
    firstName: record[0],
    familyName: record[1],
    title: record[2],
    payPerHour: record[3],
    timeInEvents: [],
    timeOutEvents: [],
  };
  return testEmployee;
}

function createEmployeeRecords(records) {
  let employeeRecords = records.map((record) => createEmployeeRecord(record));
  return employeeRecords;
}

function createTimeInEvent(record, dateTimeStamp) {
  let [date, hour] = dateTimeStamp.split(' ');

  record.timeInEvents.push({
    type: 'TimeIn',
    hour: parseInt(hour, 10),
    date,
  });

  return record;
}

function createTimeOutEvent(record, dateTimeStamp) {
  let [date, hour] = dateTimeStamp.split(' ');

  record.timeOutEvents.push({
    type: 'TimeOut',
    hour: parseInt(hour, 10),
    date,
  });
  return record;
}

function hoursWorkedOnDate(record, dateStamp) {
  let timeIn = record.timeInEvents.find((e) => e.date === dateStamp).hour;
  let timeOut = record.timeOutEvents.find((e) => e.date === dateStamp).hour;
  return (timeOut - timeIn) / 100;
}

function wagesEarnedOnDate(record, dateStamp) {
  let wagesOnDate = hoursWorkedOnDate(record, dateStamp) * record.payPerHour;
  return wagesOnDate;
}

function allWagesFor(record) {
  const allWages = record.timeInEvents.map((day) => {
    return wagesEarnedOnDate(record, day.date);
  });
  return allWages.reduce(
    (accumulator, currentValue) => accumulator + currentValue
  );
}

function calculatePayroll(records) {
  const payrollAll = records.map((emp) => {
    return allWagesFor(emp);
  });
  return payrollAll.reduce(
    (accumulator, currentValue) => accumulator + currentValue
  );
}
