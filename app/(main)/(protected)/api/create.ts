
//crear primero user y post
"use server"

import { prisma } from "@/lib/prisma";
import { UserWithPost } from "@/types/users";


  // Create a new user with a post
  const createUserWithPost=async({user}:{user:UserWithPost})=>{
    const posts=user.posts
    const userCreated = await prisma.user.create({
    data: {
        id:user.id,
      name: user.name,
      email: user.email,
      post:posts
      
    },
    
  });
  console.log("Created user:", user); 
}

  // Fetch all users with their posts
const fetchUsersWithPosts=async()=>{
  const allUsers = await prisma.user.findMany({
    include: {
      posts: true,
    },
  });
  console.log("All users:", JSON.stringify(allUsers, null, 2));
}

