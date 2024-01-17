import TaskBoard from "./Tasks/TaskBoard";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";

export default function App() {
  return (
    <div className="bg-[#191D26] font-[Inter] text-white">
      <Header />
      <div className="flex flex-col justify-center items-center">
        <Hero />
        {/* <SearchBox /> */}
        <TaskBoard />
      </div>

      <Footer />
    </div>
  );
}
