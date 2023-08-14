<template>
  <div>
    <!-- <h1 class="text-3xl font-bold underline">
    Hello world!
    </h1> -->
  <!-- Nav bar -->
  <section class="flex justify-between m-10 items-center">
    <div>
      <img class="object-contain" src="/logo.png" />
    </div>
    <div>
      <button class="bg-primary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
        Try for Free
      </button>
    </div>
  </section>
  

  <!-- Section 1 -->
  <section class="relative hidden lg:grid grid-cols-3">
    <div class="bg-pale-yellow flex flex-col justify-center lg:p-24 p-32 col-span-2 sm:h-screen">
      <p class="text-xl py-2">Your <span class="text-secondary"> Dormot </span> app is here!</p>
      <p class="text-lg sm:text-2xl lg:text-4xl xl:text-6xl font-bold md:pr-28 py-2 ">Your <span class="text-primary">one-stop service</span> for domestic needs</p>
      <p class="text-lg font-extralight md:pr-36 py-2">Say goodbye to the hassle of searching for reliable service providers or waiting in long lines at the grocery store.</p>
      <div class="flex items-center gap-3">
        <p class="text-lg">Available on Android and IOS</p>
        <div class="w-4 h-4 md:w-8 md:h-8 bg-primary rounded-full flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 24 25" fill="none">
            <path d="M23.9297 12.5L12.9023 23.5273L11.8477 22.4727L21.0703 13.25H0V11.75H21.0703L11.8477 2.52734L12.9023 1.47266L23.9297 12.5Z" fill="#F4F4F4"/>
          </svg>
        </div>
      </div>
    </div>
    <div class="relative flex items-end sm:ml-[-150px]">
      <img src="/hand.png" class="w-[200%]"/>
    </div>
  </section>
  <section class="grid sm:grid-cols-1 justify-items-end lg:hidden bg-pale-yellow sm:px-8">
    <div class="py-6 px-12">
      <p class="text-xl sm:text-2xl pb-2">Your <span class="text-secondary"> Dormot </span> app is here!</p>
      <p class="text-xl sm:text-4xl font-bold">Your <span class="text-primary">one-stop service</span> for domestic needs</p>
      <p class="font-extralight sm:text-xl py-2">Say goodbye to the hassle of searching for reliable service providers or waiting in long lines at the grocery store.</p>
      <div class="flex items-center gap-4 py-2">
        <p class="text-xl">Available on Android and IOS</p>
        <div class="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 24 25" fill="none">
            <path d="M23.9297 12.5L12.9023 23.5273L11.8477 22.4727L21.0703 13.25H0V11.75H21.0703L11.8477 2.52734L12.9023 1.47266L23.9297 12.5Z" fill="#F4F4F4"/>
          </svg>
        </div>
      </div>
    </div>
    <div class="flex justify-center">
      <img src="/hand.png" class="lg:w-[200%] w-7/12"/>
    </div>
  </section>
  <!-- <section class="relative grid md:grid-cols-3">
    <div class="bg-pale-yellow flex flex-col justify-center p-24 col-span-2 h-screen">
      <p class="text-xl pb-2">Your <span class="text-secondary"> Dormot </span> app is here!</p>
      <p class="text-2xl md:text-6xl font-bold">Your <span class="text-primary">one-stop service</span></p>
      <p class="text-2xl md:text-6xl font-bold pb-2">for domestic needs</p>
      <p>Say goodbye to the hassle of searching for reliable service providers or waiting in long lines at the grocery store.</p>
      <p>Available on Android and IOS</p>
    </div>
    <div class="absolute -right-1/4 top-24">
      <img src="/hand.png" class="w-[120rem]	 h-screen object-contain"/>
    </div>
  </section> -->

  <!-- Section 2 -->
  <section class="flex items-center grid md:grid-cols-2 gap-10 m-10 md:m-24">
    <div>
      <p class="text-2xl lg:text-5xl font-bold">Why Dormot?</p>
    </div>
    <div class="flex justify-around gap-4 md:gap-6 lg:gap-8">
      <p class="font-sans text-lg md:text-sm lg:text-2xl">I am a business</p>
      <p class="font-sans font-normal text-lg md:text-sm lg:text-2xl text-primary border-b-2 border-primary flex items-center justify-center">  I need a service  </p>
    </div>
  </section>

  <!-- Section 3 -->
  <section class="grid md:grid-cols-2 m-10 md:m-24">
    <div class="basis-2/4">
      <img src="/search.png" class="w-8/12 h-100 object-contain mx-auto md:mx-0"/>
    </div>
    <div class="basis-2/4 flex flex-col justify-center p-2">
      <p class="text-2xl  lg:text-5xl mb-2">Ease</p>
      <p class="text-gray-600 text-xl md:text-base lg:text-3xl font-extralight">Dormot is easy to use; you can do amazing things on the Dormot App with just a few clicks. It’s not hard, it’s Dormot.</p>
    </div>
  </section>

    <!-- Section 4 -->
    <section class="grid md:grid-cols-2 m-10 md:m-24 gap-4">
      <div class="basis-2/4 flex flex-col justify-center">
        <p class="font-sans text-2xl  lg:text-5xl mb-2">Routine</p>
        <p class="text-gray-600 text-xl md:text-base lg:text-3xl font-extralight">Set up your preferences once, and you do not have to worry about scheduling. Your preferences will be recognized, and a suitable routine will be set for you.</p>
      </div>
      <div class="basis-2/4 order-first md:order-last flex items-end justify-end">
        <img src="/checkout.png" class="w-8/12 h-100 object-contain mx-auto md:mx-0 "/>
      </div>
  </section>

    <!-- Section 5 -->
    <section class="grid md:grid-cols-2 m-10 md:m-28">
      <div class="basis-2/4">
        <img src="/reviews.png" class="w-8/12 h-100 object-contain mx-auto md:mx-0"/>
      </div>
      <div class="basis-2/4 flex flex-col justify-center p-2">
        <p class="font-sans text-2xl  lg:text-5xl mb-2">Quality assurance</p>
        <p class="text-gray-600 text-xl md:text-base lg:text-3xl font-extralight">Dormot is built with safety in mind, so we vet vendors and customers to ensure that everyone is who they say they are and are willing to follow community guidelines. Our vetting process is dynamic, ensuring that you’re always protected.</p>
      </div>
    </section>

  <!-- Section 6 -->
  <section class="bg-pale-yellow">
    <div class="m-10 md:p-12 hidden md:block">
      <p class="md:text-4xl lg:text-6xl font-bold flex justify-center">How <span class="text-secondary px-2"> Dormot </span> works for you!</p>
      <div class="m-10 md:m-8 grid md:grid-cols-3 gap-4 justify-items-center">
        <div>
          <img src="/splash.png" class="w-64 h-full object-contain mx-auto md:mx-0"/>
        </div>
        <div>
          <img src="/explore.png" class="w-64 h-full object-contain mx-auto md:mx-0"/>
        </div>
        <div>
          <img src="/reviews.png" class="w-64 h-full object-contain mx-auto md:mx-0"/>
        </div>
      </div>
      <div class="bg-green grid md:grid-cols-3 rounded-lg p-8 text-center">
        <div class="grid grid-cols-1 justify-items-center">
          <div class="flex items-center justify-center w-8 h-8 bg-primary-2 rounded-full text-center">
            <span class="text-primary text-lg font-semibold">1</span>
          </div>
          <div class="text-white text-sm lg:text-xl p-2 lg:px-12">
            <p class="font-bold py-2">Install Dormot</p>
            <p class="font-light">Create an account and fund your wallet</p>
          </div>
        </div>
        <div class="grid grid-cols-1 justify-items-center">
          <div class="flex items-center justify-center w-8 h-8 bg-primary-2 rounded-full text-center">
            <span class="text-primary text-lg font-semibold">2</span>
          </div>
          <div class="text-white text-sm lg:text-xl p-2 lg:px-12">
            <p class="font-bold py-2">Find a service</p>
            <p class="font-light">Choose from our vetted service providers</p>
          </div>
        </div>
        <div class="grid grid-cols-1 justify-items-center">
          <div class="flex items-center justify-center w-8 h-8 bg-primary-2 rounded-full">
            <span class="text-primary text-lg font-semibold">3</span>
          </div>
          <div class="text-white text-sm lg:text-xl p-2 lg:px-12">
            <p class="font-bold py-2">Book service</p>
            <p class="font-light">Enjoy the ease of booking with Dormot</p>
          </div>
        </div>
      </div>
    </div>
    <div class="md:hidden p-4 grid">
      <p class="text-2xl md:text-6xl font-bold py-5 text-center">How <span class="text-secondary"> Dormot </span> works for you!</p>
      <div class="mx-10 md:mx-8 grid md:grid-cols-3 gap-4 justify-items-center">
        <div>
          <img src="/splash.png" class="w-64 h-full object-contain mx-auto md:mx-0"/>
        </div>
        <div class="bg-green grid grid-cols-1 justify-items-center text-center rounded-lg p-4 sm:p-8 w-84">
          <div class="flex items-center justify-center w-8 h-8 bg-primary-2 rounded-full text-center">
            <span class="text-primary text-lg font-semibold">1</span>
          </div>
          <div class="text-white text-xl p-4 px-4">
            <p class="font-bold p-2">Install Dormot</p>
            <p class="font-light">Create an account and fund your wallet</p>
          </div>
        </div>
        <div>
          <img src="/explore.png" class="w-64 h-full object-contain mx-auto md:mx-0"/>
        </div>
        <div class="bg-green grid grid-cols-1 justify-items-center text-center rounded-lg p-4 sm:p-8 w-84">
          <div class="flex items-center justify-center w-8 h-8 bg-primary-2 rounded-full">
            <span class="text-primary text-lg font-semibold">2</span>
          </div>
          <div class="text-white text-xl p-4 px-4">
            <p class="font-bold p-2">Find a service</p>
            <p class="font-light">Choose from our vetted service providers</p>
          </div>
        </div>
        <div>
          <img src="/reviews.png" class="w-64 h-full object-contain mx-auto md:mx-0"/>
        </div>
        <div class="bg-green grid grid-cols-1 justify-items-center text-center rounded-lg p-4 sm:p-8 w-84">
          <div class="flex items-center justify-center w-8 h-8 bg-primary-2 rounded-full">
            <span class="text-primary text-lg font-semibold">3</span>
          </div>
          <div class="text-white text-xl p-4 px-4">
            <p class="font-bold p-2">Book service</p>
            <p class="font-light">Enjoy the ease of booking with Dormot</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="bg-black2 px-12 py-4 lg:py-12">
    <div class="text-center py-2 lg:py-8">
      <p class="text-white text-2xl sm:text-4xl lg:text-6xl font-bold sm:py-2">Do amazing things with <span class="text-primary-2"> Dormot </span> today!</p>
      <p class="text-white text-lg sm:text-2xl lg:text-4xl font-bold sm:py-2">Download dormot mobile app</p>
    </div>
    <div>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 justify-items-center py-8 md:py-4">
        <div class="text-white sm:justify-self-end">
          <button class="border-2 border-primary-2 flex items-center rounded-lg p-2 text-sm sm:text-xl">
            <img src="/google.png" alt="" class="w-6 h-6 mr-2"> 
            <span>Download on Appstore</span>
          </button>
        </div>
        <div class="text-white sm:justify-self-start">
          <button class="border-2 border-primary-2 flex items-center rounded-lg p-2 text-sm sm:text-xl">
            <img src="/apple.png" alt="" class="w-6 h-6 mr-2">
            <span>Download on Playstore</span>
          </button>
        </div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 md:p-12">
        <div class="text-white md:justify-self-start md:ml-5">
          <p class="text-center md:text-left">Your Dormot. All rights reserved. 2023</p>
        </div>
        <div class="text-white flex justify-center md:justify-end order-first md:order-last">
          <img src="/twitter.png" alt="" class="w-6 h-6 mx-2">
          <img src="/instagram.png" alt="" class="w-6 h-6 mx-2">
          <img src="/linkedin.png" alt="" class="w-6 h-6 mx-2">
        </div>
      </div>
    </div>
  </section>
  
  </div>
</template>

<script>
import appleSvg from 'assets/svg/apple.svg';
import googleSvg from 'assets/svg/google.svg';

export default {
  name: 'IndexPage',
  data() {
    return {
      appleSvg1: appleSvg,
      googleSvg1: googleSvg,
    };
  },
}
</script>