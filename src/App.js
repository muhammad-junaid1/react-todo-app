import { useState } from "react";
import {
  Paper,
  Container,
} from "@mui/material";
import Header from "./components/Header.component";
import TodoForm from "./components/TodoForm.component";
import TodoItems from "./components/TodoItems.component";

function App() {
  const [filterValue, setFilterValue] = useState(1);
  const [inputValue, setInputValue] = useState("");
  const [todoItems, setTodoItems] = useState([]);

  const handleChange = (event) => {
    setFilterValue(event.target.value);
  };

  const handleInput = (event) => {
    setInputValue(event.target.value);
  };

  const handleClick = () => {
    setTodoItems((todoItems) => {
      return [...todoItems, inputValue];
    });
    setInputValue("");
  };

  return (
    <>
      <Container maxWidth="md">
        <Paper variant="outlined" sx={{ mt: 5, p: 2 }}>
          <Header filterValue={filterValue} handleChange={handleChange}/>
          <TodoItems todoItems={todoItems}/>
          <TodoForm inputValue={inputValue} handleInput={handleInput} handleClick={handleClick}/>
        </Paper>
      </Container>
    </>
  );
}

export default App;
