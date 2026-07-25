import "./App.css";

import BookDetails from "./components/BookDetails";
import BlogDetails from "./components/BlogDetails";
import CourseDetails from "./components/CourseDetails";

function App() {

  const showCourses = true;
  const showBooks = true;
  const showBlogs = true;

  return (
    <div className="container">

      {showCourses && <CourseDetails />}

      {showBooks ? <BookDetails /> : null}

      {showBlogs && <BlogDetails />}

    </div>
  );

}

export default App;