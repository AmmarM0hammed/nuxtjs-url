<script setup>

</script>

<template>
   <div class="flex justify-center min-h-screen">
        <div class="gap-5 w-[90vw] md:w-[410px] bg-base-200 py-10 h-fit p-5 flex flex-col justify-center rounded-3xl shadow-sm  mt-10">
            <p class="font-semibold text-2xl text-center">Forgate Password</p>
            <br>
          
            <InputText 
                placeholder="Email"
                error="" 
                v-model:input="text"
                inputType="email" 
            />
          
            <br>
            <button class="btn btn-primary ">Send</button>
            <NuxtLink to="/auth/login" class="btn btn-primary btn-outline ">Back</NuxtLink>
        </div>
    </div>
</template>
