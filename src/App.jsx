import { useState } from "react";
import confetti from "canvas-confetti";
import warningImage from "./assets/registration-warning.png";
import babyImage from "./assets/baby.png";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState("");

  const handleYesClick = () => {
    confetti({
      particleCount: 150,
      spread: 100,
      origin: { y: 0.6 },
    });

    setModalType("yes");
    setShowModal(true);
  };

  const handleNoClick = () => {
    setModalType("no");
    setShowModal(true);
  };

  return (
    <div className="h-screen w-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-black flex items-center justify-center text-white relative overflow-hidden">

      {/* Glass Card */}
      <div className="backdrop-blur-md bg-white/10 border border-white/20 p-12 rounded-3xl shadow-2xl text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-10">
          Have you registered the Logic Loot contest?
        </h1>

        <div className="flex justify-center gap-10">
          <button
            onClick={handleYesClick}
            className="px-8 py-3 bg-green-500 hover:bg-green-600 rounded-xl text-lg font-semibold transition-all duration-300 shadow-lg hover:scale-110"
          >
            YES
          </button>

          <button
            onClick={handleNoClick}
            className="px-8 py-3 bg-red-500 hover:bg-red-600 rounded-xl text-lg font-semibold transition-all duration-300 shadow-lg hover:scale-110"
          >
            NO
          </button>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="absolute inset-0 bg-black/80 flex items-center justify-center px-4">
          <div className="bg-white text-black p-8 rounded-2xl max-w-md w-full text-center shadow-2xl">

            {/* YES MODAL */}
            {modalType === "yes" && (
              <>
                <img
                  src={babyImage}
                  alt="Celebration"
                  className="w-40 h-40 object-cover mx-auto rounded-xl mb-4 shadow-lg"
                />

                <h2 className="text-xl font-bold">
                  Okay, milte h fir contest ke din 😎🔥
                </h2>
              </>
            )}

            {/* NO MODAL */}
            {modalType === "no" && (
              <>
                <img
                  src={warningImage}
                  alt="Registration Warning"
                  className="w-40 h-40 object-cover mx-auto rounded-xl mb-4 shadow-lg"
                />

                <h2 className="font-bold text-lg mb-4">
                  Kyu nhi ho rha registration????  
                  ye lo Link aur jaldi team bna kar registration kro
                </h2>

                <a
                  href="https://tinyurl.com/logic-loot"
                  target="_blank"
                  className="block bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition"
                >
                  Go To Registration
                </a>
              </>
            )}

            <button
              onClick={() => setShowModal(false)}
              className="mt-6 text-sm text-gray-500 hover:text-black"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;