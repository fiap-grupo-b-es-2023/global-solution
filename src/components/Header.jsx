import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header className="absolute w-full bg-transparent z-50">
            <nav className="flex justify-center space-x-8 py-4">
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive
                            ? "text-black border-b-2 border-black pb-1"
                            : "text-black hover:border-b-2 hover:border-gray-500 pb-1"
                    }
                >
                    Home
                </NavLink>
                <NavLink
                    to="/problema"
                    className={({ isActive }) =>
                        isActive
                            ? "text-black border-b-2 border-black pb-1"
                            : "text-black hover:border-b-2 hover:border-gray-500 pb-1"
                    }
                >
                    O Problema
                </NavLink>
            </nav>
        </header>
    );
};

export default Header;
