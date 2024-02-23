import { MdClose } from "react-icons/md";
import { FaTrashAlt } from "react-icons/fa";
// import { useCart } from "../../context/CartContext";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, selectCartItems } from "../../redux/slices/cartSlice";

// CartSidebar
function CartSidebar({ isCartOpen, setCartOpen }) {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  // const { cartItems, removeFromCart } = useCart();
  const handleToggleSidebar = () => {
    setCartOpen(!isCartOpen);
  };

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart(id));
  };
  return (
    <>
      <div
        className={` inset-0 overflow-hidden ${
          isCartOpen ? "pointer-events-auto" : ""
        }`}
      >
        {/* Sidebar */}
        <div
          className={`fixed inset-y-0 right-0 w-1/5 z-40 bg-gray-800 text-white transition-transform transform p-3 ${
            isCartOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Toggle Button */}
          <button onClick={handleToggleSidebar}>
            <MdClose size={30} />
          </button>
          <div className="text-center font-semibold text-2xl mt-5 mb-8">
            {/* Sidebar header */}
            <h2>Shopping Cart</h2>
          </div>
          {/* Main Content */}
          <div className="text-center font-medium text-xl">
            {cartItems.length <= 0 && "There is no items in the cart"}
          </div>
          {cartItems.map((product, index) => (
            <div
              className="bg-white p-4 rounded-md shadow-md flex items-center justify-between mb-4"
              key={product.id}
            >
              {/* Product Details */}
              <div className="flex items-center justify-between">
                {/* Product Image */}
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-16 h-16 object-cover rounded-md mr-4"
                />
                <div>
                  {/* Product Title */}
                  <p className="text-lg font-semibold mb-2 text-black">
                    {product.title.substring(0, 20) + "..."}
                  </p>

                  {/* Product Price */}
                  <p className="text-gray-600">${product.price}</p>
                </div>
              </div>
              {/* <button onClick={() => removeFromCart(index)}> */}
              <button onClick={() => handleRemoveFromCart(product.id)}>
                <FaTrashAlt size={24} className="text-red-500" />
              </button>
            </div>
          ))}
        </div>

        {/* Overlay */}
        {isCartOpen && (
          <div
            className="fixed inset-0 bg-black opacity-50 z-30 "
            onClick={handleToggleSidebar}
          ></div>
        )}
      </div>
    </>
  );
}

export default CartSidebar;
