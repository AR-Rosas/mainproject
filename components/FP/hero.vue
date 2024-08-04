<template>
  <section class="hero relative overflow-hidden py-12 md:py-24 lg:py-32 xl:py-48 flex items-center justify-center">
    <div class="night absolute inset-0">
      <div v-for="n in 20" :key="n" class="shooting_star"></div>
    </div>
    <div class="container relative z-10 px-4 md:px-6 flex flex-col items-center space-y-4">
      <NuxtImg width="82" height="40" src="/meteorlinks.svg" />
      <h1 class="tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none max-w-2xl text-center text-white">
        {{ title }}
        <span class="text-blue-300">{{ subtitle }}</span>
      </h1>
      <p class="text-gray-300 md:text-xl max-w-[700px] text-center">
        {{ description }}
      </p>
      <div class="mt-6">
        <NuxtLink to="/login" class="inline-block">
          <Button size="lg" class="bg-blue-500 hover:bg-blue-600 text-white">{{ buttonText }}</Button>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
const title = 'meteorlinks.';
const subtitle = 'a link sharing platform';
const description = "Welcome to Meteorlinks, where we curate and provide links to the most useful websites. Our goal is to simplify your online experience by offering a one-stop resource for essential tools and information.";
const buttonText = 'Explore now';

</script>

<style scoped>
.hero {
  background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);
  height: 100vh;
}

.night {
  position: relative;
  width: 100%;
  height: 100%;
  transform: rotateZ(45deg);
}

.shooting_star {
  position: absolute;
  left: 50%;
  top: 50%;
  height: 2px;
  background: linear-gradient(-45deg, rgba(95, 145, 255, 1), rgba(0, 0, 255, 0));
  border-radius: 999px;
  filter: drop-shadow(0 0 6px rgba(105, 155, 255, 1));
  animation: 
    tail 3000ms ease-in-out infinite,
    shooting 3000ms ease-in-out infinite;
}

.shooting_star::before,
.shooting_star::after {
  content: "";
  position: absolute;
  top: calc(50% - 1px);
  right: 0;
  height: 2px;
  background: linear-gradient(-45deg, rgba(0, 0, 255, 0), rgba(95, 145, 255, 1), rgba(0, 0, 255, 0));
  border-radius: 100%;
  animation: shining 3000ms ease-in-out infinite;
}

.shooting_star::before {
  transform: translateX(50%) rotateZ(45deg);
}

.shooting_star::after {
  transform: translateX(50%) rotateZ(-45deg);
}

@keyframes tail {
  0% { width: 0; }
  30% { width: 100px; }
  100% { width: 0; }
}

@keyframes shining {
   0% { width: 0; }
  50% { width: 30px; }
  100% { width: 0; }
}

@keyframes shooting {
  0% { transform: translateX(0); }
  100% { transform: translateX(300px); }
}

/* Individual star positioning and delays */
.shooting_star:nth-child(1) { top: calc(50% - 100px); left: calc(50% - 250px); animation-delay: 1000ms; }
.shooting_star:nth-child(1)::before, .shooting_star:nth-child(1)::after { animation-delay: 1000ms; }
.shooting_star:nth-child(2) { top: calc(50% + 50px); left: calc(50% - 200px); animation-delay: 1500ms; }
.shooting_star:nth-child(2)::before, .shooting_star:nth-child(2)::after { animation-delay: 1500ms; }
/* ... Add more individual star styles for the remaining 18 stars ... */
.shooting_star:nth-child(20) { top: calc(50% + 150px); left: calc(50% - 300px); animation-delay: 9500ms; }
.shooting_star:nth-child(20)::before, .shooting_star:nth-child(20)::after { animation-delay: 9500ms; }
</style>