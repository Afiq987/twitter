import { NavLink } from "react-router-dom";
import classNames from "classnames";

import { leftSideMenu } from "../../../../utils/consts";

import More from "./more";

import New from "./new";

import { useAccount } from "../../../../store/auth/hooks";
import { useSelector } from "react-redux";

export default function Menu() {
  const account = useAccount();
  const feeds= useSelector(state => state.feed);
  return (
    <nav className="mt-0.5 mb-1" key={account}>
      {leftSideMenu.map((menu, index) => (
        <NavLink
          key={index}
          to={typeof menu.path === "function" ? menu.path() : menu.path}
          className=" block group" >
          {({ isActive }) => (
            <div
              className={classNames(
                "p-3 rounded-full  transition-colors inline-flex items-center gap-5 group-hover:bg-[color:var(--background-third)]",
                {
                  "font-bold": isActive,
                }
              )} >
              <div className="w-[1.641rem] h-[1.641rem] relative ">
                {menu?.notificationCount && (
                  <span className="w-[18px] h-[18px] rounded-full bg-[color:var(--color-primary)] text-white border border-[color:var(--background-primary)] absolute -top-1.5 -right-1 flex items-center justify-center text-[0.688rem] ">
                    {feeds?.length}
                  </span>
                )}
                {!isActive && menu.icon.off}
                {isActive && menu.icon.on}
              </div>
              <div className="pr-4 text-xl hidden lg:block ">
                {menu.title}
              </div>
            </div>
          )}
        </NavLink>
      ))}

      <More />
      <New />
    </nav>
  );
}
