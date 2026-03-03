import { useState, useEffect } from "react";
import confetti from "canvas-confetti";
import warningImage from "./assets/registration-warning.png";
import babyImage from "./assets/baby.png";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState("");

  const startLoadingSequence = (type) => {
    setModalType(type);
    setIsLoading(true);
    setProgress(0);

    const steps = [
      "Analysing your decision...",
      "Consulting with Elon Musk...",
      "Discussing with Alien...",
      "Done ✅",
    ];

    let stepIndex = 0;

    setLoadingText(steps[0]);

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsLoading(false);
          setShowModal(true);

          if (type === "yes") {
            confetti({
              particleCount: 150,
              spread: 100,
              origin: { y: 0.6 },
            });
          }

          return 100;
        }
        return prev + 5;
      });
    }, 150);

    const textInterval = setInterval(() => {
      stepIndex++;
      if (stepIndex < steps.length) {
        setLoadingText(steps[stepIndex]);
      } else {
        clearInterval(textInterval);
      }
    }, 1200);
  };

  return (
    <div className="h-screen w-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-black flex items-center justify-center text-white relative overflow-hidden">

      {/* Main Card */}
      {!isLoading && (
        <div className="backdrop-blur-md bg-white/10 border border-white/20 p-12 rounded-3xl shadow-2xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-10">
            Have you registered the contest?
          </h1>

          <div className="flex justify-center gap-10">
            <button
              onClick={() => startLoadingSequence("yes")}
              className="px-8 py-3 bg-green-500 hover:bg-green-600 rounded-xl text-lg font-semibold transition-all duration-300 shadow-lg hover:scale-110"
            >
              YES
            </button>

            <button
              onClick={() => startLoadingSequence("no")}
              className="px-8 py-3 bg-red-500 hover:bg-red-600 rounded-xl text-lg font-semibold transition-all duration-300 shadow-lg hover:scale-110"
            >
              NO
            </button>
          </div>
        </div>
      )}

      {/* Loading Screen */}
      {isLoading && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black text-white">
          <h2 className="text-xl mb-6 animate-pulse">
            {loadingText}
          </h2>

          <div className="w-72 h-4 bg-gray-700 rounded-full overflow-hidden">
            <div
              className="h-full bg-green-500 transition-all duration-200"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      )}

      {/* Modal */}
      {showModal && (
        <div className="absolute inset-0 bg-black/80 flex items-center justify-center px-4">
          <div className="bg-white text-black p-8 rounded-2xl max-w-md w-full text-center shadow-2xl">

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