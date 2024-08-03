<template>
  <UContainer>
    <h1 class="text-2xl font-bold mb-6">Checkout</h1>

    <UCard class="mb-6">
      <template #header>
        <h2 class="text-xl font-semibold">Shipping Information</h2>
      </template>

      <UForm :state="shippingForm">
        <UFormGroup label="First Name" name="firstName">
          <UInput v-model="shippingForm.firstName" />
        </UFormGroup>
        <UFormGroup label="Last Name" name="lastName">
          <UInput v-model="shippingForm.lastName" />
        </UFormGroup>
        <UFormGroup label="Address" name="address">
          <UInput v-model="shippingForm.address" />
        </UFormGroup>
        <UFormGroup label="City" name="city">
          <UInput v-model="shippingForm.city" />
        </UFormGroup>
        <UFormGroup label="Country" name="country">
          <USelect v-model="shippingForm.country" :options="countries" option-attribute="name" />
        </UFormGroup>
        <UFormGroup label="Postal Code" name="postalCode">
          <UInput v-model="shippingForm.postalCode" />
        </UFormGroup>
      </UForm>
    </UCard>

    <UCard class="mb-6">
      <template #header>
        <h2 class="text-xl font-semibold">Order Summary</h2>
      </template>

      <UTable :columns="[
        { key: 'name', label: 'Product' },
        { key: 'quantity', label: 'Quantity' },
        { key: 'price', label: 'Price' },
      ]" :rows="order.items" />

      <div class="mt-4">
        <p>Subtotal: ${{ order.subtotal.toFixed(2) }}</p>
        <p>Shipping: ${{ order.shipping.toFixed(2) }}</p>
        <p>Tax: ${{ order.tax.toFixed(2) }}</p>
        <p class="font-bold">Total: ${{ (order.subtotal + order.shipping + order.tax).toFixed(2) }}</p>
      </div>
    </UCard>

    <UCard class="mb-6">
      <template #header>
        <h2 class="text-xl font-semibold">Payment Information</h2>
      </template>

      <UForm :state="paymentForm">
        <UFormGroup label="Card Number" name="cardNumber">
          <UInput v-model="paymentForm.cardNumber" placeholder="1234 5678 9012 3456" />
        </UFormGroup>
        <UFormGroup label="Expiration Date" name="expirationDate">
          <UInput v-model="paymentForm.expirationDate" placeholder="MM/YY" />
        </UFormGroup>
        <UFormGroup label="CVV" name="cvv">
          <UInput v-model="paymentForm.cvv" placeholder="123" />
        </UFormGroup>
      </UForm>
    </UCard>

    <UButton color="primary" @click="placeOrder">Place Order</UButton>
  </UContainer>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

// Reactive state for order details
const order = reactive({
  items: [
    { name: 'Product 1', price: 19.99, quantity: 2 },
    { name: 'Product 2', price: 29.99, quantity: 1 },
  ],
  subtotal: 69.97,
  shipping: 5.99,
  tax: 7.50,
})

// Reactive state for shipping form
const shippingForm = reactive({
  firstName: '',
  lastName: '',
  address: '',
  city: '',
  country: '',
  postalCode: '',
})

// Reactive state for payment form
const paymentForm = reactive({
  cardNumber: '',
  expirationDate: '',
  cvv: '',
})

// List of countries for the country select input
const countries = [
  { name: 'United States', code: 'US' },
  { name: 'Canada', code: 'CA' },
  { name: 'United Kingdom', code: 'UK' },
  // Add more countries as needed
]

// Function to handle order placement
const placeOrder = () => {
  // Implement order placement logic here
  console.log('Order placed', { shippingForm, paymentForm, order })
}
</script>
