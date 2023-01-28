import { Box, Typography } from "@mui/material";
import TodoItemsTable from "./TodoItemsTable.component";
import { useState, useEffect } from "react";

const TodoItems = ({
  filterValue,
  todoItems,
  setTodoItems,
  editBtnClick,
  setEditBtnClick,
  setInputValue,
}) => {
  const [filteredTodoItems, setFilteredTodoItems] = useState(todoItems);

  useEffect(() => {
    if(filterValue === 1) {
        setFilteredTodoItems(todoItems);
    } else if(filterValue === 2) {
        setFilteredTodoItems(todoItems.filter((todoItem) => todoItem.status === "completed"));
    } else {
        setFilteredTodoItems(todoItems.filter((todoItem) => todoItem.status === "active"));
    }
  }, [filterValue, todoItems]);
  return (
    <>
      <Box pb={4}>
        {todoItems.length ? (
          <TodoItemsTable
            setInputValue={setInputValue}
            editBtnClick={editBtnClick}
            setEditBtnClick={setEditBtnClick}
            setTodoItems={setTodoItems}
            todoItems={filteredTodoItems}
          />
        ) : (
          <Typography sx={{ color: "red", pt: 4 }} align="center">
            Nothing yet
          </Typography>
        )}
      </Box>
    </>
  );
};

export default TodoItems;
