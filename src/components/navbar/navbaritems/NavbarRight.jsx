import { IoIosSearch } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCartTotal } from "../../../redux/cartSlice";
import { useNavigate } from "react-router-dom";

const NavbarRight = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { itemCount } = useSelector((state) => state.carts);

  useEffect(() => {
    dispatch(getCartTotal());
  }, [dispatch, getCartTotal]);
  return (
    <div className="flex items-center gap-8 ">
      <div className="flex items-center border p-3 rounded-full bg-gray-200 ">
        <input
          className="bg-gray-200 outline-none"
          placeholder="Arama Yapınız..."
          type="text"
        />
        <IoIosSearch size={30} />
      </div>
      <CiHeart />
      <div onClick={() => navigate("CardPage")} className="relative">
        <div className="absolute -top-3 -right-3 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center">
          {itemCount}
        </div>
        <AiOutlineShoppingCart size={30} />
      </div>
    </div>
  );
};

export default NavbarRight;
