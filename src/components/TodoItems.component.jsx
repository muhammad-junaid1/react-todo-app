import {
  Box,
  Typography,
} from "@mui/material";

const TodoItems = ({todoItems}) => {
    return (
        <>
          <Box py={4}>
            {todoItems.length ? (
              todoItems.map((todoItem) => {
                return <p>{todoItem}</p>;
              })
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