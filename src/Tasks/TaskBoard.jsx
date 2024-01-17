import SearchBox from "../components/SearchBox";
import TaskList from "../components/TaskList";
import TaskAction from "./TaskAction";

const TaskBoard = () => {
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
            <TaskList />
          </div>
        </div>
      </section>
    </>
  );
};

export default TaskBoard;
