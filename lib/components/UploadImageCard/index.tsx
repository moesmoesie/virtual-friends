import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const UploadImageCard = () => {
  return (
    <div className="bg-DarkPurple/600 w-[220px] h-[140px] rounded-lg p-4 shadow-2xl">
      <div className="border grid place-items-center border-dark-purple-200 w-full border-dashed border-y-[2px] border-x-[2px] rounded-lg h-full ">
        <p className="body-1 font-bold">
          <FontAwesomeIcon className="mr-3" icon="image" />
          upload image
        </p>
      </div>
    </div>
  );
};

export default UploadImageCard;
