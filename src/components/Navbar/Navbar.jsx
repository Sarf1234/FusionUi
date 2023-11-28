
function Navbar() {

	return (
		<header className='w:100% h:70px flex align-items:center px:1em bg:sky-20 color:white'>
			<div className="w:15% w:70%@<md cursor:pointer flex justify-content:space-evenly align-items:center">
				<img src={require("./Logo_main.png")} alt="logo" width="28px" />
				<h2 className="m:0 p:0 mr:10px">KH Fusion</h2>
			</div>
			<nav className="w:55% flex justify-content:flex-start align-items:center color:white display:none@<md">
                <a className="ml:0.5em color:white text-decoration:none font:16px cursor:pointer" href="/">UT Automation Summary</a>
                <a className="font:13px cursor:pointer ml:1.2em color:white text-decoration:underline" href="/work">Tollgate Performance</a>
                <a className="font:13px cursor:pointer ml:1.2em color:white text-decoration:underline" href="/about">Retailer Insights</a>
            </nav>
            <nav className="w:30%@>=md w:100%@<md flex justify-content:flex-end">
				<div className="mr:25px">
					<i class="fa-solid fa-user"></i>
					<a className="cursor:pointer ml:5px color:white text-decoration:none font:14px" href="/skills">Profile</a>
				</div>
                <div>
					<i class="fa-solid fa-arrow-right-from-bracket" style={{"color": "#ffffff"}}></i>
					<a className="cursor:pointer ml:5px color:white text-decoration:none font:14px" href="/contact">Log Out</a>
				</div>
            </nav>
		</header>
	);
}

export default Navbar;