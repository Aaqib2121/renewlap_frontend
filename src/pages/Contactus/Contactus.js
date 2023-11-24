import React, { useState } from "react";
import { Image } from "@chakra-ui/react";
import { Helmet } from "react-helmet";

import cover from "./cover.jpg";
import {
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
  Button,
} from "@chakra-ui/react";
// Import 'BsEnvelope' from 'react-icons/bs' namespace
import { BsEnvelope } from 'react-icons/bs';

// Import 'GiPositionMarker' from 'react-icons/gi' namespace
import { GiPositionMarker } from 'react-icons/gi';

// Import 'HiOutlinePhone' from 'react-icons/hi' namespace
import { HiOutlinePhone } from 'react-icons/hi';

// ... rest of your code

import "./contactuscss.css";
const Contactus = () => {
  const [email, setemail] = useState("");
  const [body, setbody] = useState("");
  const [user, setUser] = useState({
    email: "",
    message: "",
  });

  let name, value;
  const getUserData = (event) => {
    name = event.target.name;
    value = event.target.value;

    setUser({ ...user, [name]: value });
  };

  const handlesubmit = () => {
    const mailtoLink = `mailto:support@renewlap.com?subject=Sample&body=${body}`;
    window.location.href = mailtoLink;
  };

  const postData = async (e) => {
    e.preventDefault();

    const { email, message } = user;

    const res = await fetch(
      "https://renewlap-default-rtdb.firebaseio.com/renewlapcontactform.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          message,
        }),
      }
    );
    if (res) {
      setUser({
        email: "",
        message: "",
      });
      alert("Thank you for reaching us");
    }
  };

  return (
    <div className="contactUs">
      <Helmet>
        <title>Contact</title>
      </Helmet>
      <div className="headerContact">
        <Image
          className="imageContact"
          src="https://cdn.thewirecutter.com/wp-content/media/2023/01/businesslaptops-2048px-0098-2x1-1.jpg"
          alt="contactImage"
          objectFit="cover"
        />
        <div className="text">
          {/* <h2>Contact</h2> */}
        </div>
      </div>

      <div className="card-contact">
        <form className="sendMsg" method="POST">
          <div>
            <h4>Send Us A Message</h4>
            <div className="inputContact">
              <InputGroup width="450px">
                <InputLeftElement
                  pointerEvents="none"
                  children={
                    <BsEnvelope className="envolope" color="gray.300" />
                  }
                />
                <Input
                  value={user.email}
                  name="email"
                  onChange={getUserData}
                  type="text"
                  placeholder="Your Email Address"
                />
              </InputGroup>
            </div>
            <div className="textAreaCnt">
              <Textarea
                value={user.message}
                onChange={getUserData}
                name="message"
                width="450px"
                placeholder="How Can We Help"
                height="200px"
              />
            </div>
            <div className="contentContact">
              <Button
                type="submit"
                onClick={postData}
                borderRadius="90px"
                colorScheme="teal"
                variant="solid"
                size="180px"
                className="contactBtn"
              >
                Submit
              </Button>
            </div>
          </div>
        </form>

        <div className="showAdrss">
          <div className="box">
            <div className="iconCtn">
              <GiPositionMarker opacity="0.8" />
            </div>
            <div className="adressCtn">
              <h3> Address</h3>
              <p>
                Shop No. 3, Imran Manzil, Narayan Nagar, Near G.R. Patil
                College, Mumbra, Thane-400612
              </p>
            </div>
          </div>
          <div className="box">
            <div className="iconCtn">
              <HiOutlinePhone opacity="0.8" />
            </div>
            <div className="adressCtn">
              <h3>Lets Talk</h3>
              <p className="infoCtn">8879988898</p>
            </div>
          </div>
          <div className="box">
            <div className="iconCtn">
              <BsEnvelope opacity="0.8" />
            </div>
            <div className="adressCtn">
              <h3>Enquiry Support</h3>
              <a href="mailto:support@renewlap.com" className="infoCtn">
                support@renewlap.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactus;
