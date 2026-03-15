import TaskItem from "./TaskItem";

function TaskList({ tasks, onDelete, onComplete }) {
  return (
    <div>
      <h2>To do</h2>
      <ul>
        {tasks
          .filter((task) => !task.isComplete)
          .map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              onDelete={onDelete}
              onComplete={onComplete}
            />
          ))}
      </ul>
    </div>
  );
}

export default TaskList;
