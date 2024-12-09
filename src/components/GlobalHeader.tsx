import React from 'react';

const GlobalHeader = () => {
  return (
    <header>

      <div className="bg-[#252B42] text-white text-sm py-4">
        <div className="container mx-auto flex justify-between items-center px-8 py-2">

          <div className="flex items-center space-x-8 font-bold">
            <span>
              <i className="fas fa-phone-alt"></i> (225) 555-0118
            </span>
            <span>
              <i className="fas fa-envelope"></i> michelle.rivera@example.com
            </span>
          </div>

          <div className="text-center flex-1 font-bold">
            Follow Us and get a chance to win 80% off
          </div>

          <div className="flex items-center space-x-4">
            <span className="font-bold">Follow Us:</span>
            <a href="#" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" aria-label="YouTube">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="#" aria-label="Facebook">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" aria-label="Twitter">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
      </div>


      <div className="bg-white text-black">
        <div className="container mx-auto flex justify-between items-center px-8 py-4">

          <div className="text-2xl font-bold">Bandage</div>

          <nav>
            <ul className="flex space-x-8 font-bold text-[#737373]">
              <li>
                <a href="/" className="hover:text-black">
                  Home
                </a>
              </li>
              <li className="relative group">
                <a href="#" className="hover:text-black">
                  Shop
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black">
                  Pages
                </a>
              </li>
            </ul>
          </nav>

          <div className="flex items-center space-x-8">
            <a href="#" className="text-[#23A6F0] hover:underline font-bold">
              <i className="fa-regular fa-user"></i> Login / Register
            </a>
            <a href="#" aria-label="Search" className="text-[#23A6F0]">
              <i className="fas fa-search"></i>
            </a>
            <a href="#" aria-label="Cart" className="text-[#23A6F0]">
              <i className="fa fa-shopping-cart"></i> <span>1</span>
            </a>
            <a href="#" aria-label="Wishlist" className="text-[#23A6F0]">
              <i className="fa-regular fa-heart"></i> <span>1</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default GlobalHeader;