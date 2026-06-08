import { Hero } from "@/components/home/Hero"
import { Categories3D } from "@/components/home/Categories3D"
import { PopularProducts } from "@/components/home/PopularProducts"
import { BrandsCarousel } from "@/components/home/BrandsCarousel"
import { WhyChooseUs } from "@/components/home/WhyChooseUs"
import { DeliverySection } from "@/components/home/DeliverySection"
import { HomeGallery } from "@/components/home/HomeGallery"
import { Reviews } from "@/components/home/Reviews"

export default function Home() {
  return (
    <div className="flex flex-col w-full overflow-x-hidden">
      <Hero />
      <BrandsCarousel />
      <Categories3D />
      <PopularProducts />
      <WhyChooseUs />
      <DeliverySection />
      <HomeGallery />
      <Reviews />
    </div>
  );
}
