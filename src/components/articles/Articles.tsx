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
import useNativeLazyLoading from '@charlietango/use-native-lazy-loading';
import { useInView } from 'react-intersection-observer';

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

        const supportsLazyLoading = useNativeLazyLoading();
        const { ref, inView } = useInView({
            triggerOnce: true,
            rootMargin: '200px 0px',
            skip: supportsLazyLoading !== false,
        });

        return (
            <motion.ul variants={container} initial="hidden" animate="visible">
                <motion.li key={ArticlesData.id} onClick={() => router.push(`/detail-article/${ArticlesData.id}`)} variants={item} initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                        ease:"linear",
                        stiffness: 260,
                        damping: 20,
                        duration:2,
                        x:{duration:1},
                    }}>
                    <Card className="w-[350px]">
                        <CardHeader ref={ref}>
                            {
                                inView || supportsLazyLoading ? (
                                    <Image
                                        src={image}
                                        alt=""
                                        width={1500}
                                        height={1500}
                                        className='rounded-md transform transition duration-500 hover:scale-110'
                                    />
                                ) : null
                            }
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