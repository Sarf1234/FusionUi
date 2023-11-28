import { useState } from "react"

function TollgateSection() {

    const values_options = [
        {heading: 'Eligability'},
        {heading: 'RTA Linking'},
        {heading: '2 Way Match'},
        {heading: 'Event ID'},
        {heading: 'Tactic ID Eligibility'},
    ]

    const [count_dollar, setCD] = useState(true)

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

	return (
        <div>
        <div className='w:100% h:80px@>=md flex@>=md justify-content:space-between align-items:center px:1.5em py:15px@<md'>
			<h3 className="w:50% w:100%@<md m:0 p:0 pb:20px@<md text-align:center@<md">Tollgate Automation for All Customers</h3>
            <div className="d:grid@<md grid-template-columns:1fr|1fr@<md flex@>=md justify-content:flex-end justify-content:center@<md align-items:center w:50% w:100%@<md">
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

                <div className="display:hidden@>=md"></div>

                <div className="mt:20px@<md w:35% w:100%@<md">
                    <div className="mt:20px@<md w:100%@<md flex h:35px">
                        <button activeClass='active' className={`${count_active} text-align:center w:100% color:black text-decoration:none cursor:pointer px:10px py:8px border-radiur:8px bg:white b:0.2|solid|gray-60 font:12px`} onClick={handleCount}>Count</button>

                        <button className={`${dollar_active} text-align:center w:100% color:black text-decoration:none cursor:pointer px:10px py:8px border-radiur:8px b:0.2|solid|gray-60 font:12px`} onClick={handleDollar}>Percentage %</button>
                    </div>
                </div>
            </div>
		</div>

        <div className='w:100% mt:15px@<md d:grid@<md grid-template-columns:1fr|1fr@<md flex@>=md justify-content:space-between align-items:center px:1em'>
            {values_options.map(e=>{
                return(
                    <div className="bg:sky-20 mb:20px@<md color:white px:10px py:8px border-radius:8px mx:10px">
                        <h4 className="py:15px">{e.heading}</h4>
                        <hr></hr>
                        <div className="flex justify-content:space-between align-items:center color:rgb(11,229,97)">
                            <div className="px:10px py:10px h:52px@>=md flex justify-content:space-between flex-direction:column border-right:0.2px|solid|fade-70">
                                <h6 className="m:0px p:0px">0.0% of Total</h6>
                                <div className="flex justify-content:space-evenly align-items:center mt:8px">
                                    <i class="fa-solid fa-caret-up" style={{"color": "#ffffff"}}></i>
                                    <span className="color:white font:12px">00.00%</span>
                                </div>
                            </div>
                            <div className="px:10px py:10px h:52px@>=md flex flex-direction:column justify-content:space-between">
                                <h6 className="m:0px p:0px">0.0% of Previous</h6>
                                <div className="flex justify-content:space-evenly align-items:center mt:8px">
                                    <i class="fa-solid fa-caret-up" style={{"color": "#ffffff"}}></i>
                                    <span className="color:white font:12px">00.00%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
        </div>
	);
}

export default TollgateSection;