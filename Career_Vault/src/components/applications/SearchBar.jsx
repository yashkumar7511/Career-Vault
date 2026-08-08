import { Plus } from "lucide-react";
import { useState } from "react";

import { useTheme } from "../../context/ThemeContext";
import AddApplicationModal from "./AddApplicationModal";

const SearchBar = () => {
  const { theme } = useTheme();
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        className="
          flex
          items-center
          gap-2
          rounded-2xl
          px-6
          py-3
          font-semibold
          text-white
          transition-all
          duration-300
          hover:scale-105
        "
        style={{
          background: theme.colors.primary,
        }}
      >
        <Plus size={20} />
        Add Application
      </button>

      {showModal && (
        <AddApplicationModal
          onClose={() => setShowModal(false)}
        />
      )}
    </>
  );
};

export default SearchBar;