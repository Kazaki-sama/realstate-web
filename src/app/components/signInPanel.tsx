import prisma from '@/lib/prisma'
import { getKindeServerSession, LoginLink, LogoutLink, RegisterLink } from '@kinde-oss/kinde-auth-nextjs/server'
import { Button } from '@nextui-org/react' 
import React from 'react'
import UserProfilePanel from './userProfilePanel'

const signInPanel=async()=>{
   const {isAuthenticated, getUser}=await getKindeServerSession()
   const user = await getUser()
   const dbUser = await prisma.user.findUnique({
    where:{
        id:user?.id,
    }
   })
   if (await isAuthenticated()) return <>{dbUser !! && <UserProfilePanel user={dbUser}/>}</>
 

   return (
    <div className='flex gap-2'>
    <Button color="primary">
        <LoginLink>Sign In</LoginLink>
    </Button>
    <Button>
        <RegisterLink>Register now</RegisterLink>
    </Button>
    </div>)
}

export default signInPanel
