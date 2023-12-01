import Header from "../../Components/header/Header";
import Posts from "../../Components/posts/Posts";
import Sidebar from "../../Components/sidebar/sidebar";
import "./home.css";

export default function Home() {
  return (
    <>
      <Header />
      <div className="home">
        <Posts />
        <Sidebar />
      </div>
    </>
  );
}
