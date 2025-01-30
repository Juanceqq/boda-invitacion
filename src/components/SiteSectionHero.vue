<template>
  <SiteSection>
    <template #background>
      <div class="h-screen w-full">
        <img ref="backgroundEl" src="@/assets/images/texture.webp" class="h-screen w-full object-cover" />
      </div>
    </template>
    <template #container>
      <div
        class="h-screen flex flex-col gap-10 lg:gap-0 lg:grid md:grid-rows-1 md:grid-cols-4 items-center justify-center lg:py-0 lg:px-32 xl:px-44 select-none">
        <div ref="coupleImage" class="flex lg:col-span-2 ">

          <div
            class="bg-primary relative w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] xl:w-[600px] xl:h-[600px] rounded-full pointer-events-none">
            <img src="@/assets/images/gold-textured-background.webp" class="h-full w-full rounded-full" />
            <img src="@/assets/images/wedding.webp"
              class="absolute top-0 h-full w-full p-2 object-cover rounded-full z-10" />
          </div>
        </div>
        <div class="lg:col-span-2 text-center  lg:pt-0">
          <div class="flex flex-col items-center gap-4">

            <p ref="titleOne" class="text-3xl lg:text-5xl text-secondary font-luxury">Ven a celebrar con nosotros</p>

            <span ref="coupleNames" class=" text-5xl lg:text-8xl text-primary font-roca">
              <span class="text-secondary">JORGE &</span> ADRIANA
            </span>

            <div ref="titleDivision" class="w-3/5  h-1 lg:h-2 ">
              <img src="@/assets/images/gold-textured-background.webp" class="h-full w-full object-cover" />
            </div>
            <p ref="titleTwo" class="text-xl md:text-2xl lg:text-3xl w-11/12 md:w-3/4 text-secondary font-tt">Bajo el
              cielo estrellado
              de
              Cuernavaca,
              dos corazones se convertirán en uno</p>
            <div class="flex items-center justify-center gap-5 lg:gap-10 font-roca text-secondary  lg:pt-5">
              <div ref="daysEl" class="flex flex-col items-center justify-center text-center">
                <span class="text-xl lg:text-3xl">{{ days }} </span>
                <span class="text-lg lg:text-xl">Dias</span>
              </div>
              <div ref="hoursEl" class="flex flex-col items-center justify-center text-center">
                <span class="text-xl lg:text-3xl">{{ hours }}</span>
                <span class="text-lg lg:text-xl">Horas</span>
              </div>
              <div ref="minutesEl" class="flex flex-col items-center justify-center text-center">
                <span class="text-xl lg:text-3xl">{{ minutes }}</span>
                <span class="text-lg lg:text-xl">Minutos</span>
              </div>
              <div ref="secondsEl" class="flex flex-col items-center justify-center text-center">
                <span class="text-xl lg:text-3xl">{{ seconds }}</span>
                <span class="text-lg lg:text-xl">Segundos</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>

  </SiteSection>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
import SiteSection from '@/components/SiteSection.vue';
import { days, hours, minutes, seconds } from '@/utils/daysToWedding';
import gsap from 'gsap'

export default defineComponent({
  name: "SiteSectionHero",

  components: {
    SiteSection,
  },

  setup() {

    const backgroundEl = ref(null)
    const coupleImage = ref(null)
    const titleOne = ref(null)
    const coupleNames = ref(null)
    const titleDivision = ref(null)
    const titleTwo = ref(null)
    const daysEl = ref(null)
    const hoursEl = ref(null)
    const minutesEl = ref(null)
    const secondsEl = ref(null)

    onMounted(() => {
      const titleElements = [titleOne.value, coupleNames.value, titleDivision.value, titleTwo.value]
      const countdownElements = [daysEl.value, hoursEl.value, minutesEl.value, secondsEl.value]

      const tl = gsap.timeline({
        delay: 0.2
      })

      gsap.set(backgroundEl.value, {
        opacity: 0,
        y: 100
      })

      gsap.set(coupleImage.value, {
        opacity: 0
      })

      tl.to(backgroundEl.value, {
        opacity: 1,
        y: 0,
        duration: 2,
        ease: 'expo.in'
      })

      tl.to(coupleImage.value, {
        opacity: 1,
        duration: 1
      })

      tl.fromTo(
        titleElements,
        {
          y: 200,
          rotationX: -90,
        },
        {
          ease: 'expo.out',
          y: 0,
          rotationX: 0,
          duration: 2,
          stagger: 0.1,
        }
      )

      tl.fromTo(
        countdownElements,
        {
          y: 50,
          opacity: 0,
        },
        {
          ease: 'expo.out',
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.1,
        }
      )
    })

    return {
      seconds,
      minutes,
      hours,
      days,
      backgroundEl,
      coupleImage,
      titleOne,
      coupleNames,
      titleDivision,
      titleTwo,
      daysEl,
      hoursEl,
      minutesEl,
      secondsEl,
    }
  }
})
</script>
