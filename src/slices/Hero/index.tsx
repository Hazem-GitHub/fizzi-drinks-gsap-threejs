"use client";

import { FC } from "react";
import { asText, Content } from "@prismicio/client";
import { PrismicImage, PrismicRichText, SliceComponentProps } from "@prismicio/react";

import { Bounded } from "@/components/Bounded";
import Button from "@/components/Button";
import { TextSplitter } from "@/components/TextSplitter";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { View } from "@react-three/drei";
import Scene from "./Scene";
import { Bubbles } from "./Bubbles";
import { useStore } from "@/hooks/useStore";
import { useMediaQuery } from "@/hooks/useMediaQuery";

gsap.registerPlugin(useGSAP, ScrollTrigger);


/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero: FC<HeroProps> = ({ slice }) => {

  const ready = useStore((state) => state.ready);
  const isDesktop = useMediaQuery("(min-width: 768px)", true); // Server fallback

  useGSAP(() => {
    if (!ready && isDesktop) return;
    
    const introTL = gsap.timeline()

    introTL
      .set('.hero', { opacity: 1 })
      .from(".hero-header-word", {
        scale: 3,
        opacity: 0,
        ease: "power4.in",
        delay: 0.3,
        stagger: 1,
      })
      .from(".hero-subheading", {
        opacity: 0,
        y: 30
      }, "+=0.8")
      .from(".hero-body", {
        opacity: 0,
        y: 10,
      })
      .from(".hero-button", {
        opacity: 0,
        y: 10,
        duration: 0.6,
      })
    
    const scrollTL = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom bottom",
        scrub: 1.5,
      }
    })
    scrollTL
      .fromTo('body', {
        backgroundColor: '#fef9c2',
      }, {
        backgroundColor: '#d9f99d',
        overwrite: 'auto',
        duration: 1,
        ease: "power1.inOut",
      }, 1)
      .from('.text-side-heading .split-char', {
        scale: 1.3,
        y: 40,
        rotate: -25,
        opacity: 0,
        stagger: 0.1,
        ease: 'back.out(3)',
        duration: 0.5
      })
      .from('.text-side-body', {
        y: 20,
        opacity: 0,
    })
  }, { dependencies: [ready, isDesktop] });

  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="hero opacity-0"
    >
      {/* View Scene */}
      {
        isDesktop && (
          <View className="hero-scene pointer-events-none sticky top-0 z-50 -mt-[100vh] hidden h-screen w-screen md:block">
            <Scene />
            <Bubbles />
          </View>
        )
      }

      <div className="grid">
        <div className="grid h-screen place-items-center">
          <div className="grid auto-rows-min place-items-center text-center">
            <h1 className="hero-header lg:text-[13rem] md:text-[9rem] text-7xl font-black uppercase leading-[.8] text-blue-950">
              <TextSplitter text={asText(slice.primary.heading)} wordDisplayStyle="block" className="hero-header-word" />
            </h1>
            <div className="hero-subheading mt-12 text-5xl lg:text-6xl font-semibold text-blue-950">
              <PrismicRichText field={slice.primary.subheading} />
            </div>
            <div className="hero-body text-2xl font-normal text-blue-950">
              <PrismicRichText field={slice.primary.body} />
            </div>
            <Button buttonLink={slice.primary.button_link} buttonText={slice.primary.button_text} className="hero-button mt-12" />
          </div>
        </div>
        <div className="grid text-side relative z-[80] h-screen items-center gap-4 md:grid-cols-2">
          <PrismicImage className="md:hidden w-full" field={slice.primary.cans_image} />
          <div>
            <h2 className="text-side-heading text-balance font-black text-6xl lg:text-8xl uppercase text-blue-950">
                <TextSplitter text={asText(slice.primary.second_heading)} />
            </h2>
            <div className="text-side-body mt-4 max-w-xl text-balance font-normal text-blue-950">
              <PrismicRichText field={slice.primary.second_body} />
            </div>
          </div>
        </div>
      </div>
    </Bounded>
  );
};

export default Hero;
