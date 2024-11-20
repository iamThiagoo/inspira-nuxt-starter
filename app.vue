<script setup lang="ts">
import BlurReveal from './components/inspira/blur/BlurReveal.vue';
import Navbar from './components/app/navbar/Navbar.vue'; // Adicionar esta linha
</script>

<template>
  <main class="flex flex-col w-full min-h-screen dark:bg-zinc-950">
    <Navbar />

    <section class="container max-w-8xl mx-auto">
      <div>
        <BlurReveal :delay="0.2" :duration="0.75" class="min-h-[calc(100vh-5rem)] p-8 text-center flex flex-col justify-center gap-2">
          <h2 class="text-3xl font-bold tracking-tighter xl:text-6xl/none sm:text-5xl -ml-4">Olá, ser humaninho! 👋</h2>
          <RadiantText
            class="text-pretty text-xl tracking-tighter sm:text-3xl -ml-10 transition ease-out hover:text-slate-600 hover:duration-300 hover:dark:text-slate-400"
            :duration="5"> Seja bem-vindo(a) à Página inicial do projeto com Nuxt 3 e Inspira UI!
          </RadiantText>
          <p class="text-slate-600 text-xl tracking-tighter max-w-6xl mx-auto mt-2 text-center">
            Esse projeto não é oficial
            <NuxtLink href="https://nuxt.com/" target="_blank"
              class="font-medium hover:text-emerald-600 hover:opacity-90">Nuxt</NuxtLink>,
            <NuxtLink href="https://www.shadcn-vue.com/" target="_blank"
              class="font-medium hover:text-emerald-600 hover:opacity-90">Shadcn Vue</NuxtLink>
            ou <NuxtLink href="https://inspira-ui.com/" target="_blank"
              class="font-medium hover:text-emerald-600 hover:opacity-90">Inspira UI</NuxtLink>.
            A ideia é disponibilizar um template como base, para ajudar outras pessoas a agilizar esse processo de
            desenvolvimento.
          </p>
        </BlurReveal>
      </div>
    </section>
  </main>
</template>
