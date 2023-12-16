import React from "react";
// Import 'FiFacebook' from 'react-icons/fi' namespace
import { FiFacebook } from 'react-icons/fi';

// Import 'AiOutlineHeart' from 'react-icons/ai' namespace
import { AiOutlineHeart } from 'react-icons/ai';

// Import 'AiOutlineInstagram' from 'react-icons/ai' namespace
import { AiOutlineInstagram } from 'react-icons/ai';

// Import 'IoLogoYoutube' from 'react-icons/io' namespace
import { IoLogoYoutube } from 'react-icons/io';

// ... rest of your code

import { Input, Stack } from "@chakra-ui/react";
import "./footercss.css";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footerCmp">
      <footer>
        <div className="footerCategorie">
          <h1>Categories</h1>
          <ul>
            <li>
              <Link to="/shop/?cg=Women">Gaming Laptop</Link>
            </li>
            <li>
              <Link to="/shop/?cg=Men">Home Series Laptop</Link>
            </li>
            <li>
              <Link to="/shop/?cg=Shoes">Office Laptop</Link>
            </li>
            <li>
              <Link to="/shop/?cg=Watches">Laptop Accessories</Link>
            </li>
          </ul>
        </div>

        <div className="fooHelp">
          <h1>Help</h1>
          <ul>
            <li>Tracke Order</li>
            <li>Returns</li>
            <li>Shipping</li>
            <li>FAQs</li>
          </ul>
        </div>

        <div className="footerGetInTouch">
          <h1>Get in touch</h1>
          <ul>
            <p>
              Shop No. 3, Imran Manzil, Narayan Nagar, Near G.R. Patil College,
              Mumbra, Thane-400612
            </p>
            <li className="footerIcons">
              <FiFacebook size="25" />
            </li>
            <li className="footerIcons">
              <AiOutlineInstagram size="25" />
            </li>
            <li className="footerIcons">
              <IoLogoYoutube size="25" />
            </li>
          </ul>
        </div>

        <div className="footerNews">
          <h1>Newsletter</h1>
          <ul>
            <li>
              <Stack spacing={3}>
                <Input
                  variant="flushed"
                  placeholder="email@example.com"
                  size="10"
                  width="200px"
                />
              </Stack>
            </li>
            <li>
              <button className="footerBtn">Subscribe</button>
            </li>
          </ul>
        </div>

        {/* <div className="creditsIcons">
          <ul>
            <li>
              <img src="https://i.imgur.com/AHCoUZO.png" className="img1" />
            </li>
            <li>
              <img src="https://i.imgur.com/JZRipBg.png" className="img2" />
            </li>
            <li>
              <img src="https://i.imgur.com/l8OAGyo.png" className="img3" />
            </li>
            <li>
              <img src="https://i.imgur.com/IDHC2iv.png" className="img4" />
            </li>
          </ul>
        </div> */}

        <div className="paragraphFooter" style={{ textAlign: "center" }}>
          <p>Copyright © 2023 All rights reserved</p>
          <h4>Afroz Sayed</h4>
          {/* Add any additional links here */}
        </div>
      </footer>
    </div>
  );
};

export default Footer;