import { useEffect } from "react";
import logo_url from "../../Utils/contents.js";
import { Link } from "react-router-dom";
import { RiSearchLine } from "react-icons/ri";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
// import { UserContext } from "../../Utils/UserContext.js";

function Header() {
  // const [btnLoginLogout, setBtnLoginLogout] = useState("LogIn");

  // const loginData = useContext(UserContext);

  // if no dependency array => useEffect is called on every render
  // if dependency array is empty = [] => useEffect is called on initial render(once)
  // if depencency arry is [btnLoginLogout] => useEffect called everytime btnLoginLogout is updated
  useEffect(() => {
    // console.log("Button entered");
  }); //[btnLoginLogout]

  // subscribing to the store using a selector
  const cartItems = useSelector((store) => store.cart.items);
  // console.log("cartItems",cartItems);

  return (
    <nav className="sticky top-0 z-50 shadow-lg mt-4  flex justify-between items-center  md:w-[100%] bg-[#fff]">
      <div>
        <img
          className="md:ml-[50px] lg:ml-[140px] h-20 ml-32"
          src={logo_url}
          alt="Logo Png"
        />
      </div>

      <div className=" flex justify-between items-center mr-[100px] md:mr-[50px] lg:mr-[140px]">
        <ul className=" flex justify-center items-center  md:gap-[40px] lg:gap-[65px] font-serif md:w-[470px] md:mr-[-28px]">
          <Link
            className="text-[#3E4152] text-[26px] font-medium hover:text-red-500 hover:scale-[1.1] font-serif"
            to={"/"}
          >
            Home
          </Link>

          <div className="flex items-center font-serif">
            <Link
              className="text-[#3E4152] text-[26px] font-medium hover:text-red-500 flex items-center gap-[20px] md:gap-[13px] lg:gap-[15px] hover:scale-[1.1] font-serif"
              to={"/search"}
            >
              <RiSearchLine className="flex font-serif" />
              Search
            </Link>
          </div>

          <Link
            className="text-[#3E4152] text-[26px] font-medium hover:text-red-500 hover:scale-[1.1] font-serif"
            to={"/help"}
          >
            Help
          </Link>

          <Link
            className="flex gap-[8px] items-center text-[#3E4152] text-[22px] font-normal hover:scale-[1.1] md:h-[50px] md:w-[40px] relative"
            to={"/cart"}
          >
            <FaShoppingCart className="relative flex text-[26px] hover:text-red-500 hover:scale-[1.1]" />
            <div className="absolute md:top-[-5px] md:right-[-1px] lg:top-[-7px] lg:right-[-8px] bg-green-400 rounded-[10px] h-[25px] w-[25px] flex justify-center items-center text-center text-[18px]">
              {cartItems.length}
            </div>
          </Link>

          {/* <button className="text-xl font-medium bg-red-600 py-1 px-2 rounded text-white hover:bg-red-500" onClick={() => {
                        btnLoginLogout === "LogIn" ? setBtnLoginLogout("LogOut") : setBtnLoginLogout("LogIn")
                    }}>
                       {btnLoginLogout}
                    </button> */}
        </ul>
      </div>
    </nav>
  );
}

export { Header };
