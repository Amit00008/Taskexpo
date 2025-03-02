"use client";
import { db } from "../util/db";
import { userInfo } from "../util/schema";
import React, { useEffect } from 'react'
import { eq } from "drizzle-orm";
import { useUser } from "@clerk/nextjs";


function Provider({children}) {
    const {user} = useUser();
    const [userData,setUserData] = React.useState([
        {}
    ]);


   
    useEffect(()=>{
      const GetUserDetails = async () => {
        const res = await db.select().from(userInfo)
        .where(eq(userInfo.email,user?.primaryEmailAddress?.emailAddress));
        setUserData(res[0]);
    }

       if (user) {
        GetUserDetails();
       }
    },[user, GetUserDetails]);
  return (
   
   
           <div>
           
            {children}
           </div>
      
  )
}

export default Provider