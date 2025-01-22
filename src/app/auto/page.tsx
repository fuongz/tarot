'use client'

import { Container, Grid, Image } from '@mantine/core'

export default function AutoTarotPage() {
  const cards = [
    {
      id: 1,
      name: 'The sun',
      image: 'the-sun.png',
    },
    {
      id: 2,
      name: 'The star',
      image: 'the-star.png',
    },
    {
      id: 3,
      name: 'The world',
      image: 'the-world.png',
    },
  ]

  return (
    <Container>
      <Grid>
        {cards.map((card) => (
          <Grid.Col key={card.id} span={3}>
            <Image src={`/cards/${card.image}`} alt={card.name} w={200} />
          </Grid.Col>
        ))}
      </Grid>
    </Container>
  )
}
