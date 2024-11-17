import React from "react";

const TailwindModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null; // Render nothing if the modal is not open

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-11/12 max-w-md p-6">
        {/* Modal Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-gray-800">Information</h2>
          <button
            className="text-black hover:text-gray-600 focus:outline-none" // Set text to black
            onClick={onClose}
          >
            ✕
          </button>
        </div>
        {/* Modal Body */}
        <div className="text-gray-700">
          <p>
            The <strong>SWESTR rate</strong> (Swedish Krona Short-Term Rate) is
            a financial benchmark used in Sweden. It's an interest rate that
            reflects the cost of borrowing money for one day{" "}
            between banks in Swedish Krona (SEK).
          </p>
          <p className="mt-4">
            Think of it as a measure of how expensive or cheap it is for banks
            to lend money to each other overnight. This rate is important
            because it's used in financial contracts and helps guide other
            interest rates in the Swedish economy.
          </p>
        </div>
        {/* Modal Footer */}
        <div className="mt-6 flex justify-end">
          <button
            className="bg-black text-white px-4 py-2 rounded hover:bg-gray-700 focus:outline-none" // Make the button black
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default TailwindModal;
