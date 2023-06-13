const data = [
  { id: 1, name: "Do Thanh Tu", age: "23" },
  { id: 2, name: "Do Thanh", age: "36" },
  { id: 3, name: "Do Thanh Tu", age: "19" },
  { id: 4, name: "Do Thanh Toan", age: "23" },
  { id: 5, name: "Do Thanh Tu", age: "23" },
  { id: 6, name: "Do Thanh Tu", age: "23" },
  { id: 7, name: "Do Thanh Tu", age: "23" },
  { id: 8, name: "Do Thanh Tu", age: "23" },
  { id: 9, name: "Do Thanh Tu", age: "23" },
];

const getAllUsers = (req, res) => {
  res.send(data);
};

const getUserById = (req, res) => {
  const userId = req.params.userId;
  console.log("userId: ", userId);
  data.forEach((element) => {
    if (element.id == userId) {
      res.send(element);
    }
  });
};

const getUserByTagName = (req, res) => {
  const queryObject = req.query;
  console.log("name: ", queryObject.name);
  console.log("age: ", queryObject.age);
  data.forEach((element) => {
    if (element.name == queryObject.name || element.age == queryObject.age) {
      console.log(element);
      res.send(element);
    }
  });
};

const createUser = (req, res) => {
  const {name, age} = req.body;

  //   userArray.map(e => {
  //     let max = data[dataUser.length - 1].id;
  //     data.push({
  //         id: max + 1,
  //         name: e.name,
  //         age: e.age
  //     })
  //   })
  let max = 0;
  data.forEach((element) => {
    if (element.id > max) {
      max = element.id + 1;
    }
  });
  data.push({ id: max, name: name, age: age });
  console.log("name: ", name);
  console.log("age: ", age);
  res.send({
    data,
  });
};

module.exports = {
  getAllUsers,
  getUserById,
  getUserByTagName,
  createUser,
};
