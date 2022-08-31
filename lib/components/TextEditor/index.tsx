const TextEditor: React.FC = () => {
  return (
    <div className="bg-grey-p w-full shadow-card-m h-full overflow-hidden rounded-2xl px-1 pb-1 shadow-2xl">
      <div className=" flex flex-col overflow-hidden w-full h-full">
        <div className="h-12 py-3  gap-3 items-center flex px-2  w-full">
          <span className="body-1 font-bold">Text Editor</span>

          <div className="w-px h-full bg-grey-300" />

          <div className="flex  gap-1">
            <button className="w-8 h-8 hover:bg-dark-purple-200 rounded-lg">
              {/* <FontAwesomeIcon icon="bold" /> */}
            </button>

            <button className="w-8 h-8 hover:bg-dark-purple-200 rounded-lg">
              {/* <FontAwesomeIcon icon="italic" /> */}
            </button>
          </div>

          <div className="w-px h-full bg-grey-300" />

          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-voilet-400 rounded-full" />
            <span className="body-1">#003232</span>
          </div>
        </div>
        <div className="pl-2  rounded-2xl border border-grey-200 h-full bg-white">
          <textarea
            defaultValue={`Lorem ipsum dolor sit amet, consectetur Nunc auctor blandit diam.Lorem ipsum dolor sit amet, consectetur diam.Lorem ipsum dolor sit amet, consectetur adipiscing elit`}
            spellCheck={false}
            className="w-full pt-2 focus:outline-none resize-none h-full bg-[transparent]"
          />
        </div>
      </div>
    </div>
  );
};

export default TextEditor;
