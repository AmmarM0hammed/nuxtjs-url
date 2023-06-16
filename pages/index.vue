<script setup>

let showCut = ref(false);
let url = ref('');
let cut_url = ref('');
let isLoading = ref(false);
const error = ref('');

const user = useSupabaseUser();
const client = useSupabaseClient();



function isValidURL(url) {
  var pattern = /^(?:\w+:)?\/\/([^\s.]+\.\S{2}|localhost[:?\d]*)\S*$/;
  return pattern.test(url);
}

const insertData = async ()=>{
  const {key} = useGenerator(4);

  if(!isValidURL(url.value)){
    error.value = "Please Enter URL";
    return;
  }

  try{
    cut_url.value = window.location.host + `/${key}`;
    console.log(cut_url);
    showCut.value = false;
    isLoading.value = true;

    const {data : urlData , error : dataError} =await client.from('urls').insert({
      user_id:user.value?.id,
      origin_url:url.value,
      key_url: key
    })

    if (dataError) {
      error.value = dataError.message;
      isLoading.value = false;
      return;
    }
   
    showCut.value = true
    isLoading.value = false;
    url.value = ''
    error.value = '';

  }catch(er){
    error.value = er;
  }

}




</script>

<template>
  <div class="flex flex-col gap-10 justify-center w-full h-full pt-40 items-center ">
    <p class="text-4xl md:text-6xl font-light ">Make URL Shorter</p>
    <div v-if="user">
    <p class="text-red-400">{{ error }}</p>
    <div class="flex flex-col md:flex-row gap-2">
      <input v-model="url" type="text" class=" input bg-white text-slate-900 w-[90vw] md:w-[40vw]" placeholder="URL ...">

      <button :class="(!url)?'btn-disabled opacity-30' : ''" class="btn btn-primary" v-if="!isLoading" @click="insertData">Cut</button>
      <button :class="(!url)?'btn-disabled opacity-30' : ''" class="btn btn-primary" v-else >
        <span class="loading loading-dots loading-sm"></span>

      </button>
    </div>
    </div>
    <div v-else>
      <p class="text-4xl md:text-3xl font-light text-center">Join us</p>
      <div class="flex gap-4 justify-center pt-10">
        <NuxtLink to="/auth/login" class="btn btn-primary">Login</NuxtLink>
        <NuxtLink to="/auth/register" class="btn btn-primary btn-outline">Reigester</NuxtLink>
      </div>
    </div>

  </div>



  <div>
    <CutDetails :url="cut_url"  v-if="showCut && user"/>
  </div>

</template>
