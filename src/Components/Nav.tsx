
function Nav() {
  return (
    <div className="font-sans bg-primary h-24">
        <div className="flex px-10 p-5 items-center justify-between">
        <nav className="flex items-center gap-3">
            <a className="text-white font-bold text-2xl mr-5 ">Lead Angles</a>
            <a className="text-gray-50 text-md font-semibold" href="#">Products</a>
            <a className="text-gray-50 text-md font-semibold" href="#">Pricing</a>
            <a className="text-gray-50 text-md font-semibold" href="#">Resources</a>
        </nav>
        <nav className="flex items-center gap-3">
            <button className="text-gray-50 text-md">Sign In</button>            
            <button className="text-sm border border-gray-50 bg-gray-50 text-primary p-3 rounded-md font-normal">Get Started</button>            
        </nav>
        </div>
    </div>
  )
}

export default Nav
