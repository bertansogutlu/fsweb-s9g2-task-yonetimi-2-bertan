import React from "react";
import { formatDistanceToNow } from 'date-fns';
import tr from 'date-fns/locale/tr'


const Task = ({ taskObj, onComplete }) => {

  return (
    <div className="task">
      <h3>{taskObj.title}</h3>
      <div className="deadline">son teslim: <span>{
        formatDistanceToNow(
          new Date(taskObj.deadline),
          { addSuffix: true, locale: tr },
        )
        }</span></div>
      <p>{taskObj.description}</p>
      <div>
        {taskObj.people.map((p) => (
          <span className="pill" key={p}>{p}</span>
        ))}
      </div>
      {onComplete && <button onClick={() => onComplete(taskObj.id)}>Tamamlandı</button>}
    </div>
  );
};

export default Task;

