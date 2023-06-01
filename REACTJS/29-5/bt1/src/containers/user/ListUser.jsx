import { Space, Table, Tag, Button, Modal, Row } from "antd";
import { useEffect, useState } from "react";
import { FormUser } from "components/form_add_user";
import { PlusOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";

// const onChange = (pagination, filters, sorter, extra) => {
//   console.log("params", pagination, filters, sorter, extra);
// };

const ListUser = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const data = useSelector((state) => state.users);
  console.log(data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch.users.fetchUsers();
  }, []);

  const onDelete = (record, e) => {
    e.preventDefault();
    console.log(record);
    const newData = data.listUser.filter((element) => element.id != record.id);
    dispatch.users.setListUser(newData);
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      sorter: {
        compare: (a, b) => a.name.localeCompare(b.name),
        multiple: 3,
      },
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Username",
      dataIndex: "username",
      key: "username",
      sorter: {
        compare: (a, b) => a.username.localeCompare(b.username),
        multiple: 3,
      },
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <a>Edit</a>
          <a
            onClick={(e) => {
              onDelete(record, e);
              console.log("Clicked delete on row:", record);
            }}
          >
            Delete
          </a>
        </Space>
      ),
    },
  ];

  return (
    <>
      <Row justify="space-between">
        <h1>List User</h1>
        <Button type="primary" onClick={showModal}>
          Add User <PlusOutlined />
        </Button>
      </Row>
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <FormUser></FormUser>
      </Modal>
      <Table columns={columns} dataSource={data.listUser} />
    </>
  );
};

export default ListUser;
