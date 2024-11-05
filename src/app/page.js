import AdsNum from "./components/AdsNum";
import CardList from "./components/CardList";
import DailyPrices from "./components/DailyPrices";
import FiltetBtn from "./components/FiltetBtn";
import MobileDailyPrice from "./components/MobileDailyPrice";
import NavBar from "./components/NavBar";
import PageTab from "./components/PageTab";
import Sidebar from "./components/Sidebar";

export default function Home() {
  return (
    <>
      <NavBar />
      <div className="lg:px-[104px] px-3 ">
        <PageTab />
        <AdsNum />
        <div className="flex gap-3">
          <Sidebar />
          <div className="lg:w-3/4">
            <DailyPrices />
            <MobileDailyPrice />
            <CardList />
          </div>
        </div>
      </div>
      <FiltetBtn />
    </>
  );
}
