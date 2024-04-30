import "./App.css";
import DetailPropertyMain from "./DetailProperty/DetailPropertyMain/DetailPropertyMain";
import Homepage from "./Home/HomePage/Homepage";
import ListingMain from "./Listings/ListingMain/ListingMain";
import AboutUsMain from "./AboutUs/AboutUsMain/AboutUsMain"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyContext from "./context/context";
import { useState } from "react";
import ContactUsMain from "./ContactUs/ContactUsMain/ContactUsMain";
import FaqsMain from "./Faqs/FaqsMain/FaqsMain";
import BlogMain from "./Blog/BlogMain/BlogMain";
import BlogRecentArticles from "./Blogs/ResentArticals/ResentArticalsMain/BlogRecentArticles";
import BlogRecentlyArticlesDetailMain from "./BlogResentArticalDetail/BlogResentArticalDetailMain/BlogResentArticalDetailMain"
function App() {
  const [detailPropertyData,setDetailPropertyData] = useState([])
  const [resentArticalData,setResentArticalData] = useState([])
  return (
    <>
      <MyContext.Provider value={{detailPropertyData,resentArticalData,setDetailPropertyData,setResentArticalData}}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="listing" element={<ListingMain />} />
            <Route path="detailProperty" element={<DetailPropertyMain />} />
            <Route path="aboutUs" element={<AboutUsMain />} />
            <Route path="/contact" element={<ContactUsMain />}/>
            <Route path="/faqs" element={<FaqsMain />}/>
            <Route path="/blog" element={<BlogMain />}/>
            <Route path="/resent-articals" element={<BlogRecentArticles />} />
            <Route path="/resent-artical-detail" element={<BlogRecentlyArticlesDetailMain />}/>
          </Routes>
        </BrowserRouter>
      </MyContext.Provider>
    </>
  );
}

export default App;
