var customerName = "bob";

function upperCaseCustomerName() {
  return (customerName = customerName.toUpperCase());
}
upperCaseCustomerName;

function setBestCustomer() {
  bestCustomer = "not bob";
}

function overwriteBestCustomer() {
  bestCustomer = "maybe bob";
}

const leastFavoriteCustomer = "Sam";
function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = "Lucky";
}
