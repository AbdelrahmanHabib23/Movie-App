import React from "react";  
import { NavLink } from "react-router-dom";  
import { mobileNavigation } from "../pages/navigtion";  

const MobileNavigation = () => {  
  return (  
    <section className="flex justify-between lg:hidden h-10 bg-black bg-opacity-70 backdrop-blur-2xl fixed bottom-0 w-full z-40">  
      <div className="flex items-center  h-full text-neutral-400">  
        {mobileNavigation.map((nav) => {  
          return (  
            <NavLink  
              key={nav.label + "mobileNavigation"}  
              to={nav.href}  
              className={({ isActive }) =>  
                `px-8 flex   h-full items-center flex-col justify-center ${  
                  isActive ? "text-white" : "text-neutral-400"  
                }`  
              }  
              aria-label={`Navigate to ${nav.label}`}  
            >  
              <div className="text-2xl">{nav.icon}</div>  
              <p className="text-sm">{nav.label}</p>  
            </NavLink>  
          );  
        })}  
      </div>  
    </section>  
  );  
};  

export default MobileNavigation;