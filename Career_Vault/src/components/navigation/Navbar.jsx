import { FaBell } from "react-icons/fa";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/80 backdrop-blur">

      <div className="flex h-20 items-center justify-between px-8">

        <div>

          <h2 className="text-3xl font-bold">
            Dashboard
          </h2>

          <p className="text-slate-400">
            Welcome back 👋
          </p>

        </div>

        <div className="flex items-center gap-5">

          <button className="rounded-full bg-slate-900 p-4 transition hover:bg-orange-500">

            <FaBell size={18} />

          </button>

          <div className="flex items-center gap-3">

            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-500 font-bold text-lg">
              Y
            </div>

            <div>

              <h4 className="font-semibold">
                Yash
              </h4>

              <p className="text-sm text-slate-400">
                Frontend Developer
              </p>

            </div>

          </div>

        </div>

      </div>

    </header>
  );
};

export default Navbar;