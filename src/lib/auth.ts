// If your Prisma file is located elsewhere, you can change the path
import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";

import { prisma } from "@/shared/db/prisma";

export const auth = betterAuth({
    emailAndPassword: { 
        enabled: true, 
    }, 
    database: prismaAdapter(prisma, {
        provider: "postgresql", // or "mysql", "postgresql", ...etc
    }),
});