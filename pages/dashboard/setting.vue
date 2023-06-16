<script setup>

let retypePassword = ref('')


definePageMeta({
  middleware:'user-auth'
})

</script>

<template>
 
   <div class="flex justify-center min-h-screen">
        <div class="gap-4 w-[90vw] md:w-[410px] bg-base-200 py-10 h-fit p-5 flex flex-col justify-center rounded-3xl shadow-sm ">
            <p class="font-semibold text-2xl text-center">Setting</p>
            <br>
            <InputText 
            placeholder="Fullname" error="" 
            v-model:input="text"
            inputType="text" />

            <InputText 
            placeholder="Username" error="" 
            v-model:input="text"
            inputType="text" />

            <InputText 
            placeholder="Email" error="" 
            v-model:input="text"
            inputType="email" />
            <InputText 
            placeholder="Password" error="" 
            v-model:input="text"
            inputType="password" />

            <InputText 
            placeholder="Retype-Password" error="" 
            v-model:input="retypePassword"
            inputType="password" />

            <br>
            {{ retypePassword }}
            <button class="btn btn-primary ">Update</button>
        </div>
    </div>
</template>
