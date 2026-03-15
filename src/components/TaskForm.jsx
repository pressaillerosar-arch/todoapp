import { useState } from "react";
import { Plus } from "lucide-react";

const iconSize = 16;

function TaskForm({ onAdd }) {
  const [formData, setFormData] = useState({
    title: "",
    desc: "",
    isComplete: false,
  });

  function handleChange(event) {
    setFormData((previous) => ({
      ...previous,
      [event.target.name]: event.target.value,
    }));
  }

  function handleSubmit() {
    if (!formData.title.trim()) return;
    onAdd(formData);
    setFormData({ title: "", desc: "", isComplete: false });
  }

  return (
    <form>
      <input
        type="text"
        name="title"
        placeholder="Enter task"
        onChange={handleChange}
        value={formData.title}
      />
      <input
        type="text"
        name="desc"
        placeholder="Enter task description"
        onChange={handleChange}
        value={formData.desc}
      />
      <button type="button" onClick={handleSubmit}>
        <Plus color="green" size={iconSize} /> Ajouter
      </button>
    </form>
  );
}

export default TaskForm;
