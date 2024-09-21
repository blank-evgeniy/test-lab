import Home from "../sections/Home/Home";
import TaskPlan from "../sections/TaskPlan/TaskPlan";
import ThirdBlock from "../sections/ThirdBlock/ThirdBlock";
import "./styles/index.css";

const App = () => {
  return (
    <main>
      <Home />
      <TaskPlan />
      <ThirdBlock />
    </main>
  );
};

export default App;
