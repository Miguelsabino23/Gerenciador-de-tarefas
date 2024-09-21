/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import { ChevronRightIcon, TrashIcon, Check } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

function Tasks({ tasks, onTaskClick, onDeleteTaskClick }) {
  const navigate = useNavigate();

  function onSeeDetailsClick(task) {
    const query = new URLSearchParams();
    query.set("title", task.title);
    query.set("description", task.description);
    navigate(`/task?${query.toString()}`);
  }
  return (
    <ul className='space-y-4 p-6 bg-slate-200 rounded-md shadow'>
      {tasks.map((task) => (
        <li key={task.id} className='flex gap-2'>
          <Button
            onClick={() => onTaskClick(task.id)}
            className={`bg-slate-400 text-left text-white p-2 rounded-md w-full flex gap-2 ${
              task.isCompleted && "line-through"
            }`}
          >
            {task.isCompleted && <Check />}
            {task.title}
          </Button>
          <Button onClick={() => onSeeDetailsClick(task)}>
            <ChevronRightIcon />
          </Button>
          <Button onClick={() => onDeleteTaskClick(task.id)}>
            <TrashIcon />
          </Button>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;
