import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import Failure from './Failure';
import Eligible from './Eligible';
import Valid from './Valid';

function RouterSection() {
	return (
        <div className="mx:10px my:25px b:0.2px|solid|grey border-radius:8px py:20px px:15px">
            <BrowserRouter>
            <div className='w:100% flex justify-content:space-evenly border-radius:5px b:0.2px|solid|grey'>
                <div className='w:100% flex flex-direction:column align-items:center b:0.1px|solid|gray-60 justify-content:center'>
                    <NavLink activeClass='active' className='flex align-items:center justify-content:center text-align:center w:100% h:100% color:black text-decoration:none cursor:pointer px:1.2em py:0.4em font:16px font:14px@<md' to='/'>Leading Causes of Failure by Tollgate</NavLink>
                </div>

                <div className='w:100% flex flex-direction:column align-items:center justify-content:center b:0.1px|solid|gray-60'>
                    <NavLink className='text-align:center flex align-items:center justify-content:center h:100% w:100% color:black text-decoration:none cursor:pointer px:1.2em font:16px py:0.4em font:14px@<md' to='/eligible'>Total Write Ons</NavLink>
                </div>

                <div className='w:100% flex flex-direction:column align-items:center justify-content:center b:0.1px|solid|gray-60'>
                    <NavLink className='w:100% h:100% text-align:center flex align-items:center justify-content:center color:black text-decoration:none cursor:pointer px:1.2em font:16px py:0.4em font:14px@<md' to='/valid'>Invalid vs Valid Deductions</NavLink>
                </div>
            </div>

            <Routes>
                <Route index path='/' element={<Failure />}/>
                <Route path='/eligible' element={<Eligible />}/>
                <Route path='/valid' element={<Valid />}/>
            </Routes>
            </BrowserRouter>
        </div>
        
	);
}

export default RouterSection;