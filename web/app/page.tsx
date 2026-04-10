import { Hero } from "@/components/sections/Hero";
import { BenefitsGrid } from "@/components/sections/BenefitsGrid";
import { CategoryCarousel } from "@/components/sections/CategoryCarousel";
import { FeatureTrio } from "@/components/sections/FeatureTrio";
import { LogoWall } from "@/components/sections/LogoWall";
import { TestimonialSlider } from "@/components/sections/TestimonialSlider";
import { CTABand } from "@/components/sections/CTABand";
import { home } from "@/content/home";
import { benefits } from "@/content/benefits";

export default function HomePage() {
  return (
    <>
      <Hero
        eyebrow={home.hero.eyebrow}
        title={home.hero.title}
        sub={home.hero.sub}
        image={home.hero.image}
        imageAlt={home.hero.imageAlt}
        ctaPrimary={home.hero.ctaPrimary}
        ctaSecondary={home.hero.ctaSecondary}
      />
      <BenefitsGrid
        eyebrow={home.intro.eyebrow}
        title={home.intro.title}
        sub={home.intro.sub}
        items={benefits}
      />
      <CategoryCarousel />
      <FeatureTrio
        eyebrow={home.diferenciadores.eyebrow}
        title={home.diferenciadores.title}
        items={home.diferenciadores.items}
      />
      <LogoWall />
      <TestimonialSlider />
      <CTABand title={home.ctaBand.title} sub={home.ctaBand.sub} cta={home.ctaBand.cta} />
    </>
  );
}
