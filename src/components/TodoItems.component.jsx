import {
  Box,
  Typography,
} from "@mui/material";
import TodoItemsTable from "./TodoItemsTable.component";

const TodoItems = ({todoItems, setTodoItems, editBtnClick, setEditBtnClick, setInputValue}) => {
    return (
        <>
          <Box py={4}>
            {todoItems.length ? (
                <TodoItemsTable setInputValue={setInputValue} editBtnClick={editBtnClick} setEditBtnClick={setEditBtnClick} setTodoItems={setTodoItems} todoItems={todoItems}/>
            ) : (
              <Typography sx={{ color: "red" }} align="center">
                Nothing yet
              </Typography>
            )}
          </Box>

        </>
    );
}

export default TodoItems;