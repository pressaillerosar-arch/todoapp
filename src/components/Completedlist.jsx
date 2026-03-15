import TaskItem from "./TaskItem";

function CompletedList({ tasks, onDelete }) {
  return (
    <div>
      <h2>Completed</h2>
      <ul>
        {tasks
          .filter((task) => task.isComplete)
          .map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              onDelete={onDelete}
            />
          ))}
      </ul>
    </div>
  );
}

export default CompletedList;
