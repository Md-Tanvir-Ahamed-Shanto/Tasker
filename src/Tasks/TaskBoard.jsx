import { useState } from "react";
import SearchBox from "../components/SearchBox";
import TaskList from "../components/TaskList";
import TaskAction from "./TaskAction";

const TaskBoard = () => {
  const defaultTask = {
    id: crypto.randomUUID(),
    title: "Hello Word",
    description: "Hello i am md tanvir ahamed shanto ",
    tags: ["Hello", "hi"],
    priority: "High",
    isFavourite: true,
  };
  // eslint-disable-next-line no-unused-vars
  const [tasks, setTasks] = useState([defaultTask]);
  return (
    <>
      <section className="mb-20" id="tasks">
        <div className="container">
          {/* <!-- Search Box --> */}
          <div className="p-2 flex justify-end">
            <SearchBox />
          </div>
          {/* <!-- Search Box Ends --> */}
          <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
            <TaskAction />
            <TaskList tasks={tasks} />
          </div>
        </div>
      </section>
    </>
  );
};

export default TaskBoard;
