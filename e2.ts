// ----- EXERCISE -----

// Call web service and return total vehicles, (got is library to call url)
async function getTotalVehicles() {
  return await got.get("https://my-webservice.moveecar.com/vehicles/total");
}

function getPlurial() {
  let total;
  getTotalVehicles().then((r) => (total = r));
  if (total <= 0) {
    return "none";
  }
  if (total <= 10) {
    return "few";
  }
  return "many";
}

// ----- SOLUTION -----
// the scope of the variable is out of the promise function
// need to use async and await
// and like before we need to parse JSON (most likely)

async function getTotalVehicles() {
  return await JSON.parse(
    got.get("https://my-webservice.moveecar.com/vehicles/total")
  );
}

async function getPlurial() {
  let total = await getTotalVehicles();
  if (total <= 0) {
    return "none";
  }
  if (total <= 10) {
    return "few";
  }
  return "many";
}
