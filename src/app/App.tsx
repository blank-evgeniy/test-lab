import Home from "../sections/Home/Home";
import Reviews from "../sections/Reviews/Reviews";
import TaskPlan from "../sections/TaskPlan/TaskPlan";
import ThirdBlock from "../sections/ThirdBlock/ThirdBlock";
import "./styles/index.css";

const App = () => {
  return (
    <main>
      <Home />
      <TaskPlan />
      <ThirdBlock />
      <Reviews />
    </main>
  );
};

export default App;
