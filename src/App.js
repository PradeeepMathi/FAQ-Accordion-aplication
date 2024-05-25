import "./App.css";
import Faq from "./Components/Faq";

const data = [
  {
    id: 1,
    question: "what is React.js?",
    answer:
      "ReactJS is an open-source JavaScript library used to create user interfaces in a declarative and efficient way.",
  },
  {
    id: 2,
    question: "what is props in react?",
    answer:
      "React components use props to communicate with each other. Every parent component can pass some information to its child components by giving them props. Props might remind you of HTML attributes, but you can pass any JavaScript value through them, including objects, arrays, and functions.",
  },
  {
    id: 3,
    question: "what is hooks in react?",
    answer:
      "Hooks allow function components to have access to state and other React features. Because of this, class components are generally no longer needed.",
  },
];
function App() {
  return (
    <div className="App">
      <Faq data={data} />
    </div>
  );
}

export default App;
