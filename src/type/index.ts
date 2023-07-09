import { Articles, Authors } from "@prisma/client";

export type SafeArticles = Omit<Articles,"createAt"> & {
    createAt: String | null
    author: Authors
}