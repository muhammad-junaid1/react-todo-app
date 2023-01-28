import {
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import TodoItem from "./TodoItem.component";

const TodoItemsTable = ({ todoItems, editBtnClick, setTodoItems, setEditBtnClick, setInputValue}) => {
  return (
    <>
      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">#</TableCell>
              <TableCell align="center">Item</TableCell>
              <TableCell align="center">Date</TableCell>
              <TableCell align="center">Status</TableCell>
              <TableCell align="center">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {todoItems.map((todoItem, index) => (
                <TodoItem key={todoItem.id} setInputValue={setInputValue} editBtnClick={editBtnClick} setEditBtnClick={setEditBtnClick} item={todoItem} setTodoItems={setTodoItems} index={index}/>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default TodoItemsTable;
