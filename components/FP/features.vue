<template>
  <section class="features">
    <h2 class="text-2xl font-bold mb-6">Key Features</h2>
    <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
      <div v-for="feature in features" :key="feature.title" class="card">
        <div class="card-info">
          <div class="card-icon">{{ feature.icon }}</div>
          <div class="card-title">{{ feature.title }}</div>
          <div class="card-subtitle">{{ feature.description }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const features = [
  {
    title: "File-based Routing",
    description: "Automatically generate routes based on your file structure in the pages directory.",
    icon: "🗂️"
  },
  {
    title: "Server-Side Rendering",
    description: "Out-of-the-box SSR support for improved performance and SEO.",
    icon: "🖥️"
  },
  {
    title: "Auto Imports",
    description: "Use components and composables without explicitly importing them.",
    icon: "📦"
  },
  {
    title: "Hybrid Rendering",
    description: "Mix static and dynamic rendering with flexible route rules.",
    icon: "🔀"
  },
  {
    title: "TypeScript Support",
    description: "First-class TypeScript support with zero configuration needed.",
    icon: "📝"
  },
  {
    title: "Powerful Modules",
    description: "Extend functionality with a rich ecosystem of Nuxt modules.",
    icon: "🧩"
  }
]
</script>

<style scoped>
.card {
  width: 100%;
  aspect-ratio: 1 / 1;
  background: #f5f5f5;
  padding: 1rem;
  transition: box-shadow 0.3s ease, transform 0.2s ease;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.card-info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  transition: transform 0.2s ease;
}

.card-icon {
  font-size: 2rem;
  margin-bottom: 0.5rem;
  transition: transform 0.2s ease;
}

.card-title {
  color: #333;
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.2;
  margin-bottom: 0.25rem;
}

.card-subtitle {
  color: #859ba8;
  font-size: 0.75rem;
  line-height: 1.2;
}

.card:hover {
  box-shadow: 0 4px 20px rgba(35, 35, 35, 0.1);
  transform: translateY(-5px);
}

.card:hover .card-info {
  transform: translateY(-5%);
}

.card:hover .card-icon {
  transform: scale(1.1);
}
</style>