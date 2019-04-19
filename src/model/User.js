const Utils = require('../utils/utils');

const MOCK_FIRST_NAME = ['Brittney', 'Gran', 'Arlana', 'Lara', 'Rudy', 'Skipp', 'Margit', 'Veradis', 'Adriena', 'Harcourt'];
const MOCK_LAST_NAME = ['Fould', 'Reade', 'Kiddell', 'Deverill', 'Bratchell'];
const MOCK_GENDER = ['Male', 'Female'];
const MOCK_COUNTRY = ['Brazil', 'Philippines', 'China', 'Japan', 'Albania'];
const MOCK_COMPANY = ['Twitterbeat', 'Mydo', 'Oloo', 'Demizz', 'Mycat'];
const MOCK_JOB_TITLE = ['Community Outreach Specialist', 'Registered Nurse', 'Librarian', 'Sales Associate', 'Media Manager I', 'Database Administrator III', 'Senior Developer'];

function User() {
  this.createUser = (options) => {
    return {
      id: options && parseInt(options.id) || Utils.getRandomIntNumber(1, 100),
      firstName: options && options.firstName || Utils.getRandomFromArray(MOCK_FIRST_NAME),
      lastName: options && options.lastName || Utils.getRandomFromArray(MOCK_LAST_NAME),
      gender: options && options.gender || Utils.getRandomFromArray(MOCK_GENDER),
      country: options && options.country || Utils.getRandomFromArray(MOCK_COUNTRY),
      company: options && options.company || Utils.getRandomFromArray(MOCK_COMPANY),
      jobTitle: options && options.jobTitle || Utils.getRandomFromArray(MOCK_JOB_TITLE)
    };
  };
  this.createUsers = (num, options) => {
    const users = [];
    for (i of Array(num)) {
      const user = this.createUser(options);
      if (user) {
        users.push(user);
      }
    }
    return users;
  };

  this.getUsers = (options) => this.createUsers(10, options);
  this.newUser = (options) => this.createUser(Object.assign({}, options, {id: null}));
  this.getUser = (id) => this.createUser({id});
  this.updateUser = (id, options) => this.createUser(Object.assign({}, options, {id}));
  this.deleteUser = (id) => ({resCode: 200, msg: 'success'});
}

module.exports = new User();