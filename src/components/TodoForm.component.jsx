import { Box, Stack, TextField, Button, IconButton } from "@mui/material";
import { useEffect, useRef } from "react";
import { Close as CloseIcon } from "@mui/icons-material";

const TodoForm = ({
  todoItems,
  inputValue,
  setInputValue,
  handleTextFieldSubmit,
  editBtnClick,
  setEditBtnClick,
}) => {
  const inputRef = useRef();

  const handleInput = (event) => {
    if (editBtnClick.isClicked) {
      setEditBtnClick((editBtnClick) => {
        return {
          ...editBtnClick,
          updatedText: event.target.value,
        };
      });
    }
    setInputValue(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleTextFieldSubmit();
    }
  };

  useEffect(() => {
    if (editBtnClick.isClicked && editBtnClick.clickedItem.itemText) {
      setEditBtnClick((editBtnClick) => {
        return {
          ...editBtnClick,
          updatedText: editBtnClick.clickedItem.itemText,
        };
      });
      setInputValue(editBtnClick.clickedItem.itemText);
    }
  }, [
    editBtnClick.isClicked,
    setEditBtnClick,
    editBtnClick.clickedItem.itemText,
    setInputValue,
  ]);

  useEffect(() => {
    inputRef.current.focus();
  }, [todoItems]);

  const closeUpdateForm = () => {
    setInputValue("");
    setEditBtnClick(() => {
      return {
        isClicked: false,
        clickedItem: {},
        updatedText: "",
      };
    });
  };

  return (
    <>
      <Box sx={{ background: "#de6873", borderRadius: 1 }} py={1} px={2}>
        <Stack
          alignItems="center"
          justifyContent="space-between"
          direction="row"
        >
          {editBtnClick.isClicked && (
            <IconButton onClick={closeUpdateForm} sx={{ mr: 2 }}>
              <CloseIcon sx={{ color: "white" }} />
            </IconButton>
          )}
          <TextField
            onInput={handleInput}
            onKeyDown={handleKeyDown}
            variant="outlined"
            InputProps={{ disableUnderline: true }}
            fullWidth
            required
            autoFocus
            ref={inputRef}
            placeholder="Enter a new todo item"
            value={inputValue}
            sx={{
              "& .MuiOutlinedInput-root.Mui-focused": {
                "& > fieldset": {
                  borderColor: "red",
                },
              },
              background: "white",
              mr: 2,
              borderRadius: 1,
            }}
          />
          <Button
            onClick={handleTextFieldSubmit}
            variant="contained"
            color="secondary"
            sx={{ py: 1.5 }}
          >
            {editBtnClick.isClicked ? "Update" : "Add"}
          </Button>
        </Stack>
      </Box>
    </>
  );
};

export default TodoForm;
