import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import CompletedList from "./components/CompletedList";

function App() {
  const [taskList, setTaskList] = useState([]);

  function add(task) {
    const newTask = { ...task, id: uuidv4() };
    setTaskList((previous) => [...previous, newTask]);
  }

  function deleteTask(id) {
    setTaskList((previous) => previous.filter((t) => t.id !== id));
  }

  function complete(id) {
    const index = taskList.findIndex((t) => t.id === id);
    const updatedList = [...taskList];
    updatedList[index] = { ...updatedList[index], isComplete: true };
    setTaskList(updatedList);
  }

  return (
    <>
      <TaskForm onAdd={add} />
      <TaskList tasks={taskList} onDelete={deleteTask} onComplete={complete} />
      <CompletedList tasks={taskList} onDelete={deleteTask} />
    </>
  );
}

export default App;
