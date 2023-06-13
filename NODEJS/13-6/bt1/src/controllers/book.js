const getAllBooks = (req, res) => {
  res.send([
    { name: "Tieng chim hot trong bui man gai", price: 200000 },
    { name: "Chiec thuyen ngoai xa", price: 150000 },
    { name: "Iphone 13 Pro Max", price: 1200000 },
    { name: "Chiec thuyen ngoai xa", price: 150000 },
    { name: "Tieng chim hot trong bui man gai", price: 200000 },
    { name: "Chiec thuyen ngoai xa", price: 150000 },
    { name: "Tieng chim hot trong bui man gai", price: 200000 },
    { name: "Chiec thuyen ngoai xa", price: 150000 },
  ]);
};

module.exports = {
    getAllBooks
}