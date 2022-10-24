import React, { useState } from "react";

export interface EditorType {
  initialValue: string;
}

export const Editor: React.FC<EditorType> = (props) => {
  const [text, setText] = useState(props.initialValue);

  return (
    <div className="bg-neutral-400 min-w-[400px] rounded-md p-1">
      <div className="flex p-2 gap-4 items-center">
        <p className="body-3 font-bold">Text editor</p>
        <div className="bg-neutral-500 rounded-xl w-px h-6" />

        <div className="flex gap-1">
          <button>
            <Bold />
          </button>

          <button>
            <Italic />
          </button>
        </div>

        <div className="bg-neutral-500 rounded-xl w-px h-6" />

        <button>
          <div className="w-3 h-3 bg-primary-400 rounded-full" />
        </button>

        <button>
          <div className="w-3 h-3 bg-black rounded-full" />
        </button>
        <button>
          <div className="w-3 h-3 bg-[#ED0131] rounded-full" />
        </button>
      </div>
      <div className="bg-white border rounded-md border-neutral-400">
        <textarea
          className="w-full h-full body-3 outline-none min-h-[150px] px-2 pt-1"
          value={text}
          onChange={(value) => setText(value.target.value)}
          name="editor"
          id="editor"
          spellCheck={false}
        ></textarea>
      </div>
    </div>
  );
};

const Bold: React.FC = () => {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.2773 14.3945C18.7969 13.793 19.125 13 19.125 12.125C19.125 10.2109 17.5391 8.625 15.625 8.625L10.375 8.65234C9.88281 8.65234 9.5 9.03516 9.5 9.52734C9.5 9.99219 9.88281 10.4023 10.375 10.4023H10.8125V19.1523H10.375C9.88281 19.1523 9.5 19.5352 9.5 20.0273C9.5 20.4922 9.88281 20.9023 10.375 20.9023H16.5C18.4141 20.9023 20 19.3164 20 17.4023C20 16.1172 19.2891 14.9961 18.2773 14.3945ZM12.5625 10.4023H15.625C16.582 10.4023 17.375 11.168 17.375 12.1523C17.375 13.1094 16.582 13.9023 15.625 13.9023H12.5625V10.4023ZM16.5 19.125H12.5625V15.625H16.5C17.457 15.625 18.25 16.418 18.25 17.375C18.25 18.3047 17.457 19.125 16.5 19.125Z"
        fill="#333333"
      />
    </svg>
  );
};

const Italic: React.FC = () => {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20 9.52734C20 9.99219 19.5898 10.4023 19.125 10.4023H17.5117L13.875 19.1523H15.625C16.0898 19.1523 16.5 19.5352 16.5 20.0273C16.5 20.4922 16.0898 20.9023 15.625 20.9023H10.375C9.88281 20.9023 9.5 20.4922 9.5 20.0273C9.5 19.5352 9.88281 19.1523 10.375 19.1523H11.9609L15.5977 10.4023H13.875C13.3828 10.4023 13 9.99219 13 9.52734C13 9.03516 13.3828 8.65234 13.875 8.65234H19.125C19.5898 8.65234 20 9.03516 20 9.52734Z"
        fill="#333333"
      />
    </svg>
  );
};
