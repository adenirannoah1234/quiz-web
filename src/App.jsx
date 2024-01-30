import './App.css';
import Navbar from './components/navabr/Navbar';
import QuizQuestionForm from './pages/home/Home';

function App() {
  // const [count, setCount] = useState(0);

  return (
    <div>
      <Navbar />
      <QuizQuestionForm />
    </div>
  );
}

export default App;
