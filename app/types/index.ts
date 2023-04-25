import { Listing, Reservation, User } from "@prisma/client";

export type SafeListing = Omit<
   Listing,
   "createdAt"
> & {
   createdAt: string;
}

export type safeReservations = Omit<
   Reservation,
   "createdAt" | "startDate" | "endDate" | "listing"
> & {
   createdAt: string;
   startDate: string;
   listing: SafeListing;
}

export type SafeUser = Omit<
   User,
   "createdAt" | "updatedAt" | "emailVerified"
> & {
   createdAt: string;
   updatedAt: string;
   emailVerified: string | null;
}