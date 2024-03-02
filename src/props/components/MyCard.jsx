import React from "react";
import Img from "../../assets/img.jpeg";
import { propTypes } from "react-bootstrap/esm/Image";

const MyCard = ({ xyz, cardName, btnText = "Visit Me" }) => {
  // console.log(props);
  return (
    <>
      <div
        style={{ display: "flex", gap: "5px", marginTop: "5px" }}
        className="relative h-[400px] w-[300px] rounded-md inline-block gap-8"
      >
        <img
          src={Img}
          alt="Tapan"
          width={150}
          className="z-0 h-full w-full rounded-md object-cover "
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
        <div className="absolute bottom-4 left-4 text-left">
          <h3 className="text-lg font-semibold text-white">
            {cardName} <br /> {xyz}{" "}
          </h3>
          <p className="mt-2 text-sm text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
            debitis?
          </p>
          <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
            {btnText}→
          </button>
        </div>
      </div>
    </>
  );
};
// MyCard.propTypes = {
//   xyz: propTypes.object,
//   cardName: propTypes.string,
// };

export default MyCard;
