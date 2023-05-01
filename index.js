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

function createTimeInEvent(record, dateStamp) {
  let hourInt = parseInt(dateStamp.slice(-4));
  let date = dateStamp.slice(0, 10);
  console.log(date);
  record.timeInEvents = [{ type: 'TimeIn', date: date, hour: hourInt }];

  return record;
  // console.log(record);
}
// let bpRecord = createEmployeeRecord(['Byron', 'Poodle', 'Mascot', 3]);
// createTimeInEvent(bpRecord, '2014-02-28 1400');
