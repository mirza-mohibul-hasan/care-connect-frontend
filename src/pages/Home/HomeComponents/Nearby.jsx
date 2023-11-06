import { BiPhoneCall, BiSolidAmbulance } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
const Nearby = () => {
  return (
    <div className="bg-blue-800 text-white w-10/12 mx-auto rounded-lg grid grid-cols-3 p-10">
      <div className="flex items-center gap-2">
        <div>
          <BiPhoneCall size={50}></BiPhoneCall>
        </div>
        <div>
          <h1 className="text-2xl font-bold">Emergency Call</h1>
          <p>+8801991347811</p>
          <p></p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <div>
          <CiLocationOn size={50}></CiLocationOn>
        </div>
        <div>
          <h1 className="text-2xl font-bold">Nearby Centre</h1>
          <p>Moheshkhali Bazar, Udaynagar, Jashore</p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <div>
          <BiSolidAmbulance size={50}></BiSolidAmbulance>
        </div>
        <div>
          <h1 className="text-2xl font-bold">Ambulence Service</h1>
          <p>+8801787579088</p>
        </div>
      </div>
    </div>
  );
};

export default Nearby;
