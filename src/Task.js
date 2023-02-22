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
    <div className="p-6 bg-[#fff] rounded-[5px] leading-normal mt-4 shadow-[0_4px_5px_0_rgb(0,0,0,0.1)]">
      <h3 className="text-lg text-[#c8781a]">{taskObj.title}</h3>
      <div className="text-xs pt-1">son teslim: <span className={(distanceInDays <= 3) ? "bg-[#ffd9d4]" : "bg-[#d4d7ff]"}>{DistanceToNow}</span></div>
      <p className="p-[0.5rem_0_0.75rem_0] text-[14px] text-[#444]">{taskObj.description}</p>
      <div>
        {taskObj.people.map((p) => (
          <span className="inline-block p-[5px_12px] text-sm border-solid border-[1px] border-[#ccc] mr-1 mt-1.5 rounded-[30px]" key={p}>{p}</span>
        ))}
      </div>
      {onComplete && <button className="block p-[8px_12px] ml-auto bg-[#fecc91] shadow-[0_4px_5px_0_rgb(0,0,0,0.05) rounded-[3px] border-0 cursor-pointer" onClick={() => onComplete(taskObj.id)}>Tamamlandı</button>}
    </div>
  );
};

export default Task;

