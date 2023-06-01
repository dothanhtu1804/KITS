import {
  Space,
  Form,
  InputNumber,
  Popconfirm,
  Table,
  Typography,
  Input,
  Button,
  Modal,
  Row,
} from "antd";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PlusOutlined } from "@ant-design/icons";
import { FormUser } from "components/form_add_user";

const EditableCell = ({
  editing,
  dataIndex,
  title,
  inputType,
  record,
  index,
  children,
  ...restProps
}) => {
  const inputNode = inputType === "number" ? <InputNumber /> : <Input />;
  return (
    <td {...restProps}>
      {editing ? (
        <Form.Item
          name={dataIndex}
          style={{
            margin: 0,
          }}
          rules={[
            {
              required: true,
              message: `Please Input ${title}!`,
            },
          ]}
        >
          {inputNode}
        </Form.Item>
      ) : (
        children
      )}
    </td>
  );
};
const FormUser2 = () => {
  const Data = useSelector((state) => state.users);
  const [form] = Form.useForm();
  const [editingid, setEditingid] = useState("");
  const isEditing = (record) => record.id === editingid;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch.users.fetchUsers();
  }, []);

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

  const edit = (record) => {
    const edit = form.setFieldsValue({
      id: "",
      name: "",
      username: "",
      email: "",
      ...record,
    });
    setEditingid(record.id);
  };

  const cancel = () => {
    setEditingid("");
  };

  const Save = async (id) => {
    const row = await form.validateFields();
    const data2 = [...Data.listUser];
    const index = data2.findIndex((item) => id === item.id);
    if (index > -1) {
      const item = Data[index];
      data2.splice(index, 1, {
        id,
        ...item,
        ...row,
      });
      dispatch.users.setListUser(data2);
      setEditingid("");
    } else {
      data2.push(row);
      setEditingid("");
    }
  };

  const onDelete = (record, e) => {
    e.preventDefault();
    const newData = Data.listUser.filter((element) => element.id != record.id);
    dispatch.users.setListUser(newData);
  };

  const columns = [
    {
      title: "id",
      dataIndex: "id",
      width: "5%",
    },
    {
      title: "name",
      dataIndex: "name",
      width: "25%",
      editable: true,
    },
    {
      title: "username",
      dataIndex: "username",
      width: "15%",
      editable: true,
    },
    {
      title: "Email",
      dataIndex: "email",
      width: "40%",
      editable: true,
    },
    {
      title: "operation",
      dataIndex: "operation",
      render: (_, record) => {
        const editable = isEditing(record);
        return editable ? (
          <span>
            <Typography.Link
              onClick={() => Save(record.id)}
              style={{
                marginRight: 8,
              }}
            >
              Save
            </Typography.Link>
            <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
              <a>Cancel</a>
            </Popconfirm>
          </span>
        ) : (
          <Space size="middle">
            <Typography.Link
              disabled={editingid !== ""}
              onClick={() => edit(record)}
            >
              Edit
            </Typography.Link>
            <a
              onClick={(e) => {
                onDelete(record, e);
                console.log("Clicked delete on row:", record);
              }}
            >
              Delete
            </a>
          </Space>
        );
      },
    },
  ];
  const mergedColumns = columns.map((col) => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: (record) => ({
        record,
        inputType: col.dataIndex === "age" ? "number" : "text",
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });
  return (
    <>
      <Row justify="space-between">
        <h1>List User</h1>
        <Button type="primary" onClick={showModal}>
          Add User <PlusOutlined />
        </Button>
      </Row>
      <Modal
        title="Add User"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <FormUser></FormUser>
      </Modal>
      <Form form={form} component={false}>
        <Table
          components={{
            body: {
              cell: EditableCell,
            },
          }}
          bordered
          dataSource={Data.listUser}
          columns={mergedColumns}
          rowClassName="editable-row"
          pagination={{
            onChange: cancel,
          }}
        />
      </Form>
    </>
  );
};
export default FormUser2;
