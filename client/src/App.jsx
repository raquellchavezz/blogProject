import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ListPosts from './components/ListPosts'


function App() {
    const [blogPosts, setBlogPosts] = useState([]); // array of objs of the blog posts i have 
    const [currentPostId, setCurrentPostId] = useState("");

  return (
    <div className="App">
      <MyNavBar />
      <ListPostså />

    </div>
  )
}

export default App
