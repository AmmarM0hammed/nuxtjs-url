<script setup>
const isLogin = ref(false);
const user = useSupabaseUser();
const logout = useSupabaseAuthClient();


const handlerLogout = async () =>{
    const {error} = await useSupabaseAuthClient().auth.signOut();
    console.log(error);
    navigateTo('/')
}

</script>
<template>
   
   <div class="flex flex-row justify-between p-5 md:mx-10 z-10 items-center " style="">
        <NuxtLink to="/" class="flex items-center">
            <img src="~/assets/images/logo.svg" />
            <span>URL CUTTER</span>
        </NuxtLink>
        
        <NuxtLink to="/auth/login" class="navbar-button" v-if="!user">Login</NuxtLink>
        <div class="dropdown dropdown-end" v-else>
        <label tabindex="0" class="outline-none cursor-pointer hover:text-primary transition-all">{{user.email}}</label>
        <ul tabindex="0" class="mt-3 dropdown-content menu p-2 shadow bg-white text-black rounded-box w-52">
            <li><NuxtLink to="/dashboard">Dashboard</NuxtLink></li>
            <!-- <li><NuxtLink to="/dashboard/setting">Setting</NuxtLink></li> -->
            <li><button @click="handlerLogout">Logout</button></li>
        </ul>
    </div>
        

   </div>
</template>
