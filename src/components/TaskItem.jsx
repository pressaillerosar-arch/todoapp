import { Trash } from "lucide-react";
import { CheckCircle } from "lucide-react";

const iconSize = 16;

function TaskItem({ task, onDelete, onComplete }) {
  return (
    <li>
      <p>{task.title}</p>
      <p>{task.desc}</p>
      <button onClick={() => onDelete(task.id)}>
        <Trash color="red" size={iconSize} />
        Delete
      </button>
      {!task.isComplete && (
        <button onClick={() => onComplete(task.id)}>
          <CheckCircle color="green" size={iconSize} />
          Complete
        </button>
      )}
    </li>
  );
}

export default TaskItem;
