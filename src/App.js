import { Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import './App.css';
import Header from './components/common/heading/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import CourseHome from './components/allcourses/CourseHome';
import Team from './components/team/Team';
import Price from './components/pricing/Price';
import Blog from './components/blog/Blog';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

function App() {
  return (
   <>   
   <Router>
    <Header />
    <Routes>
     <Route path='/' element={<Home />} exact></Route>
     <Route path='/Academy-Online-Education' element={<Home />} exact></Route>
     <Route path='/Academy-Online-Education-design' element={<Home />} exact></Route>
     <Route path='/about' element={<About />} exact></Route>
     <Route path='/courses' element={<CourseHome />} exact></Route>
     <Route path='/team' element={<Team />} exact></Route>
     <Route path='/pricing' element={<Price />} exact></Route>
     <Route path='/journal' element={<Blog />} exact></Route>
     <Route path='/contact' element={<Contact />} exact></Route>
    </Routes>
    <Footer />
   </Router>
   </>
  );
}

export default App;
