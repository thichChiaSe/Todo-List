import { Col, Row, Input, Button, Select, Tag } from "antd";
import Todo from "../Todo";
import { useSelector, useDispatch } from "react-redux";
import { addTodo } from "../../redux/actions";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import { todoListSelector } from "../../redux/selector";
export default function TodoList() {
  const dispatch = useDispatch();
  const todoList = useSelector(todoListSelector);
  // console.log("datadsdsdsds", todoList);
  //State
  const [todoName, setTodoName] = useState();
  const [priority, setPriority] = useState("Medium");
  //handle Event
  const handleAddButtonClick = () => {
    dispatch(
      addTodo({
        id: uuidv4, //random id
        name: todoName, //lấy data từ input
        prioriry: priority,
        completed: false,
      })
    );
  };
  const handleInputChange = (e) => {
    setTodoName(e.target.value); // gán lại giá trị cho todoName
    // console.log(
    //   "🚀 ~ file: index.js ~ line 22 ~ handleInputChange ~ e.target.value;",
    //   e.target.value
    // );
  };
  const handlePriorityChange = (value) => {
    setPriority(value);
  };
  // console.log(todoList);
  return (
    <Row style={{ height: "calc(100% - 40px)" }}>
      <Col span={24} style={{ height: "calc(100% - 40px)", overflowY: "auto" }}>
        {/* <Todo name="Learn React" prioriry="High" />
        <Todo name="Learn Redux" prioriry="Medium" />
        <Todo name="Learn JavaScript" prioriry="Low" /> */}
        {todoList.map((todo) => (
          <Todo name={todo.name} prioriry={todo.prioriry} />
        ))}
        {/* <p>{todoList.map((data) => data.name)}</p> */}
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: "flex" }} compact>
          <Input value={todoName} onChange={handleInputChange} />
          <Select
            defaultValue="Medium"
            value={priority}
            onChange={handlePriorityChange}
          >
            <Select.Option value="High" label="High">
              <Tag color="red">High</Tag>
            </Select.Option>
            <Select.Option value="Medium" label="Medium">
              <Tag color="blue">Medium</Tag>
            </Select.Option>
            <Select.Option value="Low" label="Low">
              <Tag color="gray">Low</Tag>
            </Select.Option>
          </Select>
          <Button type="primary" onClick={handleAddButtonClick}>
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}
