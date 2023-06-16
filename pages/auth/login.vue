<script setup>

const supabaseAuth = useSupabaseAuthClient();
let isLoading = ref(false)


const data = reactive({
  email: '',
  password: ''
});

const error = ref('');

const handlerLogin = async () => {
  if (!data.email || !data.password) {
    error.value = 'All fields are required';
    return;
  }
  try {
    isLoading.value = true;
    const { data: userData, error: authError } = await supabaseAuth.auth.signInWithPassword({
      email: data.email,
      password: data.password
    });

    if (authError) {
      error.value = authError.message;
      isLoading.value = false;
      return;
    }
   
    console.log(userData);
    navigateTo('/dashboard')
  } catch (error) {
    error.value = error.message;
  }

};
</script>
<template>
   <div class="flex justify-center min-h-screen">
        <div >
           
            <form action="" @submit.prevent="handlerLogin" class="gap-5 w-[90vw] md:w-[410px] bg-base-200 py-10 h-fit p-5 flex flex-col justify-center rounded-3xl shadow-sm  mt-10">
                <p class="font-semibold text-2xl text-center">Login</p>
            <br>
                <InputText 
                    placeholder="Email"
                    error="" 
                    v-model:input="data.email"
                    inputType="email" 
                />

                <InputText 
                    placeholder="Password" error="" 
                    v-model:input="data.password"
                    inputType="password"
                />

                <!-- <NuxtLink to="/auth/forgate" class="cursor-pointer text-sm pl-1 text-primary">Forgate Password?</NuxtLink> -->

                <br>
                <p class="text-red-400 text-center">{{ error }}</p>
                <button class="btn btn-primary " v-if="!isLoading">Login</button>
                <a class="btn btn-primary "  v-else>
                    <span class="loading loading-dots loading-sm"></span>
                </a>
                <NuxtLink to="/auth/register" class="btn btn-primary btn-outline ">Register</NuxtLink>
        </form>
        </div>
    </div>
</template>
