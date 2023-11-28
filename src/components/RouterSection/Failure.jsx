import { useState } from "react";

function Failure() {
    const [radioData, setUserData] = useState(0);

    let valueRadioPosNeg = "checked"
    let valueRadioPos = ""
    let valueRadioNeg = ""

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

    let success_failure = <>success/failure</>

    if (radioData === 0) {
        success_failure = <>
            <div className="flex justify-content:space-evenly w:100% h:140px mb:30px">
                <div className="w:25% flex justify-content:center align-items:center color:gray-56 font:14px">No Deal ID</div>
                <div className="w:25% flex justify-content:center align-items:center color:white bg:#08A045 mr:2px font:14px">#%</div>
                <div className="w:25% flex justify-content:center align-items:center color:white bg:#CE3528 font:14px">#%</div>
                <div className="w:25% flex justify-content:center align-items:center color:gray-56 font:14px">Total XX</div>
            </div>

            <div className="flex justify-content:space-evenly w:100% h:140px">
                <div className="w:25% flex justify-content:center align-items:center color:gray-56 font:14px">No Deal ID</div>
                <div className="w:25% flex justify-content:center align-items:center color:white bg:#08A045 mr:2px font:14px">#%</div>
                <div className="w:25% flex justify-content:center align-items:center color:white bg:#CE3528 font:14px">#%</div>
                <div className="w:25% flex justify-content:center align-items:center color:gray-56 font:14px">Total XX</div>
            </div>
        </>

        valueRadioPosNeg = "checked"
        valueRadioPos = ""
        valueRadioNeg = ""
    }
    else if (radioData === 1){
        success_failure = <>
            <div className="flex justify-content:space-evenly w:100% h:140px mb:30px">
                <div className="w:25% flex justify-content:center align-items:center color:gray-56 font:14px">No Deal ID</div>
                <div className="w:25% flex justify-content:center align-items:center color:white bg:#08A045 mr:2px font:14px">#%</div>
                <div className="w:25% flex justify-content:center align-items:center color:white bg:rgb(172,176,189) font:14px">#%</div>
                <div className="w:25% flex justify-content:center align-items:center color:gray-56 font:14px">Total XX</div>
            </div>

            <div className="flex justify-content:space-evenly w:100% h:140px">
                <div className="w:25% flex justify-content:center align-items:center color:gray-56 font:14px">No Deal ID</div>
                <div className="w:25% flex justify-content:center align-items:center color:white bg:#08A045 mr:2px font:14px">#%</div>
                <div className="w:25% flex justify-content:center align-items:center color:white bg:rgb(172,176,189) font:14px">#%</div>
                <div className="w:25% flex justify-content:center align-items:center color:gray-56 font:14px">Total XX</div>
            </div>
        </>

        valueRadioPosNeg = ""
        valueRadioPos = "checked"
        valueRadioNeg = ""
    }
    else{
        success_failure = <>
            <div className="flex justify-content:space-evenly w:100% h:140px mb:30px">
                <div className="w:25% flex justify-content:center align-items:center color:gray-56 font:14px">No Deal ID</div>
                <div className="w:25% flex justify-content:center align-items:center color:white bg:rgb(172,176,189) mr:2px font:14px">#%</div>
                <div className="w:25% flex justify-content:center align-items:center color:white bg:#CE3528 font:14px">#%</div>
                <div className="w:25% flex justify-content:center align-items:center color:gray-56 font:14px">Total XX</div>
            </div>

            <div className="flex justify-content:space-evenly w:100% h:140px">
                <div className="w:25% flex justify-content:center align-items:center color:gray-56 font:14px">No Deal ID</div>
                <div className="w:25% flex justify-content:center align-items:center color:white bg:rgb(172,176,189) mr:2px font:14px">#%</div>
                <div className="w:25% flex justify-content:center align-items:center color:white bg:#CE3528 font:14px">#%</div>
                <div className="w:25% flex justify-content:center align-items:center color:gray-56 font:14px">Total XX</div>
            </div>
        </>

        valueRadioPosNeg = ""
        valueRadioPos = ""
        valueRadioNeg = "checked"
    }

	return (
		<div>
            <div className='w:100% h:80px@>=md flex@>=md justify-content:space-between align-items:center px:1.5em py:25px@<md'>
                <h3 className="w:50%@>=md text-align:center@<md m:0 p:0 pb:20px@<md">Tollgate Failure vs Success</h3>
                <div className="d:grid@<md grid-template-columns:1fr|1fr@<md flex@>=md justify-content:flex-end justify-content:space-evenly@<=md align-items:center w:50%@>=md ">
                    <select id="tollgate" className="mt:5px mr:15px@>=md border-radiur:8px w:80%@<md px:20px py:8px font:12px">
                        <option value="" disabled selected hidden>Tollgate</option>
                        <option value="rta-linking">RTA Linking</option>
                        <option value="2-way-match">2 Way Match</option>
                        <option value="event-id">EventID</option>
                        <option value="tactic-id-eligibility">Tactic ID Eligibility</option>
                    </select>
                    <select id="customer" className="mt:5px mr:15px@>=md border-radiur:8px w:80%@<md px:20px py:8px font:12px">
                        <option value="" disabled selected hidden>Customer</option>
                        <option value="all">All</option>
                        <option value="kroger">Kroger</option>
                        <option value="ahold">Ahold</option>
                        <option value="safeway">Safeway</option>
                        <option value="cs-wholesale">C&S Wholesale</option>
                        <option value="schnucks">Schnucks</option>
                        <option value="wakefern">Wakefern</option>
                    </select>

                    <div className="display:hidden@>=md"></div>

                    <div className="mt:20px@<md w:100%@<md w:35% flex h:35px">
                        <button activeClass='active' className={`${count_active} text-align:center w:100% color:black text-decoration:none cursor:pointer px:10px py:8px border-radiur:8px bg:white b:0.2|solid|gray-60 font:12px`} onClick={handleCount}>Count</button>

                        <button className={`${dollar_active} text-align:center w:100% color:black text-decoration:none cursor:pointer px:10px py:8px border-radiur:8px b:0.2|solid|gray-60 font:12px`} onClick={handleDollar}>Dollars $</button>
                    </div>
                </div>
                
            </div>
            <div className="flex@>=md w:100% b:0.2|solid|gray-50 px:25px py:20px my:10px">
                <div className="w:40%@>=md border-right:0.2px|solid|gray-60@>md border-bottom:0.2px|solid|gray-60@<md px:10px py:10px">
                    <h3 className="m:0 p:0 py:8px text-align:center@<md">Summary</h3>
                    <p className="font:12px text-align:center@<md">Data of: 10/11/23 @ 1:05PM CST</p>

                    <div className="w:90%@>=md flex justify-content:space-between h:5px px:5px my:30px">
                        <div className="bg:#08A045 w:48%"></div>
                        <div className="bg:#CE3528 h:100% w:48%"></div>
                    </div>

                    <div className="w:100% flex align-items:center">
                        <div className="w:50% px:20px py:10px">
                            <span className="py:10px font:12px">RTA Linked</span>
                            <h1 className="color:#08A045 font:42px my:15px">46,323</h1>
                            <div className="flex align-items:center justify-content:flex-start pl:15px">
                                <img src={require("./tria-up.png")} alt="logo" width="10px" />
                                <span className="color:#08A045 font:14px ml:10px">XXvs. D-1</span>
                            </div>
                        </div>
                        <div className="w:50% px:20px py:10px">
                            <span className="py:10px font:12px">No Deal ID</span>
                            <h1 className="color:#CE3528 font:42px my:15px">30,696</h1>
                            <div className="flex align-items:center justify-content:flex-start pl:15px">
                                <img src={require("./tria-down.png")} alt="logo" width="10px" />
                                <span className="color:#CE3528 font:14px ml:10px">XXvs. D-1</span>
                            </div>
                        </div>
                    </div>

                    <div className="w:90%@>=md flex justify-content:space-between h:5px px:5px mt:30px mb:12px">
                        <div className="bg:sky-20 h:100% w:48%"></div>
                        <div className="bg:sky-20 h:100% w:48%"></div>
                    </div>

                    <div className="w:100% flex align-items:center">
                        <div className="w:50% px:20px py:10px">
                            <span className="py:10px font:12px">Total RTA Linking</span>
                            <h1 className="font:42px color:sky-20 my:15px">77,019</h1>
                        </div>
                        <div className="w:50% px:20px py:10px">
                            <span className="py:10px font:12px">Total RTA Linking %</span>
                            <h1 className="font:42px color:sky-20 my:15px">60.14%</h1>
                        </div>
                    </div>
                </div>
                <div className="w:55%@>=md px:10px ml:40px@>=md py:10px">
                    <div className="w:100% flex justify-content:space-between align-items:center mb:10px py:15px@<md">
                        <h3 className="w:60%@>=md m:0 p:0 py:8px@>=md text-align:center@<md">Success vs Failure</h3>
                        <div className="w:40%@>=md justify-content:flex-end flex align-items:center">
                            <div className="flex items-center mb-4 justify-left mx:10px">
                                <input
                                id="Pos-Neg"
                                type="radio"
                                name="Pos-Neg"
                                value="Pos-Neg"
                                onClick={(e) =>
                                    setUserData(0)
                                }
                                checked={valueRadioPosNeg}
                                className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                                />
                                <label
                                for="Pos-Neg"
                                className="ml:4px block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                >
                                Pos/Neg
                                </label>
                            </div>
                            <div className="flex items-center mb-4 justify-left mx:10px">
                                <input
                                id="Pos"
                                type="radio"
                                name="Pos"
                                value="Pos"
                                onClick={(e) =>
                                    setUserData(1)
                                }
                                checked={valueRadioPos}
                                className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                                />
                                <label
                                for="Pos"
                                className="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 ml:4px"
                                >
                                Pos
                                </label>
                            </div>
                            <div className="flex items-center mb-4 justify-left mx:10px">
                                <input
                                id="Neg"
                                type="radio"
                                name="Neg"
                                value="Neg"
                                onClick={(e) =>
                                    setUserData(2)
                                }
                                checked={valueRadioNeg}
                                className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                                />
                                <label
                                for="Neg"
                                className="ml:4px block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                >
                                Neg
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="flex w:22% justify-content:space-between align-items:center mb:40px">
                        <div className="flex align-items:center">
                            <div className="w:18px h:18px bg:#08A045 mr:10px"></div>
                            <span className="font:12px">Success</span>
                        </div>
                        <div className="flex align-items:center ml:20px">
                            <div className="w:18px h:18px bg:#CE3528 mr:10px"></div>
                            <span className="font:12px">Failure</span>
                        </div>
                    </div>
                    {success_failure}
                </div>
            </div>
        </div>
	);
}

export default Failure;