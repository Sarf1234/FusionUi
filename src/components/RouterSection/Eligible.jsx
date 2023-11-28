import { useEffect, useState } from "react";
import { BarchartGrey } from "./Charts";
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

const Eligible = () => {
    const [count_dollar, setCD] = useState(true)
    const [cryptoData, setCryptoData] = useState([]);
    const [loading, setLoading] = useState(false)

    const apiMock = new MockAdapter(axios);

    useEffect(() => {
        // Mocking the API response for testing
        apiMock.onGet('https://api.example.com/data').reply(200, {
         key: [
            {name: "Kroger", width_prev: "70%", width_curr: "85%",cy:"852", py:"100"},
            {name: "Ahold", width_prev: "60%", width_curr: "85%",cy:"102", py:"500"},
            {name: "Safeway", width_prev: "50%", width_curr: "85%",cy:"300", py:"200"},
            {name: "C&S Wholesale", width_prev: "40%", width_curr: "85%",cy:"400", py:"100"},
            {name: "Schnucks", width_prev: "30%", width_curr: "85%",cy:"500", py:"900"},
            {name: "Wakefern", width_prev: "20%", width_curr: "85%",cy:"600", py:"200"},
        ],
        });

    
        // Fetch data from the API
        apiCall()
   
      }, []); 

      const apiCall = async () => {
        try {
          const response = await axios.get('https://api.example.com/data');
          console.log(response.data)
          setCryptoData(response.data.key); 
          setLoading(true);
        } catch (error) {
          console.log(error)
        }
      }
      

    let count_active = "active"
    let dollar_active = ""

    const handleCount = () => {
        setCD(true)
    }

    const handleDollar = () => {
        setCD(false)
    }

    if (count_dollar){
        count_active = "active"
        dollar_active = ""
    }
    else{
        count_active = ""
        dollar_active = "active"
    }

    let barValues = [
        {name: "Kroger", width_prev: "70%", width_curr: "85%"},
        {name: "Ahold", width_prev: "60%", width_curr: "85%"},
        {name: "Safeway", width_prev: "50%", width_curr: "85%"},
        {name: "C&S Wholesale", width_prev: "40%", width_curr: "85%"},
        {name: "Schnucks", width_prev: "30%", width_curr: "85%"},
        {name: "Wakefern", width_prev: "20%", width_curr: "85%"},
    ]

	return (
		<div>
            <div className='w:100% h:80px@>=md flex@>=md justify-content:space-between align-items:center px:1.5em py:20px@<md'>
                <h3 className="w:40%@>=md m:0 p:0 text-align:center@<md pb:15px@<md">Total Eligible Write Ons</h3>
                <div className="d:grid@<md grid-template-columns:1fr|1fr@<md flex@>=md justify-content:flex-end align-items:center w:60%@>=md">
                    <select id="tollgate" className="mt:5px mr:15px@>=md border-radiur:8px w:80%@<md px:20px py:8px font:12px">
                        <option value="" disabled selected hidden>Timeframe</option>
                        <option value="ytd">YTD</option>
                        <option value="yearly">Yearly</option>
                        <option value="monthly">Monthly</option>
                    </select>
                    <select id="customer" className="mt:5px mr:15px@>=md border-radiur:8px w:80%@<md px:20px py:8px font:12px">
                        <option value="" disabled selected hidden>Select Month</option>
                        <option value="January">January</option>
                        <option value="February">February</option>
                        <option value="March">March</option>
                        <option value="April">April</option>
                        <option value="May">May</option>
                        <option value="June">June</option>
                        <option value="July">July</option>
                        <option value="August">August</option>
                        <option value="September">September</option>
                        <option value="October">October</option>
                        <option value="November">November</option>
                        <option value="December">December</option>
                    </select>
                    <select id="customer" className="mt:5px mr:15px@>=md mt:25px@<md border-radiur:8px w:80%@<md px:20px py:8px font:12px">
                        <option value="" disabled selected hidden>Customer</option>
                        <option value="all">All</option>
                        <option value="kroger">Kroger</option>
                        <option value="ahold">Ahold</option>
                        <option value="safeway">Safeway</option>
                        <option value="cs-wholesale">C&S Wholesale</option>
                        <option value="schnucks">Schnucks</option>
                        <option value="wakefern">Wakefern</option>
                    </select>

                    <div className="mt:20px@<md w:100%@<md w:30% flex h:35px">
                        <button activeClass='active' className={`${count_active} text-align:center w:100% color:black text-decoration:none cursor:pointer px:10px py:8px border-radiur:8px bg:white b:0.2|solid|gray-60 font:12px`} onClick={handleCount}>Count</button>

                        <button className={`${dollar_active} text-align:center w:100% color:black text-decoration:none cursor:pointer px:10px py:8px border-radiur:8px b:0.2|solid|gray-60 font:12px`} onClick={handleDollar}>Dollars $</button>
                    </div>
                </div>
                
            </div>
            <div className="flex@>=md w:100% b:0.2|solid|gray-50 px:25px py:20px mx:10px my:10px">
                <div className="w:50%@>=md border-bottom:0.2px|solid|gray-60@<md border-right:0.2px|solid|gray-60@>=md px:30px">
                    <h3 className="m:0 p:0 py:8px text-align:center@<md pb:15px@<md">Current Year vs Previous Year</h3>
                    <div className="flex w:60%@>=md my:10px justify-content:flex-start align-items:center">
                        <div className="flex align-items:center">
                            <div className="w:18px h:18px bg:#39F mr:10px"></div>
                            <span className="font:12px">Current Year</span>
                        </div>
                        <div className="flex align-items:center ml:20px">
                            <div className="w:18px h:18px bg:#1B3D6D mr:10px"></div>
                            <span className="font:12px">Previous Year</span>
                        </div>
                    </div>
                    <div id="chart" className="pb:15px@<md mt:30px">
                        { loading ?
                            cryptoData?.map(e=>{
                                return(
                                    <div className="w:100% flex my:10px justify-content:flex-start align-items:center">
                                        <span className="w:18% f:14px">{e.name}</span>
                                        <div className={`bg:#1B3D6D w:${e.width_prev} h:50px flex align-items:center`}>
                                            <div className={`bg:#39F w:${e.width_curr} h:50%`}></div>
                                        </div>
                                        <div className="f:12px w:15% flex flex-direction:column align-items:flex-end ">CY: {e.cy}$XX<br/>PY: {e.py}$XX</div>
                                    </div>
                                )
                            })
                            : "laoding"
                        }
                    </div>
                </div>

                <div className="w:50%@>=md px:40px@>=md px:20px ml:40px@>=md ">
                    <div className="w:100% flex@>=md justify-content:space-between align-items:center mb:10px ">
                        <h3 className="w:60%@>=md m:0 p:0 py:8px mt:15px@<md text-align:center@<md">Total Write on Delta</h3>
                    </div>
                    <div id="chart">
                        <BarchartGrey />
                    </div>
                </div>
            </div>
        </div>
	);
}

export default Eligible;
