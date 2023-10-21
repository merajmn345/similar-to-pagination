import { useState } from "react";
import "./styles.css";

export default function App() {
  const [step, setStep] = useState(2);
  const [isOpen, setIsOpen] = useState(true);

  const messages = [
    "Learn React ⚛️",
    "Apply for jobs 💼",
    "Invest your new income 🤑",
    "Learn React ⚛️",
    "Apply for jobs 💼",
    "Invest your new income 🤑",
    "Learn React ⚛️",
    "Apply for jobs 💼",
    "Invest your new income 🤑"
  ];

  function handlePrev(e) {
    e.preventDefault();

    if (step > 1) {
      setStep(step - 1);
    }
  }
  const handleNext = function (e) {
    e.preventDefault();

    if (step < messages.length) {
      setStep(step + 1);
    }
  };

  const handleDirect = function (id) {
    // alert(id)
    setStep(id);
  };

  return (
    <>
      <button className="close" onClick={() => setIsOpen(!isOpen)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div
              onClick={() => handleDirect(1)}
              className={step >= 1 ? "active" : ""}
            >
              1
            </div>
            <div
              onClick={() => handleDirect(2)}
              className={step >= 2 ? "active" : ""}
            >
              2
            </div>
            <div
              onClick={() => handleDirect(3)}
              className={step >= 3 ? "active" : ""}
            >
              3
            </div>
            <div
              onClick={() => handleDirect(4)}
              className={step >= 4 ? "active" : ""}
            >
              4
            </div>
            <div
              onClick={() => handleDirect(5)}
              className={step >= 5 ? "active" : ""}
            >
              5
            </div>
            <div
              onClick={() => handleDirect(6)}
              className={step >= 6 ? "active" : ""}
            >
              6
            </div>
            <div
              onClick={() => handleDirect(7)}
              className={step >= 7 ? "active" : ""}
            >
              7
            </div>
            <div
              onClick={() => handleDirect(8)}
              className={step >= 8 ? "active" : ""}
            >
              8
            </div>
            <div
              onClick={() => handleDirect(9)}
              className={step >= 9 ? "active" : ""}
            >
              9
            </div>
          </div>
          <div className="message">
            <h3>{messages[step - 1]}</h3>
          </div>
          <div className="buttons">
            <button style={{ backgroundColor: "#7950f1" }} onClick={handlePrev}>
              Previous
            </button>
            <button style={{ backgroundColor: "#7950f1" }} onClick={handleNext}>
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
}
