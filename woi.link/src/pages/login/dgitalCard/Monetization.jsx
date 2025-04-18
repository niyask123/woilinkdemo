import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import MonetizationStepOne from "./MonetizationStepOne";
import MonetizationStepTwo from "./MonetizationStepTwo";
import MonetizationStepThree from "./MonetizationStepThree";

const DMonetization = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);

  const [stepOneCategories, setStepOneCategories] = useState([]);
  const [stepTwoCategories, setStepTwoCategories] = useState([]);
  const [stepThreeCategories, setStepThreeCategories] = useState([]);

  const handleStepOneSelect = (id) => {
    setStepOneCategories((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleStepTwoSelect = (id) => {
    setStepTwoCategories((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleStepThreeSelect = (id) => {
    setStepThreeCategories((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleContinue = () => {
    if (step === 1 && stepOneCategories.length === 0) return;
    if (step === 2 && stepTwoCategories.length === 0) return;

    if (step < 3) {
      setStep(step + 1);
    } else {
      navigate("/singupcmpled/index");
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <MonetizationStepOne
            selectedCategories={stepOneCategories}
            handleSelect={handleStepOneSelect}
            onContinue={handleContinue}
          />
        );
      case 2:
        return (
          <MonetizationStepTwo
            selectedCategories={stepTwoCategories}
            handleSelect={handleStepTwoSelect}
            handleBack={handleBack}
            onContinue={handleContinue}
          />
        );
      case 3:
        return (
          <MonetizationStepThree
            selectedCategories={stepThreeCategories}
            handleSelect={handleStepThreeSelect}
            handleBack={handleBack}
            onContinue={handleContinue}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {renderStep()}
    </div>
  );
};

export default DMonetization;
