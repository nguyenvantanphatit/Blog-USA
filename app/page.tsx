import FeaturedCategories from '@/components/FeaturedCategories'
import PromotionSection from '@/components/PromotionSection'
import FeaturedProducts from '@/components/FeaturedProducts'
import TetTraditions from '@/components/TetTraditions'
import GiftIdeas from '@/components/GiftIdeas'
import LuckyDraw from '@/components/LuckyDraw'
import TetRecipes from '@/components/TetRecipes'
import TestimonialSlider from '@/components/TestimonialSlider'
import { metadata as meta } from '@/app/config';
import { createMetadata } from '@/lib/metadata'
import NavBar from '@/components/NavBar'
import Hero from '@/components/Hero'

export const metadata = createMetadata({
  title: {
    absolute: meta.site.title,
    template: `%s | ${meta.site.title}`
  },
  description: meta.site.description,
  twitter: {
    title: meta.site.title,
    description: meta.site.description
  }
});


export default function Home() {
  return (
    <>
      <Hero />
      {/* <NavBar />
      <FeaturedCategories />
      <PromotionSection />
      <FeaturedProducts />
      <GiftIdeas />
      <TetTraditions />
      <LuckyDraw />
      <TetRecipes />
      <TestimonialSlider /> */}
    </>
  )
}

