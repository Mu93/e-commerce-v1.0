import { FaInstagram, FaFacebookF, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function FollowUs() {
  return (
    <div className="flex w-32 justify-between items-center mr-5">
      <a
        href="https://www.facebook.com/"
        target="_blank"
        rel="noreferrer"
        className="mr-2"
      >
        <FaFacebookF size={22} className="text-blue-400" />
      </a>
      <a
        href="https://twitter.com/"
        target="_blank"
        rel="noreferrer"
        className="mr-2"
      >
        <FaXTwitter size={22} className="text-blue-400" />
      </a>
      <a
        href="https://www.instagram.com/"
        target="_blank"
        rel="noreferrer"
        className="mr-2"
      >
        <FaInstagram size={22} className="text-blue-400" />
      </a>
      <a
        href="https://www.linkedin.com/"
        target="_blank"
        rel="noreferrer"
        className="mr-2"
      >
        <FaLinkedin size={22} className="text-blue-400" />
      </a>
    </div>
  );
}

export default FollowUs;
