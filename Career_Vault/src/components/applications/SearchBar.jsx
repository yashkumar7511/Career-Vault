import { Search } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";
import { Plus } from "lucide-react";


const SearchBar = () => {
  const { theme } = useTheme();

  return (
    <div className="relative w-full max-w-md">
     <button
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
  <Plus size={18} />
  Add Application
</button>
    </div>
  );
};

export default SearchBar;