import React from "react";
import TopBanner from "./components/TopBanner/TopBanner";
import TopNavigation from "./components/TopNavigation/TopNavigation";
import ClassCourses from "./components/ClassCourses/ClassCourses";
import StatArea from "./components/StatArea/StatArea";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
    <TopNavigation />
    <TopBanner />
    <ClassCourses/>
    <StatArea/>
    <Footer/>
    </div>
  );
}

export default App;
