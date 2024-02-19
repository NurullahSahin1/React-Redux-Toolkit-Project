import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getCartTotal } from "../redux/cartSlice";
import CardComponent from "../components/CARD/CardComponent";

const CardPage = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const { carts, totalAmount, itemCount } = useSelector((state) => state.carts);

  console.log(carts, totalAmount, "carts");

  useEffect(() => {
    dispatch(getCartTotal());
  }, [dispatch]);
  return (
    <div>
      {carts?.length > 0 ? (
        <div>
          {carts?.map((cart, i) => (
            <CardComponent key={i} cart={cart} />
          ))}
          <div className="flex items-center justify-end text-2xl">
            TOPLAM-TUTAR{" "}
            <span className="font-bold text-3xl ml-2">{totalAmount} TL</span>
          </div>
        </div>
      ) : (
        <div>Kartınız Boş</div>
      )}
    </div>
  );
};

export default CardPage;
