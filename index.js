
// Feature 4 - Fourth Commit
// Branch: feature-add
// Previous Commit: Feature 3
// This commit introduces a completely new Order Management System.

// Order Data

const orders = [
  {
    orderId: 501,
    customer: "Arjun",
    product: "Wireless Headphones",
    quantity: 2,
    price: 1200,
    status: "Pending",
    payment: "Online"
  },
  {
    orderId: 502,
    customer: "Sneha",
    product: "Bluetooth Speaker",
    quantity: 1,
    price: 2500,
    status: "Delivered",
    payment: "Cash"
  },
  {
    orderId: 503,
    customer: "Karan",
    product: "Smart Watch",
    quantity: 3,
    price: 1800,
    status: "Processing",
    payment: "Online"
  },
  {
    orderId: 504,
    customer: "Anjali",
    product: "Keyboard",
    quantity: 1,
    price: 1500,
    status: "Pending",
    payment: "Cash"
  }
];

// Feature 1: Create New Order

function createOrder(order) {
  const exists = orders.some(
    item => item.orderId === order.orderId
  );

  if (exists) {
    return "Order ID already exists";
  }

  orders.push(order);

  return "Order created successfully";
}

// Feature 2: Calculate Order Amount

function calculateOrderAmount(orderId) {
  const order = orders.find(
    item => item.orderId === orderId
  );

  if (!order) {
    return "Order not found";
  }

  return order.quantity * order.price;
}

// Feature 3: Apply Coupon Discount

function applyCoupon(orderId, coupon) {
  const order = orders.find(
    item => item.orderId === orderId
  );

  if (!order) {
    return "Order not found";
  }

  const amount = order.quantity * order.price;

  if (coupon === "SAVE10") {
    return amount - amount * 0.10;
  }

  if (coupon === "SAVE20") {
    return amount - amount * 0.20;
  }

  return "Invalid coupon code";
}

// Feature 4: Update Order Status

function updateOrderStatus(orderId, newStatus) {
  const order = orders.find(
    item => item.orderId === orderId
  );

  if (!order) {
    return "Order not found";
  }

  order.status = newStatus;

  return "Order status updated successfully";
}

// Feature 5: Cancel Order

function cancelOrder(orderId) {
  const order = orders.find(
    item => item.orderId === orderId
  );

  if (!order) {
    return "Order not found";
  }

  if (order.status === "Delivered") {
    return "Delivered order cannot be cancelled";
  }

  order.status = "Cancelled";

  return "Order cancelled successfully";
}

// Feature 6: Filter Orders By Status

function getOrdersByStatus(status) {
  return orders.filter(
    order => order.status === status
  );
}

// Feature 7: Calculate Total Revenue

function calculateTotalRevenue() {
  return orders
    .filter(order => order.status === "Delivered")
    .reduce((total, order) => {
      return total + order.quantity * order.price;
    }, 0);
}

// Display Results

console.log("Feature 4 - Fourth Commit");

console.log(
  createOrder({
    orderId: 505,
    customer: "Vikash",
    product: "Gaming Mouse",
    quantity: 2,
    price: 900,
    status: "Pending",
    payment: "Online"
  })
);

console.log("Order Amount:", calculateOrderAmount(501));

console.log("Coupon Price:", applyCoupon(501, "SAVE10"));

console.log(
  updateOrderStatus(501, "Processing")
);

console.log("Pending Orders:", getOrdersByStatus("Pending"));

console.log("Cancelled Order:", cancelOrder(504));

console.log("Total Revenue:", calculateTotalRevenue());

console.log("All Orders:", orders);
