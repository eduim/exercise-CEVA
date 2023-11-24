// ----- EXERCISE -----

// Call web service and return count user, (got is library to call url)
async function getCountUsers() {
  return {
    total: await got.get("https://my-webservice.moveecar.com/users/count"),
  };
}

// Add total from service with 20
async function computeResult() {
  const result = getCountUsers();
  return result.total + 20;
}

//  ----- SOLUTION -----

// return from API call most likely is a JSON we need to parse it
// the result from getCountUsers() is async we need to await for it
async function getCountUsers() {
  return {
    total: await JSON.parse(
      got.get("https://my-webservice.moveecar.com/users/count")
    ),
  };
}

async function computeResult() {
  const result = await getCountUsers();
  return result.total + 20;
}
