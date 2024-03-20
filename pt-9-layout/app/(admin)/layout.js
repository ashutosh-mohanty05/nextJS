import { Inter } from "next/font/google";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Admin: Facebook",
  description: "Admin Page: Facebook is a social utility that connects people",
};

export default function AdminLayout({ children }) {
  return (
    <>
        <span>Admin Navbar</span>
        {children}
       
    </>
  );
}
