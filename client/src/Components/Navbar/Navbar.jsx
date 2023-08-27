import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className=" bg-richblue-200">
      <div className="flex h-14 items-center justify-around border-b-[1px]  border-b-richblack-700">
        <nav className="flex flex-row justify-start items-center gap-8">
          <Link to="/">Home</Link>
          <Link to="/about">About </Link>
        </nav>
        <div className="flex justify-evenly  items-center gap-8">
          <div className="flex gap-7">
            <Link to="/signup">
              <button className="border border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-richblack-100 rounded-md">
                Sign up
              </button>
            </Link>
            <Link to="/login">
              <button className="border border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-richblack-100 rounded-md">
                Log in
              </button>
            </Link>
          </div>
          <div className=" bg-richblack-300 h-[50px] w-[50px] rounded-full"></div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
