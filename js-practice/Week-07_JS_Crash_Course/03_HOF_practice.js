// Ques 1

let salesData = [
  { product: 'Laptop', price: 50000 },
  { product: 'Smartphones', price: 20000 },
  { product: 'Headphones', price: 2000 },
  { product: 'Keyboards', price: 2000 },
];

// let totalSales = salesData.reduce((acc, item) => acc + item.price, 0); // using reduce

const totalSales = salesData.reduce((sales, item) => {
  return sales + item.price
}, 0)

// totalSales = 0; // using for loop



// console.log("Total sales :- ", totalSales);

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

const mostActiveUsers = userActivity.reduce((maxUser, user) => {
  return user.activityCount > maxUser.activityCount ? user : maxUser
})

// console.log(mostActiveUsers);

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

// const expenseReport = expenses.reduce((report, expense) => {
//   report[expense.category] += expense.amount // its hardcoded attempt 
//   return report
// }, { Food: 0, Utilities: 0, Education: 0 })

/** Explaination
 * in line 89, here we use spuare bracket notation instead of dot notation for accessing object property bcoz here we want dynamic property
 * we cant be able to directly use return on line 91 bcoz, then it passes an hardcoded value of 50, but we want full accumulator 
 */

const expenseReport = expenses.reduce((report, expense) => {
  report[expense.category] = (report[expense.category] || 0) + expense.amount // its dynamic attempt
  return report
}, {})
// ---------- Code explaination DRY run
// Initial report = {}

// ───────────────
// 1️⃣ Groceries → Food (50)
// ───────────────
// report["Food"] = (undefined || 0) + 50
// => report = { Food: 50 }

// ───────────────
// 2️⃣ Electricity Bill → Utilities (100)
// ───────────────
// report["Utilities"] = (undefined || 0) + 100
// => report = { Food: 50, Utilities: 100 }

// ───────────────
// 3️⃣ Dinner → Food (30)
// ───────────────
// report["Food"] = (50 || 0) + 30
// => report = { Food: 80, Utilities: 100 }

// ───────────────
// 4️⃣ Internet Bill → Utilities (50)
// ───────────────
// report["Utilities"] = (100 || 0) + 50
// => report = { Food: 80, Utilities: 150 }

// ───────────────
// 5️⃣ Travel Costs → Utilities (80)
// ───────────────
// report["Utilities"] = (150 || 0) + 80
// => report = { Food: 80, Utilities: 230 }

// ───────────────
// 6️⃣ School Fees → Education (200)
// ───────────────
// report["Education"] = (undefined || 0) + 200
// => report = { Food: 80, Utilities: 230, Education: 200 }

// ───────────────
// 7️⃣ School Books → Education (80)
// ───────────────
// report["Education"] = (200 || 0) + 80
// => report = { Food: 80, Utilities: 230, Education: 280 }

// ───────────────
// ✅ Final Output:
// ───────────────
// expenseReport = {
//   Food: 80,
//   Utilities: 230,
//   Education: 280
// }
// 🧭 Logical Flow Summary:
// pgsql
// Copy code
//         ┌────────────┐
//         │ expenses[] │
//         └─────┬──────┘
//               ↓
//       ┌────────────────┐
//       │ reduce() starts │
//       └────────────────┘
//               ↓
//       ┌──────────────────────────┐
//       │ for each expense object  │
//       │ add to its category sum  │
//       └──────────────────────────┘
//               ↓
//       ┌────────────────────┐
//       │ return report obj  │
//       └────────────────────┘
//               ↓
//   ✅ Combined category totals




// console.log('Your Expense Report :', expenseReport);


// Ques 5 :- give all tasks which was not completed and sort them too on basis of priority

let tasks = [
  { description: 'Write report', completed: false, priority: 2 },
  { description: 'Send email', completed: true, priority: 3 },
  { description: 'Prepare presentation', completed: false, priority: 1 },
];

const pendingSortedTasks = tasks
  .filter((task) => task.completed === false)
  .sort((a, b) => a.priority - b.priority)

// console.log("Incomplete and Sorted Tasks :- ", pendingSortedTasks);

// Ques 6 :- average movie ratings

let movieRatings = [
  { title: 'Movie A', ratings: [4, 5, 3] },
  { title: 'Movie B', ratings: [5, 5, 4] },
  { title: 'Movie C', ratings: [3, 4, 2, 6] },
  { title: 'Movie D', ratings: [2, 5, 1] },
  { title: 'Movie E', ratings: [7, 5, 6, 6] },
];

// pick a movie -> calc avg rating -> add new prop in movie obj named avgRating

const avgRatingOfMovies = movieRatings.map((movie) => {
  const totalOfAllRating = movie.ratings.reduce((totalRating, rating) => totalRating + rating, 0)
  const avgRating = totalOfAllRating / movie.ratings.length
  return Object.assign({}, movie, { avgRating: avgRating.toFixed(2) })
})

console.log("Average rating of the movies :- ", avgRatingOfMovies);
 