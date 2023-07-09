'use client'
import { FC, memo } from 'react'
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Image from "next/image"
import { SafeArticles } from "@/type"

interface ArticlesProps {
    image: string,
    title: string,
    body: string,
    ArticlesData: SafeArticles
}

const Articles: FC<ArticlesProps> = memo(
    function Articles({ image, title, body, ArticlesData }) {
        const router = useRouter();

        const container = {
            hidden: { opacity: 1, scale: 0 },
            visible: {
                opacity: 1,
                scale: 1,
                transition: {
                    delayChildren: 0.3,
                    staggerChildren: 0.2
                }
            }
        };

        const item = {
            hidden: { y: 20, opacity: 0 },
            visible: {
                y: 0,
                opacity: 1
            }
        };

        return (
            <motion.ul variants={container} initial="hidden" animate="visible">
                <motion.li key={ArticlesData.id} onClick={() => router.push(`/detail-article/${ArticlesData.id}`)} variants={item} initial={{ scale: 0 }}
                    animate={{ rotate: 360, scale: 1 }}
                    transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 20
                    }}>
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
                </motion.li>
            </motion.ul>
        )
    }
)

export default Articles