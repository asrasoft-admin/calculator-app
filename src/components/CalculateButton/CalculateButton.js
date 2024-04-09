import React from "react";

const CalculateButton = ({
  className,
  instructionsButtonClassName,
  instructionsButton,
  instructionsButtonContainer,
}) => {
  return (
    <div>
      <button className={className}>Calculate</button>
      {instructionsButton && (
        <div className={instructionsButtonContainer}>
          <button className={instructionsButtonClassName}>
            {instructionsButton}
          </button>
        </div>
      )}
    </div>
  );
};

export default CalculateButton;
