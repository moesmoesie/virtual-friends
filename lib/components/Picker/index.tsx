const Picker: React.FC = () => {
  return (
    <div className="bg-grey-p relative shadow-card-m px-2 py-2 rounded-lg shadow-2xl">
      <button className="py-2 w-full px-2 flex gap-5 items-center">
        <span className="body-1">Purple</span>
        <div className="w-3 h-3 ml-auto rounded-full bg-gradient-purple" />
      </button>
      <button className="py-2 px-2 w-full flex gap-5 items-center">
        <span className="body-1">Red</span>
        <div className="w-3 ml-auto h-3 rounded-full bg-dark-purple-400" />
      </button>
      <button className="py-2 w-full px-2 flex gap-5 items-center">
        <span className="body-1">Green</span>
        <div className="ml-auto w-3 h-3 rounded-full bg-dark-purple-400" />
      </button>
    </div>
  );
};

export default Picker;
