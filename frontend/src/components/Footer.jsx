import React, { useState } from 'react';
import { assets } from '../assets/assets';

const Footer = () => {
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    setSubscribed(true);
  };

  return (<>
  <div className='pt-8'>
    <hr className='h-0.5 w-full bg-[#c8c8c8]'></hr>
  </div>

  <footer className=" text-black py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Subscribe to Emails */}
        <div className="flex flex-col">
          <h3 className="text-xl font-semibold mb-4">Subscribe to our emails</h3>
          <form onSubmit={handleSubscribe} className="relative w-full max-w-md">
            <input
              type="email"
              placeholder="Email"
              className="w-full py-2 pl-4 pr-12 rounded-full border border-gray-300"
              required
            />
            <button type="submit" className="absolute right-0 top-0 h-full px-4 rounded-r-full bg-black text-white">
              →
            </button>
          </form>
          {subscribed && (
            <p className="mt-2 text-green-600 flex items-center">
              ✔ Thanks for subscribing
            </p>
          )}
        </div>

        {/* Social Media Icon */}
        <div className="flex justify-end space-x-4">
  <a
    href="#"
    aria-label="Facebook"
    className="text-gray-600 transform transition-transform duration-200 hover:scale-125"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="20"
      height="20"
    >
      <path
        d="M24,12.073c0,5.989-4.394,10.954-10.13,11.855v-8.363h2.789l0.531-3.46H13.87V9.86c0-0.947,0.464-1.869,1.95-1.869h1.509V5.045c0,0-1.37-0.234-2.679-0.234c-2.734,0-4.52,1.657-4.52,4.656v2.637H7.091v3.46h3.039v8.363C4.395,23.025,0,18.061,0,12.073c0-6.627,5.373-12,12-12S24,5.445,24,12.073z"
        fill="#121212"
      />
    </svg>
  </a>
  <a
    href="#"
    aria-label="X"
    className="text-gray-600 transform transition-transform duration-200 hover:scale-125"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="20"
      height="20"
    >
      <polygon
        points="6.861 6.159 15.737 17.764 17.097 17.764 8.322 6.159 6.861 6.159"
        fill="#121212"
      />
      <path
        d="m12,0C5.373,0,0,5.373,0,12s5.373,12,12,12,12-5.373,12-12S18.627,0,12,0Zm3.063,19.232l-3.87-5.055-4.422,5.055h-2.458l5.733-6.554-6.046-7.91h5.062l3.494,4.621,4.043-4.621h2.455l-5.361,6.126,6.307,8.337h-4.937Z"
        fill="#121212"
      />
    </svg>
  </a>
  <a
    href="#"
    aria-label="Instagram"
    className="text-gray-600 transform transition-transform duration-200 hover:scale-125"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="20"
      height="20"
    >
      <path
        d="M12,2.162c3.204,0,3.584,0.012,4.849,0.07c1.308,0.06,2.655,0.358,3.608,1.311c0.962,0.962,1.251,2.296,1.311,3.608c0.058,1.265,0.07,1.645,0.07,4.849c0,3.204-0.012,3.584-0.07,4.849c-0.059,1.301-0.364,2.661-1.311,3.608c-0.962,0.962-2.295,1.251-3.608,1.311c-1.265,0.058-1.645,0.07-4.849,0.07s-3.584-0.012-4.849-0.07c-1.291-0.059-2.669-0.371-3.608-1.311c-0.957-0.957-1.251-2.304-1.311-3.608c-0.058-1.265-0.07-1.645-0.07-4.849c0-3.204,0.012-3.584,0.07-4.849c0.059-1.296,0.367-2.664,1.311-3.608c0.96-0.96,2.299-1.251,3.608-1.311C8.416,2.174,8.796,2.162,12,2.162 M12,0C8.741,0,8.332,0.014,7.052,0.072C5.197,0.157,3.355,0.673,2.014,2.014C0.668,3.36,0.157,5.198,0.072,7.052C0.014,8.332,0,8.741,0,12c0,3.259,0.014,3.668,0.072,4.948c0.085,1.853,0.603,3.7,1.942,5.038c1.345,1.345,3.186,1.857,5.038,1.942C8.332,23.986,8.741,24,12,24c3.259,0,3.668-0.014,4.948-0.072c1.854-0.085,3.698-0.602,5.038-1.942c1.347-1.347,1.857-3.184,1.942-5.038C23.986,15.668,24,15.259,24,12c0-3.259-0.014-3.668-0.072-4.948c-0.085-1.855-0.602-3.698-1.942-5.038c-1.343-1.343-3.189-1.858-5.038-1.942C15.668,0.014,15.259,0,12,0z"
        fill="#121212"
      />
      <path
        d="M12,5.838c-3.403,0-6.162,2.759-6.162,6.162c0,3.403,2.759,6.162,6.162,6.162s6.162-2.759,6.162-6.162C18.162,8.597,15.403,5.838,12,5.838z M12,16c-2.209,0-4-1.791-4-4s1.791-4,4-4s4,1.791,4,4S14.209,16,12,16z"
        fill="#121212"
      />
      <circle cx="18.406" cy="5.594" r="1.44" fill="#121212" />
    </svg>
  </a>
</div>

      </div>

      {/* Bottom Links */}
      <div className="container mx-auto mt-8">
        <div className="border-t border-gray-200 pt-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>© 2024, WearIt</p>
          <ul className="flex space-x-4">
            <li><a href="#" className="hover:text-gray-700">Refund policy</a></li>
            <li><a href="#" className="hover:text-gray-700">Privacy policy</a></li>
            <li><a href="#" className="hover:text-gray-700">Terms of service</a></li>
            <li><a href="#" className="hover:text-gray-700">Shipping policy</a></li>
            <li><a href="#" className="hover:text-gray-700">Contact information</a></li>
          </ul>
        </div>
      </div>
    </footer>
  </>
    
  );
};

export default Footer;
