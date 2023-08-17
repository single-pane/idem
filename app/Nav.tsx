"use client";
import React, { useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import {
  Avatar,
  Badge,
  Button,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Spinner,
  Switch,
} from "@nextui-org/react";
import NextLink from "next/link";
import { useTheme } from "next-themes";
import { useSelectedLayoutSegment } from "next/navigation";

const SunIcon = (
  props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) => (
  <svg
    aria-hidden="true"
    focusable="false"
    height="1em"
    role="presentation"
    viewBox="0 0 24 24"
    width="1em"
    {...props}
  >
    <g fill="currentColor">
      <path d="M19 12a7 7 0 11-7-7 7 7 0 017 7z" />
      <path d="M12 22.96a.969.969 0 01-1-.96v-.08a1 1 0 012 0 1.038 1.038 0 01-1 1.04zm7.14-2.82a1.024 1.024 0 01-.71-.29l-.13-.13a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.984.984 0 01-.7.29zm-14.28 0a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a1 1 0 01-.7.29zM22 13h-.08a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zM2.08 13H2a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zm16.93-7.01a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a.984.984 0 01-.7.29zm-14.02 0a1.024 1.024 0 01-.71-.29l-.13-.14a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.97.97 0 01-.7.3zM12 3.04a.969.969 0 01-1-.96V2a1 1 0 012 0 1.038 1.038 0 01-1 1.04z" />
    </g>
  </svg>
);

const MoonIcon = (
  props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) => (
  <svg
    aria-hidden="true"
    focusable="false"
    height="1em"
    role="presentation"
    viewBox="0 0 24 24"
    width="1em"
    {...props}
  >
    <path
      d="M21.53 15.93c-.16-.27-.61-.69-1.73-.49a8.46 8.46 0 01-1.88.13 8.409 8.409 0 01-5.91-2.82 8.068 8.068 0 01-1.44-8.66c.44-1.01.13-1.54-.09-1.76s-.77-.55-1.83-.11a10.318 10.318 0 00-6.32 10.21 10.475 10.475 0 007.04 8.99 10 10 0 002.89.55c.16.01.32.02.48.02a10.5 10.5 0 008.47-4.27c.67-.93.49-1.519.32-1.79z"
      fill="currentColor"
    />
  </svg>
);

export default function Nav() {
  const { data: session, status } = useSession();
  const { user } = session || {};
  const isSubscribed = user?.subscriptionStatus === "active" || false;
  const segment = useSelectedLayoutSegment();
  const { theme, setTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} className="mt-2">
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <svg viewBox="0 0 24 24" style={{ height: 32 }}>
            <path
              d="M17 12h-2V3H9v9H7V9H2v8h5v-4h2v9h6v-9h2v6h5V6h-5zM6 16H3v-6h3zm8 5h-4V4h4zm7-14v11h-3V7z"
              fill={theme === "dark" ? "#FFFFFF" : "#100F13"}
            />
          </svg>
          <Link
            href="/"
            as={NextLink}
          >
          <p className="font-bold text-inherit hidden sm:flex pl-2">
            IDEM
          </p>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-6" justify="center">
        <NavbarItem isActive={segment === "Portfolio"}>
          <Link
            color={segment === "Portfolio" ? undefined : "foreground"}
            href="/"
            as={NextLink}
          >
            Portfolio
          </Link>
        </NavbarItem>
        <NavbarItem isActive={segment === "posts"}>
          <Link
            color={segment === "posts" ? undefined : "foreground"}
            href="/posts"
            as={NextLink}
          >
            Feed
          </Link>
        </NavbarItem>
        <NavbarItem isActive={segment === "subscribe"}>
          <Link
            color={segment === "subscribe" ? undefined : "foreground"}
            href="/subscribe"
            as={NextLink}
          >
            Subscribe
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <Switch
          isSelected={theme === "dark"}
          onChange={(e) => setTheme(theme === "dark" ? "light" : "dark")}
          thumbIcon={({ isSelected, className }) =>
            isSelected ? (
              <MoonIcon className={className} />
            ) : (
              <SunIcon className={className} />
            )
          }
        />
        {session ? (
          <>
            {isSubscribed ? (
              <Badge
                disableOutline
                content="PRO"
                size="md"
                color="primary"
                className="font-bold text-xs py-1 px-2"
              >
                {user?.image ? (
                  <Avatar src={user.image as string} />
                ) : (
                  <Avatar name={user?.name?.charAt(0) as string} />
                )}
              </Badge>
            ) : user?.image ? (
              <Avatar src={user.image as string} />
            ) : (
              <Avatar name={user?.name?.charAt(0) as string} />
            )}
            <Button variant="light" onClick={() => signOut()}>
              Sign out
            </Button>
          </>
        ) : (
          <NavbarItem>
            <Button variant="flat" onClick={() => signIn()} color="primary">
              {status && status === "loading" ? (
                <Spinner color="primary" size="sm" />
              ) : (
                "Login"
              )}
            </Button>
          </NavbarItem>
        )}
      </NavbarContent>

      <NavbarMenu>
        <NavbarMenuItem>
          <Link
            style={{
              minWidth: "100%",
              color: "inherit",
              fontWeight: segment === "(home)" ? "bold" : "normal",
            }}
            href="/"
            as={NextLink}
          >
            Home
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link
            style={{
              minWidth: "100%",
              color: "inherit",
              fontWeight: segment === "posts" ? "bold" : "normal",
            }}
            href="/posts"
            as={NextLink}
          >
            Feed
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link
            style={{
              minWidth: "100%",
              color: "inherit",
              fontWeight: segment === "subscribe" ? "bold" : "normal",
            }}
            href="/subscribe"
            as={NextLink}
          >
            Subscribe
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
