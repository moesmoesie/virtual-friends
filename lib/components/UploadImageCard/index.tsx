const UploadImageCard: React.FC = () => {
  return (
    <div className="bg-grey-p shadow-card-m w-[220px] h-[140px] rounded-lg p-4 shadow-2xl">
      <div className="border grid place-items-center border-grey-300 w-full border-dashed border-y-[2px] border-x-[2px] rounded-lg h-full ">
        <p className="body-1 font-bold">
          {/* <FontAwesomeIcon className="mr-3" icon="image" /> */}
          upload image
        </p>
      </div>
    </div>
  );
};

export default UploadImageCard;
