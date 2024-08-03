<template>
  <section class="hero bg-white py-12 md:py-24 lg:py-32 xl:py-48 flex items-center justify-center">
    <div class="container px-4 md:px-6 flex flex-col items-center space-y-4">
      <NuxtImg width="82" height="40" src="/meteorlinks.svg" />
      <h1 class=" tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none max-w-2xl text-center">
        {{ title }}
        <span class="text-blue-500">{{ subtitle }}</span>
      </h1>
      <p class="text-gray-500 md:text-xl max-w-[700px] text-center">
        {{ description }}
      </p>
      <div class="mt-6">
        <NuxtLink to="/login" class="inline-block">
          <Button size="lg">{{ buttonText }}</Button>
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