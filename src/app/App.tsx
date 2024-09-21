import Form from "../sections/FormSection/FormSection";
import Home from "../sections/Home/Home";
import InfoBlock from "../sections/InfoBlock/InfoBlock";
import Qeustions from "../sections/Qeustions/Qeustions";
import Reviews from "../sections/Reviews/Reviews";
import TaskPlan from "../sections/TaskPlan/TaskPlan";
import ThirdBlock from "../sections/ThirdBlock/ThirdBlock";
import Footer from "../widgets/Footer/Footer";
import "./styles/index.css";

const App = () => {
  return (
    <main>
      <Home />
      <TaskPlan />
      <ThirdBlock />
      <Reviews />
      <Qeustions />
      <InfoBlock />
      <Form />
      <Footer />
    </main>
  );
};

export default App;
