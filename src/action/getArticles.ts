import prisma from '@/lib/prismadb';

export default async function getArticles(){
    const articles = await prisma.articles.findMany({
        include:{
            author:true
        }
    })
    const articleMap = articles.map((data)=>({
        ...data,
        createAt: data.createAt?.toISOString(),
        author: {...data.author}
    }))
    return articleMap
}