import { useDispatch } from "react-redux";
import { removeFromCart } from "../../redux/cartSlice";

const CardComponent = ({ cart }) => {
  const dispatch = useDispatch();
  return (
    <div className="my-5 flex items-center justify-between">
      <img
        className="w-[150px] h-[150px] object-cover"
        src={cart?.image}
        alt=""
      />
      <div className="w-[476px]">
        <div className="text-xl">{cart?.title}</div>
        <div>{cart?.description}</div>
      </div>
      <div className="font-bold text-2xl">
        {cart?.price} TL ({cart?.quantity})
      </div>
      <div
        onClick={() => dispatch(removeFromCart(cart?.id))}
        className="bg-red-500 text-white w-[150px] h-16flex items-center justify-center text-2xl text-center p-2 cursor-pointer rounded-md"
      >
        Ürünü Sil
      </div>
    </div>
  );
};

export default CardComponent;
