import { useState } from "react";
import { useNavigate } from "react-router-dom";

const IndexPage = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const navigate = useNavigate();

  const handleSelection = () => {
    if (selectedOption) {
      navigate(selectedOption);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold mb-4">Select an Option</h1>
      <select
        value={selectedOption}
        onChange={(e) => setSelectedOption(e.target.value)}
        className="p-2 border rounded-md"
      >
        <option value="">Choose...</option>
        <option value="/u-r/digital-card">Create Digital Card</option>
        <option value="/u-r/link-in-bio">Link In Bio</option>
        <option value="/u-r/store">Store</option>
        <option value="/u-d">Dashboard</option>
        <option value="/kanban">kanba</option>
      </select>
      <button
        onClick={handleSelection}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md"
      >
        Enter
      </button>
    </div>
  );
};

export default IndexPage;
