import { Button, Form, Input, InputNumber, Table } from "antd";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

// const data = [
//   {
//     key: "1",
//     name: "John Brown",
//     age: 32,
//     address: "New York No. 1 Lake Park",
//     tags: ["nice", "developer"],
//   },
//   {
//     key: "2",
//     name: "Jim Green",
//     age: 42,
//     address: "London No. 1 Lake Park",
//     tags: ["loser"],
//   },
//   {
//     key: "3",
//     name: "Joe Black",
//     age: 32,
//     address: "Sydney No. 1 Lake Park",
//     tags: ["cool", "teacher"],
//   },
//   {
//     key: "4",
//     name: "Aoe Black",
//     age: 32,
//     address: "Sydney No. 1 Lake Park",
//     tags: ["cool", "teacher"],
//   },
// ];

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};
/* eslint-enable no-template-curly-in-string */

// const onFinish = (values) => {
//   console.log(values);
// };
export const FormUser = () => {
  const data = useSelector((state) => state.users);
  console.log(data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch.users.fetchUsers();
  }, []);

  const addUser = (user) => {
    const listData = data.listUser;
    const maxId = listData.reduce(
      (max, listData) => (listData.id > max ? listData.id : max),
      listData[0].id
    );
         
    const newData = [...listData, {
        id: maxId + 1,
        name: user.name,
        email:  user.email,
        age: user.age,
  
      }]
      console.log(newData);
    dispatch.users.setListUser(newData);
  };

  return (
    <Form
      {...layout}
      name="nest-messages"
      onFinish={addUser}
      style={{
        maxWidth: 600,
      }}
      validateMessages={validateMessages}
    >
      <Form.Item
        name={["name"]}
        label="Name"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={["email"]}
        label="Email"
        rules={[
          {
            type: "email",
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={["age"]}
        label="Age"
        rules={[
          {
            type: "number",
            min: 0,
            max: 99,
            required: true,
          },
        ]}
      >
        <InputNumber />
      </Form.Item>
      <Form.Item
        wrapperCol={{
          ...layout.wrapperCol,
          offset: 8,
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
