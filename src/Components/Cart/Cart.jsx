import { useDispatch, useSelector } from "react-redux";
import { clearCart, removePerticularItem } from "../../Utils/cartSlice";
import { toast } from "react-toastify";
import { Footer } from "../Footer/Footer";

function Cart() {
  const cartItems = useSelector((store) => store.cart.items);
  console.log("store", cartItems);

  const dispatch = useDispatch();

  const clearItem = () => {
    dispatch(clearCart());
  };

  const removeSingleItem = (items) => {
    // console.log("removeSingleItem", items);
    dispatch(removePerticularItem(items));

    // toast remove notification
    toast.error(`Item removed from cart!!`, {
      position: "bottom-right",
      autoClose: 2000,
    });
  };

  // calculate total price if cart items
  const totalOfCart = cartItems.reduce((total, item) => {
    console.log("total", total);
    console.log("item", item.card.info.defaultPrice / 100);
    return total + ((item.card.info.price || item.card.info.defaultPrice) / 100);
  }, 0);

  return (
    <div className=" md:h-[100%] relative">
      <h1 className="text-[24px] text-center mt-[10px] mb-[10px] font-semibold text-[#3E4152] font-serif">
        CART
      </h1>

      {cartItems.length === 0 ? (
        <h1 className="text-center text-[30px] text-[#686B78] font-semibold mt-[20px] font-serif">
          Empty Cart!! Add your favorite One😋
        </h1>
      ) : (
        <button
          className="font-medium pl-[19px] pr-[19px] pb-[3px] pt-[3px] text-[#3E4152] md:ml-[345px] lg:ml-[715px] rounded-[8px] bg-[#f5f5f7] border border-red-500 font-serif"
          onClick={clearItem}
        >
          {" "}
          All Clear
        </button>
      )}
      {cartItems.length !== 0 && (
        <div className=" flex gap-[10px] md:ml-[610px] lg:ml-[1130px] pl-[10px] mr-[25px]">
        <span className="text-[26px] text-[#3E4152] font-serif ">Total:</span>
        <span className="font-medium text-[24px] text-[#3E4152]">₹{totalOfCart}</span>
    </div>
      )}
          

      <div className="md:w-[740px] m-auto mt-[20px] md:ml-[40px] mb-[70px] md:min-h-[42.9vh] lg:min-h-[42.9vh]  flex flex-col gap-[30px]">
        {cartItems &&
          cartItems.map((items, index) => (
            <div
              key={index}
              className="relative md:w-[100%] lg:w-[1100px] md:min-h-[310px] lg:ml-[180px] border border-[#686B78] border-opacity-50 rounded-[8px] shadow-md"
            >
              <div className="flex items-center gap-[20px] flex-col md:mt-[20px]">
                <h2 className="text-[17px] text-[#3E4152] font-semibold lg:ml-[-550px] md:ml-[-220px] md:w-[480px] md:text-[19px] font-serif">
                  {items.card.info.name}
                </h2>
                <p className=" text-[16px] lg:ml-[-1000px] md:ml-[-650px] md:mt-[-15px] md:text-[17px] font-medium text-[#686B78]">
                  ₹
                  {(items.card.info.price || items.card.info.defaultPrice) /
                    100}
                </p>
                <p className="lg:ml-[-440px] lg:w-[600px] md:ml-[-240px] md:w-[450px] text-[#686B78] md:text-[16px] font-serif md:mt-[-18px]">
                  {items.card.info.description}
                </p>
              </div>

              <div className="absolute h-[135px] top-[20px] right-[10px] md:top-[45px] md:right-[25px] rounded-[6px]">
                <img
                  className="lg:h-[135px] lg:w-[165px] md:w-[155px] md:h-[125px] rounded-[8px] "
                  src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${items.card.info.imageId}`}
                />
                <button
                  className="font-semibold font-serif md:text-[16px] md:mt-[-10px] md:ml-[38px] pl-[10px] pr-[10px] pb-[3px] border border-red-500 text-[#3E4152] bg-[#f5f5f7] rounded-[8px]"
                  onClick={() => removeSingleItem(items)}
                >
                  remove
                </button>
              </div>
            </div>
          ))}
      </div>
      <Footer/>
    
    </div>
  );
}

export { Cart };
