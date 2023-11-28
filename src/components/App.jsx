import Navbar from "./Navbar/Navbar";
import TollgateSection from './Sections/TollgateSection'
import RouterSection from "./RouterSection/RouterSection";

const App = () => {
    return(
        <>
        <Navbar />
        <div className="display:none@>=md w:100% flex justify-content:space-evenly align-items:center py:15px px:8px">
            <a className="text-decoration:none font:13px cursor:pointer" href="/">UT Automation Summary</a>
            <a className="font:13px text-decoration:none cursor:pointer ml:1.2em" href="/work">Tollgate Performance</a>
            <a className="font:13px text-decoration:none cursor:pointer ml:1.2em " href="/about">Retailer Insights</a>
        </div>
        <div className="px:40px py:30px b:0.2px|solid|fade-70">
            <h2 className="color:sky-20">UT Automation Summary</h2>
        </div>
        <TollgateSection />
        <RouterSection />
        </>
    )
}

export default App;
