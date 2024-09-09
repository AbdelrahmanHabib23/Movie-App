// eslint-disable-next-line no-unused-vars
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import usericons from "../assets/user.png";
import { IoSearch } from "react-icons/io5";

const Header = () => {
  const location = useLocation()
  const removespace = location.search.slice(3).split("%20").join(" ")

  const [search, setSearch] = useState(removespace);


  const navigate = useNavigate();
  // eslint-disable-next-line no-unused-vars
  const navigation = [
    {
      label: "TV Shows",
      href: "tv",
    },
    {
      label: "Movies",
      href: "movie",
    },
  ];
  useEffect(() => {
    if (search) {
      navigate(`/search?q=${search}`);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  const handleSumbit = (e) => {
    e.preventDefault();
  };
  return (
    <header  className="fixed top-0 w-full h-16 bg-black bg-opacity-50 z-40">
      <div className="container mx-auto px-10 m-4">
        <Link to={"/"}>
          <img src={logo} alt="logo" width={"150"} />
        </Link>
        <nav className="hideen lg : flex items-center gap-1 pl-40 -mt-8 ml-5">
          {navigation.map((nav, index) => {
            return (
              <div>
                <NavLink
                
                  key={nav.label}
                  to={nav.href}
                  className={({ isActive }) =>
                    `px-2 hover:text-neutral-100 ${
                      isActive && "text-neutral-100"
                    } `
                  }
                >
                  {nav.label}
                </NavLink>
              </div>
            );
          })}
        </nav>
        <div className="">
          <form
            onSubmit={handleSumbit}
            className="  w-8 h-8 gap-10 -mt-5 mr-72 ml-auto"
          >
            <input
              placeholder="Search here..."
              type="text"
              className="bg-transparent px-2  outline-none border-none hidden lg:block"
              onChange={(e) => setSearch(e.target.value)}
              value={search}
            />
            <button className=" flex items-center justify-center text-2xl w-12 h-12 -mt-9 ml-56 ">
              <IoSearch />
            </button>
          </form>
          <div className=" items-center w-8 h-8  -mt-9 ml-auto rounded-full overflow-hidden active:scale-50 transition-all cursor-pointer">
            <img src={usericons} alt="" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
