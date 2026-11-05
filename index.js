// Version 5 - Fifth Version
// Branch: main
// Previous Version: Version 4
// This version adds additional user and mobile details.

// User Data

const users = [
  {
    id: 1,
    name: "Rahul",
    age: 20,
    city: "Patna",
    role: "Student",
    status: "Active",
    phone: "9876543210",
    email: "rahul@gmail.com",
    createdAt: "2026-10-01"
  },
  {
    id: 2,
    name: "Amit",
    age: 22,
    city: "Delhi",
    role: "Developer",
    status: "Active",
    phone: "9876543211",
    email: "amit@gmail.com",
    createdAt: "2026-10-02"
  },
  {
    id: 3,
    name: "Neha",
    age: 21,
    city: "Mumbai",
    role: "Designer",
    status: "Active",
    phone: "9876543212",
    email: "neha@gmail.com",
    createdAt: "2026-10-03"
  },
  {
    id: 4,
    name: "Priya",
    age: 23,
    city: "Jaipur",
    role: "Teacher",
    status: "Active",
    phone: "9876543213",
    email: "priya@gmail.com",
    createdAt: "2026-10-04"
  },
  {
    id: 5,
    name: "Chandan",
    age: 19,
    city: "Patna",
    role: "Developer",
    status: "Active",
    phone: "9876543214",
    email: "chandan@gmail.com",
    createdAt: "2026-10-05"
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
    color: "Black",
    stock: 15,
    status: "Available"
  },
  {
    id: 102,
    brand: "Redmi",
    model: "Redmi 13C",
    price: 8999,
    storage: "128GB",
    ram: "4GB",
    color: "Blue",
    stock: 20,
    status: "Available"
  },
  {
    id: 103,
    brand: "Redmi",
    model: "Redmi Note 14",
    price: 17999,
    storage: "256GB",
    ram: "8GB",
    color: "Green",
    stock: 10,
    status: "Available"
  },
  {
    id: 104,
    brand: "Redmi",
    model: "Redmi Note 14 Pro",
    price: 24999,
    storage: "256GB",
    ram: "8GB",
    color: "Titan Black",
    stock: 8,
    status: "Available"
  }
];

// Feature 1: Get User By ID

function getUserById(userId) {
  return users.find(user => user.id === userId);
}

// Feature 2: Get Mobile By ID

function getMobileById(mobileId) {
  return mobiles.find(mobile => mobile.id === mobileId);
}

// Feature 3: Get Available Mobiles

function getAvailableMobiles() {
  return mobiles.filter(mobile => mobile.status === "Available");
}

// Feature 4: Calculate Total Mobile Stock

function getTotalStock() {
  return mobiles.reduce((total, mobile) => {
    return total + mobile.stock;
  }, 0);
}

// Feature 5: Calculate Total Users

function getTotalUsers() {
  return users.length;
}

// Display Results

console.log("Version 5 - Fifth Version");

console.log("User Details:", getUserById(5));

console.log("Mobile Details:", getMobileById(101));

console.log("Available Mobiles:", getAvailableMobiles());

console.log("Total Mobile Stock:", getTotalStock());

console.log("Total Users:", getTotalUsers());

console.log("All Users:", users);

console.log("All Mobiles:", mobiles);