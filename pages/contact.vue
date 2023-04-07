<script setup lang="ts">
import { SimplePublicObject } from '@hubspot/api-client/lib/codegen/crm/contacts';

const formData = ref({ firstName: '', lastName: '', message: '', email: '' });

async function onSubmitForm() {
  const body = {
    firstname: formData.value.firstName,
    lastname: formData.value.lastName,
    email: formData.value.email,
    message: formData.value.message,
  };

  try {
    const response = await $fetch<SimplePublicObject>('/api/contact', { method: 'POST', body });
    if (response.id) {
      formData.value.firstName = '';
      formData.value.lastName = '';
      formData.value.email = '';
      formData.value.message = '';
    }
  } catch (err) {
    console.log('error', err);
  }
}
</script>

<template>
  <div class="mx-auto max-w-7xl pt-6 font-thin text-white">
    <h3 class="text-center text-5xl">Get in touch</h3>
    <div class="mx-auto mt-12 flex w-9/12 flex-row justify-between border-[1px] border-white p-12">
      <form @submit.prevent="onSubmitForm" class="w-2/5 space-y-6">
        <input
          required
          id="firstname"
          placeholder="First Name"
          name="firstname"
          type="text"
          v-model="formData.firstName"
          class="w-full border-b-[1px] border-white bg-black py-2 outline-none hover:border-[#00dc81] focus:border-[#00dc81]"
        />
        <input
          required
          id="lastname"
          placeholder="Last Name"
          name="lastname"
          type="text"
          v-model="formData.lastName"
          class="w-full border-b-[1px] border-white bg-black py-2 outline-none hover:border-[#00dc81] focus:border-[#00dc81]"
        />
        <input
          required
          id="email"
          placeholder="E-mail"
          name="email"
          type="email"
          v-model="formData.email"
          class="w-full border-b-[1px] border-white bg-black py-2 outline-none hover:border-[#00dc81] focus:border-[#00dc81]"
        />
        <textarea
          required
          id="message"
          placeholder="Message"
          name="message"
          type="text"
          rows="1"
          maxlength="300"
          v-model="formData.message"
          class="w-full border-b-[1px] border-white bg-black py-2 outline-none hover:border-[#00dc81] focus:border-[#00dc81]"
        ></textarea>
        <button
          type="submit"
          class="w-full border-[1px] border-white px-4 py-3 hover:border-[#00dc81] hover:text-[#00dc81]"
        >
          Send message
        </button>
      </form>
      <div class="w-2/5 text-left">
        <h4 class="text-3xl">Contact</h4>

        <NuxtLink to="https://mail.google.com/mail/?view=cm&fs=1&to=sourish215@gmail.com" target="_blank">
          <p class="text-xl hover:text-[#00dc81]">sourish215@gmail.com</p>
        </NuxtLink>
        <h4 class="mt-10 text-3xl">Based in</h4>
        <p class="text-xl">Kolkata,<br />India</p>
        <div class="mt-12 flex flex-row items-center justify-start gap-x-6">
          <NuxtLink to="https://www.linkedin.com/in/sourish-bhattacharyya-699486135/" target="_blank">
            <img src="/images/linkedin.svg" width="64" height="64" alt="github-logo" class="h-8 w-8" />
          </NuxtLink>
          <NuxtLink to="https://github.com/sourish215" target="_blank">
            <img src="/images/github-mark-white.svg" width="56" height="56" alt="github-logo" class="h-7 w-7" />
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
