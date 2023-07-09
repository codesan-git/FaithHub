'use client'
import { FC,memo } from 'react'
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Image from "next/image"
import { SafeArticles } from "@/type"
import { Authors } from '@prisma/client';

interface ArticlesProps {
    image: string,
    title: string,
    body: string,
    ArticlesData: SafeArticles
}

const Articles: FC<ArticlesProps> = memo(
    function Articles({ image, title, body, ArticlesData }) {
        const router = useRouter();
        return (
            <div onClick={()=>router.push(`/detail-article/${ArticlesData.id}`)}>
                <Card className="w-[350px]">
                    <CardHeader>
                        <Image
                            src={image}
                            alt=""
                            width={1500}
                            height={1500}
                            className='rounded-md'
                        />
                    </CardHeader>
                    <CardContent>
                        <CardTitle>{title}</CardTitle>
                        <CardDescription>{body}</CardDescription>
                    </CardContent>
                </Card>
            </div>
        )
    }
)

export default Articles