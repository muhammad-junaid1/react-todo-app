import {
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Typography
} from "@mui/material";
import TodoItem from "./TodoItem.component";

const TodoItemsTable = ({ todoItems, editBtnClick, setTodoItems, setEditBtnClick, setInputValue}) => {
  const tableCellStyles = {
    color: "white",
    bgcolor: "black"
  };
  return (
    <>
      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="TodoItems table">
          <TableHead>
            <TableRow>
              <TableCell sx={tableCellStyles} align="center">#</TableCell>
              <TableCell sx={tableCellStyles} align="center">Item</TableCell>
              <TableCell sx={tableCellStyles} align="center">Date</TableCell>
              <TableCell sx={tableCellStyles} align="center">Status</TableCell>
              <TableCell sx={tableCellStyles} align="center">Actions</TableCell>
            </TableRow>
          </TableHead>
          {todoItems.length ?
          <TableBody>
            {todoItems.map((todoItem, index) => (
                <TodoItem key={todoItem.id} setInputValue={setInputValue} editBtnClick={editBtnClick} setEditBtnClick={setEditBtnClick} item={todoItem} setTodoItems={setTodoItems} index={index}/>
            ))}
            </TableBody> : <Typography sx={{ color: "red", pt: 4 }} align="center">
                Items Not Found
          </Typography>
          }
        </Table>
      </TableContainer>
    </>
  );
};

export default TodoItemsTable;
