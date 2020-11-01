/* eslint-disable dot-notation */
import formatDate from './formatDate';

/**
 * Returns a new employee object
 *
 * @param {Array} dataTableHashes pass the table.hashes()
 * @param {boolean} splittedDate if the date must be splitted or returned in format MM/dd/YYYY
 */
export default (dataTableHashes, splittedDate = true, addEmail = true) => {
  const data = dataTableHashes[0];
  let employee = {
    firstName: data['First name'],
    lastName: data['Last name'],
    identification: data['Identification'],
    leaderName: data['Leader name']
  };

  if (addEmail) {
    employee = {
      ...employee,
      email: data['Email']
    };
  }

  if (splittedDate) {
    const startWorkingDate = data['Start working on'].split('-');
    const startWorkingDay = startWorkingDate[0];
    const startWorkingMonth = parseInt(startWorkingDate[1], 10);
    const startWorkingYear = startWorkingDate[2];

    return {
      ...employee,
      startWorkingYear: startWorkingYear,
      startWorkingMonth: startWorkingMonth,
      startWorkingDay: startWorkingDay
    };
  }

  return {
    ...employee,
    startWorkingOn: formatDate(data['Start working on'])
  };
};
