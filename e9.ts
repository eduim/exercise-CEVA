// users schema

// {
//   email: string;
//   first_name: string;
//   last_name: string;
//   roles: string[];
//   last_connection_date: Date;
// }

// ------ SOLUTION -------

// make index for the email to make it faster
const date = new Date();
date.setMonth(date.getMonth() - 6);

const search = "search";

db.users.find({
  $or: [
    { email: search },
    { first_name: { $regex: `^${search.toLowerCase()}` } },
    { last_name: { $regex: `^${search.toLocaleLowerCase()}` } },
  ],
  last_connection_date: { $gte: date },
});
