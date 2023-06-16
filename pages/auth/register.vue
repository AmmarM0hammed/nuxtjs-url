<script setup>

const supabaseAuth = useSupabaseAuthClient();
let isLoading = ref(false)

const data = reactive({
  email: '',
  password: '',
  retypePassword: ''
});

const error = ref('');

const handlerSignUP = async () => {
  if (!data.email || !data.password || !data.retypePassword) {
    error.value = 'All fields are required';
    return;
  }
  if(data.password != data.retypePassword){
    error.value = "Password is not match"
    return;
  }

  try {
    isLoading.value = true;
    const { data: userData, error: authError } = await supabaseAuth.auth.signUp({
      email: data.email,
      password: data.password
    });

    if (authError) {
      error.value = authError.message;
      isLoading.value = false;
      return;
    }
   
    console.log(userData);
    navigateTo('/auth/login')
  } catch (error) {
    error.value = error.message;
  }

};


</script>

<template>
   <div class="flex justify-center min-h-screen">
        <form @submit.prevent="handlerSignUP" class="gap-4 w-[90vw] md:w-[410px] bg-base-200 py-10 h-fit p-5 flex flex-col justify-center rounded-3xl shadow-sm ">
            <p class="font-semibold text-2xl text-center">Register</p>
            <br>
            
            <!-- <InputText 
                placeholder="Fullname"
                error="" 
                v-model:input="fullname"
                inputType="text" 
            />
            
            <InputText 
                placeholder="Username"
                error="" 
                v-model:input="username"
                inputType="text" 
            /> -->
            
            <InputText 
                placeholder="Email"
                error="" 
                v-model:input="data.email"
                inputType="email" 
            />
            
            <InputText 
                placeholder="Password"
                error="" 
                v-model:input="data.password"
                inputType="password" 
            />
            
            <InputText 
                placeholder="Retype-Password"
                error="" 
                v-model:input="data.retypePassword"
                inputType="password" 
            />

            <br>
            <p class="text-red-400 text-center">{{ error }}</p>
                <button class="btn btn-primary " v-if="!isLoading">Register</button>
                <a class="btn btn-primary "  v-else>
                    <span class="loading loading-dots loading-sm"></span>
                </a>
            <NuxtLink to="/auth/login" class="btn btn-primary btn-outline ">Login</NuxtLink>
        </form>
    </div>
</template>
