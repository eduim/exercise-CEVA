// MongoDb collection users with schema

  {
    email: string;
    first_name: string;
    last_name: string;
    roles: string[];
    last_connection_date: Date;
  }


// Complete the aggregation so that it sends user emails by role ({_id: 'role', users: [email,...]})

db.collections('users').aggregate([
  { $group: { _id: "$roles", users: { $push: "$email" } }},
  { $project: { _id: 0, role: "$_id", users: 1 } }, 
]);