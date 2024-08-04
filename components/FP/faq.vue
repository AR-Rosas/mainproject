<template>
  <div class="flex justify-start items-center min-h-screen p-4">
    <div class="w-1/2 m-4 p-4 bg-white shadow-md rounded-lg">
      <UAccordion :items="items" multiple>
        <template #default="{ item, index, open }">
          <UButton color="gray" variant="ghost" class="border-b border-gray-200 dark:border-gray-700" :ui="{ rounded: 'rounded-none', padding: { sm: 'p-6' } }">
            <span class="truncate">{{ index + 1 }}. {{ item.label }}</span>

            <template #trailing>
              <UIcon
                name="i-heroicons-chevron-right-20-solid"
                class="w-5 h-5 ms-auto transform transition-transform duration-200"
                :class="[open && 'rotate-90']"
              />
            </template>
          </UButton>
        </template>
      </UAccordion>
    </div>
  </div>
</template>

<script setup>
const items = [
  {
    label: 'What is SaaS?',
    content: 'SaaS stands for Software as a Service. It is a software distribution model in which a third-party provider hosts applications and makes them available to customers over the internet.',
    defaultOpen: false
  },
  {
    label: 'What are the benefits of using SaaS?',
    content: 'SaaS offers several benefits, including cost savings, scalability, accessibility from anywhere, automatic updates, and reduced IT infrastructure needs.',
    defaultOpen: false
  },
  {
    label: 'How does SaaS pricing work?',
    content: 'SaaS pricing is typically subscription-based, with customers paying a recurring fee (usually monthly or annually) to use the software. Pricing can vary based on features, number of users, and other factors.',
    defaultOpen: false
  },
  {
    label: 'What are some common examples of SaaS applications?',
    content: 'Some common examples of SaaS applications include Google Workspace (formerly G Suite), Microsoft Office 365, Salesforce, Slack, and Zoom.',
    defaultOpen: false
  },
  {
    label: 'How secure is SaaS?',
    content: 'SaaS providers typically implement robust security measures, including data encryption, regular security audits, and compliance with industry standards. However, it is important for users to also follow best security practices.',
    defaultOpen: false
  }
];
</script>


<style scoped>
/* Add any additional styles if needed */
</style>