import { Mail } from "./pages/Mail";
import { Route, Routes } from "react-router";
import { WriteButton } from "./components/Buttons/WriteButton/WriteButton";
import { Navbar } from "./components/Navbar";
import { PanelMail } from "./pages/PanelMail";
import { FeaturedMails } from "./pages/FeaturedMails";
import { ImportantMails } from "./pages/ImportantMails";
import { DeleteMails } from "./pages/deleteMails";
import { SendMails } from "./pages/SendMails";
import { Header } from "./components/Header/Header";

function App() {
  return (
    <>
      <Header />
      <div className="flex h-[calc(100vh-4rem)] w-full bg-[#131314]">
        <aside className="flex flex-col w-[240px] max-[592px]:w-[60px] bg-[#131314]">
          <WriteButton />
          <Navbar />
        </aside>
        <main className="flex-1 h-full bg-[#131314] px-7 pb-4 overflow-hidden">
          <Routes>
            <Route path="/" element={<PanelMail />} />
            <Route path="/inbox" element={<Mail />} />
            <Route path="/destacados" element={<FeaturedMails />} />
            <Route path="/eliminados" element={<DeleteMails />} />
            <Route path="/importantes" element={<ImportantMails />} />
            <Route path="/enviados" element={<SendMails />} />
          </Routes>
        </main>
      </div>
    </>
  );
}

export default App;
