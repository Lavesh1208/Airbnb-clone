import prisma from "@/app/libs/prismadb";

import getCurrentUser from "./getCurrentUser";

export default async function getFavouriteListings() {
   try {
      const currentUser = await getCurrentUser();

      if (!currentUser) {
         return [];
      }

      const favorites = await prisma.listing.findMany({
         where: {
            id: {
               in: [...(currentUser.favouriteIds || [])]
            }
         }
      });

      const safeFavourites = favorites.map((favourite) => ({
         ...favourite,
         createdAt: favourite.createdAt.toISOString() 
      }))

      return safeFavourites;
   } catch (error: any) {
      throw new Error(error);
   }
}