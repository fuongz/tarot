'use client'

import { Button, Container, Group, Image, Text, Title } from '@mantine/core'
import classes from './Home.module.css'
import image from './../../public/hero-banner.svg'
import Link from 'next/link'
import { motion } from 'motion/react'

export default function Home() {
  return (
    <Container size="md">
      <div className="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]"></div>
      <div className={classes.inner}>
        <div className={classes.content}>
          <Title className={`${classes.title} font-heading`}>
            <span>Enma</span> Tarrot!
          </Title>
          <Text c="dimmed" mt="xl">
            Trong cuộc sống hiện đại, đôi khi chúng ta cần một chút lắng đọng để nhìn lại bản thân và tìm kiếm những lời khuyên cho những quyết định quan trọng.
          </Text>

          <Text c="dimmed" mt="sm">
            Nếu bạn đang tìm kiếm một cách để kết nối với trực giác của mình và khám phá những thông điệp tiềm ẩn, thì xem Tarot có thể là một lựa chọn thú vị.
          </Text>

          <Group mt={30}>
            <Link href="/">
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <Button variant="primary" radius="xl" size="md" className={classes.control}>
                  Coming soon!
                </Button>
              </motion.div>
            </Link>
          </Group>
        </div>
        <Image src={image.src} className={classes.image} alt="" />
      </div>
    </Container>
  )
}
