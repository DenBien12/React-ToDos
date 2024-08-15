import "./styles.css";
import Navbar from "./Navbar";
import Modal from "./Modal";
import TodoApp from "./components/TodoApp";

const App = () => {
  return (
    <div>
      <Navbar />
      <Modal />
      <TodoApp/>
    </div>
  );
};

export default App;
