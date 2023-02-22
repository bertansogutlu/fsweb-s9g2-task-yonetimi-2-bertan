import React from "react";
import { formatDistanceToNow, differenceInDays } from 'date-fns';
import tr from 'date-fns/locale/tr'


const Task = ({ taskObj, onComplete }) => {

  const DistanceToNow = formatDistanceToNow(
    new Date(taskObj.deadline),
    { addSuffix: true, locale: tr },
  )

  const distanceInDays = differenceInDays(
    new Date(taskObj.deadline),
    new Date()
  )
  
  return (
    <div className="pt-6 bg-[#fff] rounded-[5px] leading-normal mt-4 shadow-[0_4px_5px_0_rgb(0,0,0,0.1)]">
      <h3>{taskObj.title}</h3>
      <div className="text-xs pt-1">son teslim: <span className={(distanceInDays <= 3) ? "bg-[#ffd9d4]" : "bg-[#d4d7ff]"}>{DistanceToNow}</span></div>
      <p>{taskObj.description}</p>
      <div>
        {taskObj.people.map((p) => (
          <span className="inline-block p-[5px_12px] text-sm border-solid border-[1px] border-[#ccc] mr-1 mb-1.5 rounded-[30px]" key={p}>{p}</span>
        ))}
      </div>
      {onComplete && <button onClick={() => onComplete(taskObj.id)}>Tamamlandı</button>}
    </div>
  );
};

export default Task;

