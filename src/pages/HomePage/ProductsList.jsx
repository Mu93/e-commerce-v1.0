import { useState } from "react";
import { GoHeart, GoHeartFill } from "react-icons/go";
import { Button, ProductForm } from "../../components";
// import { useCart } from "../../context/CartContext";
import CartSidebar from "./CartSidebar";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/slices/cartSlice";
import { getCurrentUser } from "../../services/apiServers";

function ProductsList({ allProducts }) {
  const dispatch = useDispatch();

  const [wishList, setWishList] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);
  const [products, setProducts] = useState(allProducts);
  const [isCartOpen, setCartOpen] = useState(false);

  // const { addToCart } = useCart();

  const addProduct = (newProduct) => {
    setProducts([...products, newProduct]);
  };

  const handleCart = (product) => {
    setCartOpen(true);
    // addToCart(product);
    dispatch(addToCart(product));
  };

  return (
    <>
      <CartSidebar isCartOpen={isCartOpen} setCartOpen={setCartOpen} />
      <section className="container mx-auto p-2">
        <div className="flex justify-between mb-10">
          <h1 className="font-bold text-4xl mb-5">Products</h1>

          {getCurrentUser() && (
            <Button handleClick={() => setModalOpen(true)}>
              Add New Product
            </Button>
          )}
        </div>

        <ProductForm
          isOpen={isModalOpen}
          onRequestClose={() => setModalOpen(false)}
          addProduct={addProduct}
          id={products.length + 1}
        />
        <div className="grid grid-cols-12">
          {products?.map((product) => (
            <div
              className=" mr-3 w-56 mx-auto bg-white shadow-md overflow-hidden mb-8 col-span-6  md:col-span-4 lg:col-span-3 2xl:col-span-2"
              key={product.id}
            >
              <div className="h-48">
                <img
                  className="w-full h-full object-fill "
                  src={product.image} // replace with the actual image source
                  alt={product.title}
                />
              </div>
              <div className="p-4 h-48">
                <div className="uppercase tracking-wide text-sm text-blue-400 font-semibold ">
                  {product.category}
                </div>
                <a
                  href="#"
                  className="block mt-1 text-lg leading-tight font-medium text-black hover:underline h-12"
                >
                  {product.title.substring(0, 35) + "..."}
                </a>
                {/* <p className="mt-2 text-gray-500">
              {product.description.substring(0, 50) + "..."}
            </p> */}

                <div className="mt-2">
                  <span className="text-gray-500">Price: </span>
                  <span className="text-gray-800 font-bold">
                    ${product.price}
                  </span>
                </div>
                <div className="mt-4 flex justify-between">
                  <button
                    onClick={() => handleCart(product)}
                    className="bg-blue-400 text-white py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
                    type="button"
                  >
                    Add to Cart
                  </button>
                  <button onClick={() => setWishList(!wishList)}>
                    {wishList ? (
                      <GoHeartFill size={32} />
                    ) : (
                      <GoHeart size={32} />
                    )}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default ProductsList;
