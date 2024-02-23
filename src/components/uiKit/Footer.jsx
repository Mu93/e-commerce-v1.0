import FollowUs from "./FollowUs";


const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Footer Section 1 */}
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold mb-4">About Us</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          {/* Footer Section 2 */}
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <p>Email: info@example.com</p>
            <p>Phone: +1 (123) 456-7890</p>
          </div>

          {/* Footer Section 3 */}
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <FollowUs/>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-gray-700 py-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2023 Your Ecommerce. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
