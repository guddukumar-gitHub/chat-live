import { useRef } from "react";
import "./App.css";

function App() {
  const inputRef = useRef<HTMLInputElement>(null);

  function handleSendMessege() {
    if (!inputRef.current) {
      return;
    }

    const message = inputRef.current.value;
    console.log(message);
    // message sending to server
  }

  return (
    <div className="h-screen bg-black text-white">
      <div className="h-full flex flex-row">
        {/* Room */}
        <div className="w-1/4 border border-amber-400">
          <h1 className="text-2xl font-bold p-2">Chat live</h1>
          {/* <div className="w-full border-t-1"></div> */}
          <hr />
          <h2 className="text-gray-400 p-2 font-semibold">Rooms</h2>
        </div>

        {/* Chats */}
        <div className="w-full flex flex-col border border-amber-400 relative">
          <div className="">Header</div>
          <div className="h-full"></div>
          <div className="flex justify-center pb-2">
            <input
              type="text"
              ref={inputRef}
              className="w-1/2 rounded-l-2xl border border-amber-100 border-r-transparent px-4 outline-none"
            />
            <button
              onClick={handleSendMessege}
              className="px-2 rounded-r-2xl border border-amber-100 cursor-pointer p-2"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
