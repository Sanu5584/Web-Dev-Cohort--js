// Ques 1

let salesData = [
  { product: 'Laptop', price: 50000 },
  { product: 'Smartphones', price: 20000 },
  { product: 'Headphones', price: 2000 },
  { product: 'Keyboards', price: 2000 },
];

let totalSales = salesData.reduce((acc, item) => acc + item.price, 0); // using reduce

// totalSales = 0; // using for loop

// for (let item = 0; item < salesData.length; item++) {
//   totalSales = totalSales + salesData[item].price;
// }

// console.log(totalSales);

// Ques 2

let inventory = [
  { name: 'Widget A', stock: 30 },
  { name: 'Widget B', stock: 120 },
  { name: 'Widget C', stock: 45 },
  { name: 'Widget D', stock: 70 },
];

// using for and if

// let lowStockItems = [];

// for (let i = 0; i < inventory.length; i++) {
//   if (inventory[i].stock <= 50) {
//     lowStockItems.push(inventory[i]);
//   }
// }

// console.log(lowStockItems);

// using filter

let lowStockItems = inventory.filter((items) => items.stock <= 50);

// console.log(lowStockItems);
// filter returns atleast an empty array if nothing was returned

// Ques 3 :- find most active users

let userActivity = [
  { user: 'Oggy', activityCount: 45 },
  { user: 'Bob', activityCount: 72 },
  { user: 'Jack', activityCount: 33 },
];

// using for and if else
// let mostActivityCountedUser = []

// console.log(mostActivityCountedUser)

// using map

let mostActivityCountedUser = userActivity.reduce((maxUser, user) =>
  user.activityCount > maxUser.activityCount ? user : maxUser
);

/// if not understand then try DRY run method (or chatgpt to dry run it)

/* explaination
 
- read docs on reduce on mdn

- Since no initial value is provided in .reduce(), the first element { user: "Oggy", activityCount: 45 } is taken as the initial value of maxUser. The iteration starts from the second element. In the first iteration, the user is { user: "Bob", activityCount: 72 }. Since 72 > 45, the condition is true, and maxUser is updated to { user: "Bob", activityCount: 72 }. In the second iteration, the user is { user: "Jack", activityCount: 33 }. Since 33 > 72 is false, maxUser remains { user: "Bob", activityCount: 72 }. After all iterations, the final value of maxUser is { user: "Bob", activityCount: 72 }, which is returned as the result.

*/

// console.log(mostActivityCountedUser);

// Ques 4

let expenses = [
  { description: 'Groceries', amount: 50, category: 'Food' },
  { description: 'Electricity Bill', amount: 100, category: 'Utilities' },
  { description: 'Dinner', amount: 30, category: 'Food' },
  { description: 'Internet Bill', amount: 50, category: 'Utilities' },
  { description: 'Travel Costs', amount: 80, category: 'Utilities' },
  { description: 'School Fees', amount: 200, category: 'Education' },
  { description: 'School Books', amount: 80, category: 'Education' },
];

let expenseReport = expenses.reduce(
  (report, expense) => {
    report[expense.category] = report[expense.category] + expense.amount;
    // report[expense.category] = (report[expense.category] || 0) + expense.amount // for dynamic data calculation
    return report;
  },
  { Food: 0, Utilities: 0, Education: 0 }
);

// console.log('Your Expense Report :', expenseReport);

// Ques 5

let tasks = [
  { description: 'Write report', completed: false, priority: 2 },
  { description: 'Send email', completed: true, priority: 3 },
  { description: 'Prepare presentation', completed: false, priority: 1 },
];

let incompleteTasks = tasks
  .filter((task) => !task.completed)
  .sort((a, b) => a.priority - b.priority);

// console.log(incompleteTasks);

// Ques 6

let movieRatings = [
  { title: 'Movie A', ratings: [4, 5, 3] },
  { title: 'Movie B', ratings: [5, 5, 4] },
  { title: 'Movie C', ratings: [3, 4, 2] },
  { title: 'Movie D', ratings: [2, 5, 1] },
  { title: 'Movie E', ratings: [7, 5, 6] },
];

let avgRatingsOfMovie = movieRatings.map((movie) => {
  let total = movie.ratings.reduce((sum, rating) => sum + rating, 0);
  let avg = total / movie.ratings.length;

  return { title: movie.title, averageRating: avg.toFixed(2) };
});

console.log(avgRatingsOfMovie);

// Ques 7



