import { useState } from "react";
import { Paper, Container } from "@mui/material";
import Header from "./components/Header.component";
import TodoForm from "./components/TodoForm.component";
import TodoItems from "./components/TodoItems.component";
import TodoItemModel from "./todoItem.model";

function App() {
  const [filterValue, setFilterValue] = useState(1);
  const [inputValue, setInputValue] = useState("");
  const [todoItems, setTodoItems] = useState([]);
  const [editBtnClick, setEditBtnClick] = useState({
    isClicked: false,
    clickedItem: {},
  });

  const handleChangeFilter = (event) => {
    setFilterValue(event.target.value);
  };

  const handleTextFieldSubmit = () => {
    const getDate = () => {
      const date = new Date();
      const month = date.getMonth() + 1;
      const day = date.getDate();
      const year = date.getFullYear();

      const dateString = `${month}/${day}/${year}`;
      return dateString;
    };

    if(editBtnClick.isClicked) {
      setTodoItems((todoItems) => {
        return todoItems.map((todoItem) => {
          if(todoItem.id === editBtnClick.clickedItem.id) {
            return {
              ...todoItem,
              itemText: editBtnClick.updatedText,
            };
          } else {
            return {...todoItem};
          }
        });
      });
      setEditBtnClick(() => {
        return {
          isClicked: false,
          clickedItem: {},
          updatedText: ""
        };
      });
    } else {
      const newTodoItem = new TodoItemModel(
        new Date().getTime(),
        inputValue,
        getDate(),
        "active",
      );
      setTodoItems((todoItems) => {
        return [newTodoItem, ...todoItems];
      });
    }
    setInputValue("");
  };

  return (
    <>
      <Container maxWidth="md">
        <Paper variant="outlined" sx={{ mt: 5, p: 2 }}>
          <Header todoItems={todoItems} setTodoItems={setTodoItems} filterValue={filterValue} handleChangeFilter={handleChangeFilter} />
          <TodoItems
            todoItems={todoItems}
            editBtnClick={editBtnClick}
            setTodoItems={setTodoItems}
            setEditBtnClick={setEditBtnClick}
            setInputValue={setInputValue}
            filterValue={filterValue}
          />
          <TodoForm
          todoItems={todoItems}
            setEditBtnClick={setEditBtnClick}
            editBtnClick={editBtnClick}
            inputValue={inputValue}
            setInputValue={setInputValue}
            handleTextFieldSubmit={handleTextFieldSubmit}
          />
        </Paper>
      </Container>
    </>
  );
}

export default App;
