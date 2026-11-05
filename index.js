// Feature 3 - Third Commit
// Branch: feature-add
// Previous Commit: Feature 2
// This commit adds update, delete and filter functionality.

// User Data

const users = [
  {
    id: 1,
    name: "Rahul",
    age: 20,
    city: "Patna",
    role: "Student",
    status: "Active",
    email: "rahul@gmail.com"
  },
  {
    id: 2,
    name: "Amit",
    age: 22,
    city: "Delhi",
    role: "Developer",
    status: "Active",
    email: "amit@gmail.com"
  },
  {
    id: 3,
    name: "Neha",
    age: 21,
    city: "Mumbai",
    role: "Designer",
    status: "Active",
    email: "neha@gmail.com"
  },
  {
    id: 4,
    name: "Priya",
    age: 23,
    city: "Jaipur",
    role: "Teacher",
    status: "Active",
    email: "priya@gmail.com"
  },
  {
    id: 5,
    name: "Chandan",
    age: 19,
    city: "Patna",
    role: "Developer",
    status: "Active",
    email: "chandan@gmail.com"
  },
  {
    id: 6,
    name: "Rohit",
    age: 24,
    city: "Lucknow",
    role: "Developer",
    status: "Active",
    email: "rohit@gmail.com"
  }
];

// Redmi Mobile Data

const mobiles = [
  {
    id: 101,
    brand: "Redmi",
    model: "Redmi Note 13",
    price: 14999,
    storage: "128GB",
    ram: "6GB",
    discount: 1000,
    status: "Available"
  },
  {
    id: 102,
    brand: "Redmi",
    model: "Redmi 13C",
    price: 8999,
    storage: "128GB",
    ram: "4GB",
    discount: 500,
    status: "Available"
  },
  {
    id: 103,
    brand: "Redmi",
    model: "Redmi Note 14",
    price: 17999,
    storage: "256GB",
    ram: "8GB",
    discount: 1500,
    status: "Available"
  },
  {
    id: 104,
    brand: "Redmi",
    model: "Redmi Note 14 Pro",
    price: 24999,
    storage: "256GB",
    ram: "8GB",
    discount: 2000,
    status: "Available"
  },
  {
    id: 105,
    brand: "Redmi",
    model: "Redmi A4",
    price: 8499,
    storage: "128GB",
    ram: "4GB",
    discount: 500,
    status: "Available"
  }
];

// Feature 1: Search User By Name

function searchUser(name) {
  return users.find(user =>
    user.name.toLowerCase() === name.toLowerCase()
  );
}

// Feature 2: Search Mobile By Model

function searchMobile(model) {
  return mobiles.find(mobile =>
    mobile.model.toLowerCase() === model.toLowerCase()
  );
}

// Feature 3: Calculate Mobile Final Price

function getFinalPrice(mobileId) {
  const mobile = mobiles.find(item => item.id === mobileId);

  if (!mobile) {
    return "Mobile not found";
  }

  return mobile.price - mobile.discount;
}

// Feature 4: Add New User

function addUser(user) {
  users.push(user);
  return "User added successfully";
}

// Feature 5: Add New Mobile

function addMobile(mobile) {
  mobiles.push(mobile);
  return "Mobile added successfully";
}

// Feature 6: Get All Active Users

function getActiveUsers() {
  return users.filter(user => user.status === "Active");
}

// Feature 7: Update User Details

function updateUser(userId, updatedData) {
  const user = users.find(item => item.id === userId);

  if (!user) {
    return "User not found";
  }

  Object.assign(user, updatedData);

  return "User updated successfully";
}

// Feature 8: Delete User

function deleteUser(userId) {
  const index = users.findIndex(user => user.id === userId);

  if (index === -1) {
    return "User not found";
  }

  users.splice(index, 1);

  return "User deleted successfully";
}

// Feature 9: Update Mobile Price

function updateMobilePrice(mobileId, newPrice) {
  const mobile = mobiles.find(item => item.id === mobileId);

  if (!mobile) {
    return "Mobile not found";
  }

  mobile.price = newPrice;

  return "Mobile price updated successfully";
}

// Feature 10: Filter Mobiles By Maximum Price

function filterMobiles(maxPrice) {
  return mobiles.filter(mobile => mobile.price <= maxPrice);
}

// Feature 11: Calculate Total Inventory Value

function getInventoryValue() {
  return mobiles.reduce((total, mobile) => {
    return total + mobile.price;
  }, 0);
}

// Display Results

console.log("Feature 3 - Third Commit");

console.log(updateUser(1, {
  city: "Delhi",
  email: "rahul.new@gmail.com"
}));

console.log(deleteUser(6));

console.log(updateMobilePrice(101, 13999));

console.log("Mobiles Under 15000:", filterMobiles(15000));

console.log("Total Inventory Value:", getInventoryValue());

console.log("Updated Users:", users);

console.log("Updated Mobiles:", mobiles);