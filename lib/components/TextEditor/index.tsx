const TextEditor: React.FC = () => {
  return (
    <div className="bg-dark-purple-600 w-full h-full overflow-hidden rounded-lg p-4 shadow-2xl">
      <div className="bg-dark-purple-500 flex flex-col overflow-hidden border rounded-lg border-dark-purple-300 w-full h-full">
        <div className="h-12 py-3 border-b gap-3 items-center flex px-2 border-dark-purple-300 w-full bg-dark-purple-400">
          <span className="body-1 font-bold text-teal-500">Text Editor</span>

          <div className="w-px h-full bg-dark-purple-300" />

          <div className="flex  gap-1">
            <button className="w-8 h-8 hover:bg-dark-purple-200 rounded-lg">
              {/* <FontAwesomeIcon icon="bold" /> */}
            </button>

            <button className="w-8 h-8 hover:bg-dark-purple-200 rounded-lg">
              {/* <FontAwesomeIcon icon="italic" /> */}
            </button>
          </div>

          <div className="w-px h-full bg-dark-purple-300" />

          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-purple-navy-100 rounded-full" />
            <span className="body-1 text-grey-200">#003232</span>
          </div>
        </div>
        <div className="pl-2 pt-2 pb-2 h-full">
          <textarea
            defaultValue={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc auctor blandit diam.Lorem ipsum dolor sit amet, consectetur adipiscing elit blandit diam.Lorem ipsum dolor sit amet, consectetur adipiscing elit`}
            spellCheck={false}
            className="w-full focus:outline-none resize-none h-full bg-[transparent]"
          />
        </div>
      </div>
    </div>
  );
};

export default TextEditor;
