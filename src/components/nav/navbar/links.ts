type LinkType = {
  label: string;
  route: string;
};

export type NavType = LinkType & { subRoutes?: LinkType[] };

export const links: NavType[] = [
  { label: "Home", route: "/" },
  { label: "Shop", route: "/shop", subRoutes: [] },
  { label: "About", route: "/about" },
  { label: "Blog", route: "/blog" },
  { label: "Contact", route: "/contact" },
  { label: "Pages", route: "/pages" },
];

export const mobileLinks: NavType[] = [
  { label: "Home", route: "/" },
  { label: "Product", route: "/product" },
  { label: "Pricing", route: "/Pricing" },
  { label: "Contact", route: "/contact" },
];
