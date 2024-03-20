import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
  <div className="container my-5">
    <Image className="mx-auto" 
    width={100} 
    height={100}
    src="/mrmr.jpg" 
    alt="" />
  </div>
  );
}
