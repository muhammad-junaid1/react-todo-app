import { TableRow, TableCell, Chip, IconButton, Stack } from "@mui/material";
import {
  Done as DoneIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
  DoneAll as DoneAllIcon,
} from "@mui/icons-material";

const Status = ({ status }) => {
  if (status === "active") {
    return (
      <>
        <Chip label="Active" color="success" />
      </>
    );
  } else {
    return (
      <>
        <Chip label="Completed" color="error" />
      </>
    );
  }
};

const TodoItem = ({
  item,
  index,
  setTodoItems,
  setEditBtnClick,
  editBtnClick,
  setInputValue,
}) => {
  const { id, itemText, date, status } = item;

  const deleteTodoItem = () => {
    setTodoItems((todoItems) => {
      return todoItems.filter((todoItem) => {
        return todoItem.id !== item.id;
      });
    });
    setEditBtnClick({
        isClicked: false,
        clickedItem: {},
        updatedText:""
    });
    if(editBtnClick.isClicked) {
        setInputValue("");
    }
  };

  const doneTodoItem = () => {
    setTodoItems((todoItems) => {
      return todoItems.filter((todoItem) => todoItem.id !== item.id);
    });
    setTodoItems((todoItems) => {
      return [...todoItems, {
        ...item, status: "completed"
      }];
    });
    setEditBtnClick({
        isClicked: false,
        clickedItem: {},
        updatedText:""
    });
    if(editBtnClick.isClicked) {
        setInputValue("");
    }
  };

  const editTodoItem = () => {
    if (!editBtnClick.isClicked) {
      setEditBtnClick(() => {
        return {
          isClicked: true,
          clickedItem: item,
        };
      });
    }
  };
  return (
    <>
      <TableRow
        {...(editBtnClick.clickedItem.id !== item.id ? { hover: true } : {})}
        key={id}
        sx={{
          "&:last-child td, &:last-child th": { border: 0 },
          background: editBtnClick.clickedItem.id === item.id ? "#c3c3c3" : "",
        }}
      >
        <TableCell align="center">{index + 1}</TableCell>
        <TableCell
          align="center"
          sx={status === "completed" ? { textDecoration: "line-through" } : {}}
        >
          {itemText}
        </TableCell>
        <TableCell align="center">{date}</TableCell>
        <TableCell align="center">
          <Status status={status} />
        </TableCell>
        <TableCell align="center">
        {((editBtnClick.isClicked && editBtnClick.clickedItem.id === item.id) || (!editBtnClick.isClicked)) &&
          <Stack direction="row" alignItems="center" justifyContent="center">
            {status === "active" ? (
              <IconButton onClick={doneTodoItem}>
                <DoneIcon />
              </IconButton>
            ) : (
              <IconButton disabled>
                <DoneAllIcon />
              </IconButton>
            )}
            {status === "active" && (
              <IconButton onClick={editTodoItem}>
                <EditIcon />
              </IconButton>
            )}

            <IconButton onClick={deleteTodoItem}>
              <DeleteIcon />
            </IconButton>
          </Stack>
        }
        </TableCell>
      </TableRow>
    </>
  );
};

export default TodoItem;
