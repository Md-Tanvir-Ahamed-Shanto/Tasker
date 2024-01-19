import { useState } from "react";
import SearchBox from "../components/SearchBox";
import TaskList from "../components/TaskList";
import AddTaskModel from "./AddTaskModel";
import NoTaskFound from "./NoTaskFound";
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
  const [showAddTask, setShowAddTask] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [updateToTask, setUpdateToTask] = useState(null);

  function handleAddTask(newTask, isAdd) {
    if (isAdd) {
      setTasks([...tasks, newTask]);
    } else {
      setTasks(
        tasks.map((task) => {
          if (task.id == newTask.id) {
            return newTask;
          }
          return task;
        })
      );
    }
    setShowAddTask(false);
  }
  function handleUpdateTask(task) {
    setUpdateToTask(task);
    // console.log(task);
    setShowAddTask(true);
  }
  function handleDeleteTask(taskId) {
    const afterDeleteTask = tasks.filter((task) => task.id !== taskId);
    setTasks(afterDeleteTask);
  }
  function handleDeleteAll() {
    tasks.length = 0;
    setTasks([...tasks]);
  }
  function handleFavourite(taskId) {
    const taskIndex = tasks.findIndex((task) => task.id === taskId);
    const newTask = [...tasks];
    newTask[taskIndex].isFavourite = !newTask[taskIndex].isFavourite;
    setTasks(newTask);
  }
  function closeTaskBoard() {
    setShowAddTask(false);
    setUpdateToTask(null);
  }
  function handleSearch(search) {
    console.log(search);
    let taskslist = [...tasks];
    if (search) {
      let searchList = tasks.filter((task) =>
        task.title.toLowerCase().includes(search.toLowerCase())
      );
      setTasks([...searchList]);
    } else {
      setTasks([...taskslist]);
    }
  }

  return (
    <>
      <section className="mb-20" id="tasks">
        <div className="container">
          {showAddTask && (
            <AddTaskModel
              onSave={handleAddTask}
              updateTask={updateToTask}
              onClose={closeTaskBoard}
            />
          )}
          {/* <!-- Search Box --> */}
          <div className="p-2 flex justify-end">
            <SearchBox onSearch={handleSearch} />
          </div>
          {/* <!-- Search Box Ends --> */}
          <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
            <TaskAction
              onAddTask={() => setShowAddTask(true)}
              onDeleteAll={handleDeleteAll}
            />
            {tasks.length > 0 ? (
              <TaskList
                tasks={tasks}
                onEdit={handleUpdateTask}
                onDelete={handleDeleteTask}
                onFav={handleFavourite}
              />
            ) : (
              <NoTaskFound />
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default TaskBoard;
