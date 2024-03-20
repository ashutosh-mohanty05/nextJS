"use client"
import {submitAction} from "@/action/form"
import { useRef } from "react";
export default function Home() {
let ref= useRef()
  return (
   <div className="w-2/3 mx-auto my-12">
    <form ref={ref} action={(e)=>{submitAction(e); ref.current.reset()}}>
      <div>
        <label htmlFor="name">name</label>
        <input name="name" className="text-black" type="text" />
      </div>
      <div>
      <label htmlFor="add">address</label>
        <input name="add" className="text-black" type="text" />
      </div>
      <div>
        <button>Submit</button>
      </div>
    </form>
   </div>
  );
}
