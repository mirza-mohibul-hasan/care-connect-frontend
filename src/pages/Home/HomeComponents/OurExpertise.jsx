import { FaCheckCircle } from "react-icons/fa";

const OurExpertise = () => {
  return (
    <div className="w-10/12 mx-auto mt-10 flex justify-between">
      <div className="bg-gray-100 w-3/4 rounded-l-2xl p-10 grid grid-cols-2 gap-5">
        <div className="bg-gray-50 rounded-xl flex items-center justify-center flex-col shadow-xl">
          <FaCheckCircle
            size={40}
            className="text-blue-800 border-2 p-1 rounded-full"
          ></FaCheckCircle>
          <h1 className="text-xl font-bold">Child Care</h1>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="bg-gray-50 rounded-xl flex items-center justify-center flex-col shadow-xl">
          <FaCheckCircle
            size={40}
            className="text-blue-800 border-2 p-1 rounded-full"
          ></FaCheckCircle>
          <h1 className="text-xl font-bold">Diabetics Diagonesis</h1>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="bg-gray-50 rounded-xl flex items-center justify-center flex-col shadow-xl">
          <FaCheckCircle
            size={40}
            className="text-blue-800 border-2 p-1 rounded-full"
          ></FaCheckCircle>
          <h1 className="text-xl font-bold">Telemedicine</h1>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="bg-gray-50 rounded-xl flex items-center justify-center flex-col shadow-xl">
          <FaCheckCircle
            size={40}
            className="text-blue-800 border-2 p-1 rounded-full"
          ></FaCheckCircle>
          <h1 className="text-xl font-bold">Vaccine</h1>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
      </div>
      <div>
        <img
          className="rounded-r-xl shadow-xl shadow-blue-800"
          src="https://as2.ftcdn.net/v2/jpg/04/75/64/13/1000_F_475641316_oMwrRx7hNCvSBvg3QtHCGbx0fKYGqryA.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default OurExpertise;
