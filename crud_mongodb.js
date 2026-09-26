use("ecom");

db.orders.insertMany([
{
 orderId: "ORD001",
 user: "John Doe",
 products: [
{ name: "Wireless Mouse", quantity: 1, price: 799 },
{ name: "Mechanical Keyboard", quantity: 1, price: 2499 }
],
 total: 3298,
 status: "Delivered",
 createdAt: new Date()
},
{
 orderId: "ORD002",
 user: "Jane Smith",
 products: [
{ name: "Gaming Laptop", quantity: 1, price: 85999 }
],
 total: 85999,
 status: "Pending",
 createdAt: new Date()
}
])


db.order.insertMany([
{
 orderId: "ORD001",
 user: "John Doe",
 products: [
{ name: "Wireless Mouse", quantity: 1, price: 799 },
{ name: "Mechanical Keyboard", quantity: 1, price: 2499 }
],
 total: 3298,
 status: "Delivered",
 createdAt: new Date()
},
{
 orderId: "ORD002",
 user: "Jane Smith",
 products: [
{ name: "Gaming Laptop", quantity: 1, price: 85999 }
],
 total: 85999,
 status: "Pending",
 createdAt: new Date()
}
])


db.contact.insertMany([
{ name: "Alice", message: "Loved your website!", phone: "9876543210", createdAt:
new Date() },
{ name: "Bob", message: "Do you have discounts on laptops?", phone: "9123456789",
createdAt: new Date() },
{ name: "Carol", message: "I want to cancel my order.", phone: "9988776655",
createdAt: new Date() }
])


db.prod.find();

db.prod.find().pretty()

db.prod.find({ price: { $gt: 1000 } })

db.prod.find({ category: "Electronics" })

db.prod.find({ price: { $gte: 1000, $lte: 50000 } })

db.prod.find({ $or: [{ category: "Electronics" }, { stock: { $lt: 50 } }] })

db.prod.find().sort({ price: -1 }).limit(2)

db.prod.updateOne(
{ name: "Wireless Mouse" },
{ $set: { price: 899 } }
)

db.prod.updateMany(
{ category: "Electronics" },
{ $inc: { stock: 10 } }
)

db.prod.updateOne(
{ name: "Wireless Mouse" },
{ $push: { tags: "new" } }
)

db.contact.deleteOne({ name: "Alice" })

db.order.deleteMany({ status: "Delivered" })

db.prod.createIndex({ name: 1 })

db.prod.getIndexes()

db.prod.find({ price: { $gt: 5000 } }).explain("executionStats")

db.order.aggregate([
{ $group: { _id: null, totalRevenue: { $sum: "$total" } } }
])

db.order.aggregate([
{ $group: { _id: "$status", totalOrders: { $sum: 1 } } }
])

db.order.aggregate([
{
 $lookup: {
from: "products",
 localField: "products.name",
 foreignField: "name",
as: "productDetails"
}
}
])

db.sales.insertMany([
{ _id: 1, item: "Apple", price: 10, quantity: 5, category: "Fruit" },
{ _id: 2, item: "Banana", price: 5, quantity: 10, category: "Fruit" },
{ _id: 3, item: "Carrot", price: 8, quantity: 6, category: "Vegetable" },
{ _id: 4, item: "Tomato", price: 6, quantity: 8, category: "Vegetable" },
{ _id: 5, item: "Mango", price: 15, quantity: 3, category: "Fruit" }
]);

db.sales.aggregate([
{ $match: { category: "Fruit" } }
]);

db.sales.aggregate([
{ $project: { _id: 0, item: 1, price: 1 } }
]);

db.sales.aggregate([
{
 $group: {
 _id: "$category",
 totalSales: { $sum: { $multiply: ["$price", "$quantity"] } }
}
}
]);

db.sales.aggregate([
{
 $group: {
 _id: "$category",
 totalSales: { $sum: { $multiply: ["$price", "$quantity"] } }
}
},
{ $sort: { totalSales: -1 } }
]);

db.sales.aggregate([
{ $match: { category: "Fruit" } },
{
 $group: {
 _id: null,
 totalFruitSales: { $sum: { $multiply: ["$price", "$quantity"] } }
}
}
])

db.prod.createIndex({ name: 1 }) 

db.prod.getIndexes()

db.stats()

db.serverStatus()

db.products.countDocuments()

db.products.renameCollection("items")