"use client";
import { avatarPlaceholderUrl, navItems } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface Props {
  fullName: string;
  avatar: string;
  email: string;
}

const Sidebar = ({ fullName, avatar, email }: Props) => {
  const pathname = usePathname();
  return (
    <aside className="sidebar">
      <Link href={"/"}>
        <Image
          src={"/assets/icons/logo-full-brand.svg"}
          alt="logo"
          width={120} /* 160 yerine 130 yazdım. */
          height={50}
          className="hidden h-auto lg:block"
        />

        <Image
          src={"/assets/icons/logo-brand.svg"}
          alt="logo"
          width={45} /* 52 yerine 45 yazdım. */
          height={52}
          className="lg:hidden"
        />
      </Link>

      <nav className="sidebar-nav">
        <ul className="flex flex-1 flex-col gap-3">
          {navItems.map(({ url, name, icon }) => (
            <Link key={name} href={url} className="lg:w-full">
              <li
                className={cn(
                  "sidebar-nav-item",
                  pathname === url && "shad-active"
                )}
              >
                <Image
                  src={icon}
                  alt={name}
                  width={24}
                  height={24}
                  className={cn(
                    "nav-icon",
                    pathname === url && "nav-icon-active"
                  )}
                />
                <p className="hidden lg:block">{name}</p>
              </li>
            </Link>
          ))}
        </ul>
      </nav>
      <Image
        src={"/assets/images/files-2.png"}
        alt="logo"
        width={506}
        height={400}
        className="w-full "
      />
      <div className="sidebar-user-info">
        <Image
          src={avatarPlaceholderUrl}
          alt="avatar"
          width={44}
          height={44}
          className="sidebar-user-avatar"
        />
        <div className="hidden lg:block">
          <p className="subtitle-3z capitalize">{fullName}</p>
          <p className="caption w-[150px] truncate">{email}</p>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
