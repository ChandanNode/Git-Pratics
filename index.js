// Feature 1 - First Commit
// Branch: feature-add
// Created from: Version 4
// This is the first feature added after Version 4.

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

// Display Results

console.log("Feature 1 - First Commit");

console.log("All Users:", users);

console.log("All Redmi Mobiles:", mobiles);

console.log("User Search:", searchUser("Chandan"));

console.log("Mobile Search:", searchMobile("Redmi Note 13"));

console.log("Final Mobile Price:", getFinalPrice(101));