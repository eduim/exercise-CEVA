const userId = ObjectId("5cd96d3ed5d3e20029627d4a");

// change date
db.collections("users").updateOne(
  { _id: userId },
  { $set: { last_connection_date: new Date() } }
);

// role admin

db.collections("users").updateOne(
  { _id: userId },
  { $addToSet: { roles: "admin" } }
);

// update address

db.collections("users").updateOne(
  { _id: userId, "addresses.zip": 75001 },
  { $set: { "addresses.$.city": "Paris 1" } }
);
