import React from "react";
import { Link } from "react-router-dom";

function Features() {
  return (
    <div className="">
      <div class="container mx-auto py-24  ">
       
        <div class="grid items-center grid-cols-1 mb-24 md:grid-cols-2 gap-y-10 md:gap-y-32 gap-x-10 md:gap-x-24 ">
          <div>
            <h2 class="mb-4 text-2xl font-extrabold tracking-tight text-center text-black md:leading-tight sm:text-left md:text-4xl ">
              Clear overview for efficient tracking
            </h2>
            <p class="mb-5 text-base text-center text-black sm:text-left md:text-lg">
              Handle your subscriptions and transactions efficiently with the
              clear overview in Dashboard. Features like the smart search option
              allow you to quickly find any data you’re looking for.
            </p>
            <Link to="/home" class="w-full btn btn-dark btn-lg sm:w-auto">
              Learn More
            </Link>
          </div>
          <div
           
            class=" "
          >
            <img className="rounded-xl"  src="https://images.unsplash.com/photo-1661347333292-b783583d4210?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80://images.unsplash.com/photo-1611963169787-ac9e3a65b27b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="just" />
          </div>
        </div>
        <div class="grid flex-col-reverse items-center grid-cols-1 md:grid-cols-2 gap-y-10 md:gap-y-32 gap-x-10 md:gap-x-24">
          <div class="order-none md:order-2">
            <h2 class="mb-4 text-2xl font-extrabold tracking-tight text-center text-black md:leading-tight sm:text-left md:text-4xl">
              Decide how you integrate Payments
            </h2>
            <p class="mb-5 text-base text-center text-black sm:text-left md:text-lg">
              Love to code? Next to our ready-made and free plugins you can use
              our expansive yet simple API; decide how you integrate Payments
              and build advanced and reliable products yourself from scratch.
            </p>
            <Link to="/home" class="w-full btn btn-dark btn-lg sm:w-auto">
              Learn More
            </Link>
          </div>
          <div
          
            class=" "
          > <img className="rounded-xl" src="https://images.unsplash.com/photo-1590071089561-2087ff1fc418?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=380&q=80://images.unsplash.com/photo-1611963169787-ac9e3a65b27b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="just" /></div>
        </div>
      </div>
    </div>
  );
}

export default Features;
