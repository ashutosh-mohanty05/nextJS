import { Inter } from "next/font/google";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Logout",
  description: "Admin Page: Facebook is a social utility that connects people",
};

export default function AdminLayout({ children }) {
  return (
    <>
        <span>Admin Logout</span>
        {children}
       
    </>
  );
}
