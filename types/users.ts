import { z } from "zod";

export const PostSchema = z.object({
 id: z.number().int(),
  userId: z.string(),
  title: z.string(),
  content: z.string(),
  createdAt: z.date(), // o z.coerce.date() si quieres Date
  likes: z.number().int().nullable().optional(), // Int?
  imageUrl: z.string().url().nullable().optional(), // String?
});

export const UserSchema = z.object({
  id: z.string(),
  email: z.string(),
  name: z.string(),
  createdAt: z.date(), // o z.coerce.date()
  posts: z.array(PostSchema),
});

// 👇 array de users
export const UsersSchema = z.array(UserSchema);
export type Post = z.infer<typeof PostSchema>;
export type User = z.infer<typeof UserSchema>;
export type Users = z.infer<typeof UsersSchema>;