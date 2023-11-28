import { BarchartGrayValid, PieChart, PieChart_Green_Grey, PieChart_Red_Grey, BarchartGreen, BarchartRed } from "./Charts";
import { useState } from "react";

function Valid() {
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

    const [radioData, setUserData] = useState(0);

    let valueRadioPosNeg = "checked"
    let valueRadioPos = ""
    let valueRadioNeg = ""

    let pie_value = <>pos/neg</>

    if (radioData === 0) {
        pie_value = <PieChart />

        valueRadioPosNeg = "checked"
        valueRadioPos = ""
        valueRadioNeg = ""
    }
    else if (radioData === 1){
        pie_value = <PieChart_Green_Grey />

        valueRadioPosNeg = ""
        valueRadioPos = "checked"
        valueRadioNeg = ""
    }
    else if (radioData === 2){
        pie_value = <PieChart_Red_Grey />

        valueRadioPosNeg = ""
        valueRadioPos = ""
        valueRadioNeg = "checked"
    }

    const [radioDataBar, setUserDataBar] = useState(3);

    let valueRadioBarPosNeg = "checked"
    let valueRadioBarPos = ""
    let valueRadioBarNeg = ""

    let bar_value_left = <>pos/neg</>
    let bar_value_right = <>pos/neg</>

    if (radioDataBar === 3) {
        bar_value_left = <BarchartGreen />
        bar_value_right = <BarchartRed />

        valueRadioBarPosNeg = "checked"
        valueRadioBarPos = ""
        valueRadioBarNeg = ""
    }
    else if (radioDataBar === 4){
        bar_value_left = <BarchartGreen />
        bar_value_right = <BarchartGrayValid />

        valueRadioBarPosNeg = ""
        valueRadioBarPos = "checked"
        valueRadioBarNeg = ""
    }
    else if (radioDataBar === 5){
        bar_value_left = <BarchartGrayValid />
        bar_value_right = <BarchartRed />

        valueRadioBarPosNeg = ""
        valueRadioBarPos = ""
        valueRadioBarNeg = "checked"
    }

	return (
		<div>
            <div className='w:100% h:80px@>=md flex@>=md justify-content:space-between align-items:center px:1.5em py:20px@<md'>
                <h3 className="w:40%@>=md m:0 p:0 text-align:center@<md pb:15px@<md">Valid vs. Invalid Deductions</h3>
                <div className="d:grid@<md grid-template-columns:1fr|1fr@<md flex@>=md justify-content:flex-end align-items:center w:60%@>=md">
                    <select id="tollgate" className="mt:5px mr:15px@>=md w:80%@<md border-radiur:8px px:20px py:8px font:12px">
                        <option value="" disabled selected hidden>Timeframe</option>
                        <option value="ytd">YTD</option>
                        <option value="yearly">Yearly</option>
                        <option value="monthly">Monthly</option>
                    </select>
                    <select id="customer" className="mt:5px mr:15px@>=md w:80%@<md border-radiur:8px px:20px py:8px font:12px">
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
                    <select id="customer" className="mt:5px mr:15px@>=md mt:25px@<md w:80%@<md border-radiur:8px px:20px py:8px font:12px">
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
            <div className="flex@>=md w:100% b:0.2|solid|gray-50 px:25px py:20px mx:10px@>=md my:10px">
                <div className="w:40%@>=md pb:25px@<md border-bottom:0.2px|solid|gray-60@<md border-right:0.2px|solid|gray-60@>=md px:10px">
                    <div className="w:100% flex justify-content:space-between align-items:center mb:10px">
                        <h3 className="m:0 p:0 py:8px text-align:center@<md pb:15px@<md">Total Deductions</h3>
                        <div className="w:50%@>=md justify-content:flex-end flex align-items:center">
                            <div className="flex items-center mb-4 justify-left mx:10px">
                                <input
                                id="Pos-Neg-Pie"
                                type="radio"
                                name="Pos-Neg-Pie"
                                value="Pos-Neg-Pie"
                                onClick={(e) =>
                                    setUserData(0)
                                }
                                checked={valueRadioPosNeg}
                                className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                                />
                                <label
                                for="Pos-Neg-Pie"
                                className="ml:4px block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                >
                                Pos/Neg
                                </label>
                            </div>
                            <div className="flex items-center mb-4 justify-left mx:10px">
                                <input
                                id="Pos-Pie"
                                type="radio"
                                name="Pos-Pie"
                                value="Pos-Pie"
                                onClick={(e) =>
                                    setUserData(1)
                                }
                                checked={valueRadioPos}
                                className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                                />
                                <label
                                for="Pos-Pie"
                                className="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 ml:4px"
                                >
                                Pos
                                </label>
                            </div>
                            <div className="flex items-center mb-4 justify-left mx:10px">
                                <input
                                id="Neg-Pie"
                                type="radio"
                                name="Neg-Pie"
                                value="Neg-Pie"
                                onClick={(e) =>
                                    setUserData(2)
                                }
                                checked={valueRadioNeg}
                                className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                                />
                                <label
                                for="Neg-Pie"
                                className="ml:4px block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                >
                                Neg
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="flex w:45%@>=md justify-content:flex-start align-items:center mb:40px">
                        <div className="flex align-items:center">
                            <div className="w:18px h:18px bg:#08A045 mr:10px"></div>
                            <span className="font:12px">Valid</span>
                        </div>
                        <div className="flex align-items:center ml:20px">
                            <div className="w:18px h:18px bg:#CE3528 mr:10px"></div>
                            <span className="font:12px">Invalid</span>
                        </div>
                    </div>
                    <div id="chart" className="w:70%@>=md flex@<md justify-content:center px:20px">
                        {pie_value}
                    </div>
                </div>
                
                <div className="w:55%@>=md px:10px ml:40px@>=md">
                    <div className="w:100% flex justify-content:space-between align-items:center mb:10px">
                        <h3 className="w:50%@>=md w:50% font:18px m:0 mt:15px@<md p:0 py:8px pb:15px@<md">Valid vs. Invalid Deductions by Customer</h3>
                        <div className="w:40%@>=md justify-content:flex-end flex align-items:center">
                            <div className="flex items-center mb-4 justify-left mx:10px">
                                <input
                                id="Pos-Neg-Bar"
                                type="radio"
                                name="Pos-Neg-Bar"
                                value="Pos-Neg-Bar"
                                onClick={(e) =>
                                    setUserDataBar(3)
                                }
                                checked={valueRadioBarPosNeg}
                                className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                                />
                                <label
                                for="Pos-Neg-Bar"
                                className="ml:4px block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                >
                                Pos/Neg
                                </label>
                            </div>
                            <div className="flex items-center mb-4 justify-left mx:10px">
                                <input
                                id="Pos-Bar"
                                type="radio"
                                name="Pos-Bar"
                                value="Pos-Bar"
                                onClick={(e) =>
                                    setUserDataBar(4)
                                }
                                checked={valueRadioBarPos}
                                className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                                />
                                <label
                                for="Pos-Bar"
                                className="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 ml:4px"
                                >
                                Pos
                                </label>
                            </div>
                            <div className="flex items-center mb-4 justify-left mx:10px">
                                <input
                                id="Neg-Bar"
                                type="radio"
                                name="Neg-Bar"
                                value="Neg-Bar"
                                onClick={(e) =>
                                    setUserDataBar(5)
                                }
                                checked={valueRadioBarNeg}
                                className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                                />
                                <label
                                for="Neg-Bar"
                                className="ml:4px block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                >
                                Neg
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="flex w:30% my:10px justify-content:flex-start align-items:center">
                        <div className="flex align-items:center">
                            <div className="w:18px h:18px bg:#08A045 mr:10px"></div>
                            <span className="font:12px">Valid</span>
                        </div>
                        <div className="flex align-items:center ml:20px">
                            <div className="w:18px h:18px bg:#CE3528 mr:10px"></div>
                            <span className="font:12px">Invalid</span>
                        </div>
                    </div>
                    <div id="chart" className="w:100% flex justify-content:space-evenly@>=md">
                        {bar_value_left}
                        {bar_value_right}
                    </div>
                </div>
            </div>
        </div>
	);
}

export default Valid;