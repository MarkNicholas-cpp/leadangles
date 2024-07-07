import React from "react";

interface GradientButtonProps {
  content: string;
}

const GradientButton: React.FC<GradientButtonProps> = ({ content }) => {
  return (
    <button className="bg-opacity-75 bg-dark-blue-700 border border-white rounded-lg relative bg-gray-100 light:bg-primary backdrop-filter backdrop-blur-lg backdrop-saturate-150 text-gray-800 border-opacity-25 px-4 py-2">
      {content}
    </button>
  );
};

export default GradientButton;
