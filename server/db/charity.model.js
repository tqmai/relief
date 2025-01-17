// sql query string for inserting multiple charities to table
const createCharities = (charities) => {
  let query = 'insert into "charity" (ein, name, category, cause, website, rate, contact, mission) values ';
  charities.forEach((charity, i) => {
    query += `('${charity.ein}', '${charity.name}', '${charity.category}', '${charity.cause}', '${charity.website}', '${charity.rate}', '${charity.contact}', '${charity.mission}')`;
    if (i === charities.length - 1) query += ';';
    else query += ', ';
  });
  return query;
};

// sql query string for inserting single charity to table
const createCharity = (charity) => {
  let query = 'insert into "charity" (ein, name, cause, website, rate, contact, mission) values ';
  query += `('${charity.ein}', '${charity.name}', '${charity.cause}', '${charity.website}', '${charity.rate}', '${charity.contact}', '${charity.mission}');`;
  return query;
};

module.exports = {
  createTable: () => ``, // creates charity table if not exists
  createCharity: (charity) => createCharity(charity), // create charity table
  createCharities: (charities) => createCharities(charities), // insert multiple rows to the table
  readCharity: () => 'select * from "charity";', // read charity table
  updateCharity: () => ``, // update charity table
  deleteCharity: () => ``, // delete charity table
};
