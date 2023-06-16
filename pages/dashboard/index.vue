<script setup>

const user = useSupabaseUser();
const client = useSupabaseClient();
definePageMeta({
  middleware:'user-auth'
})


const data = useAsyncData('urls', async()=>{
  const {data : urlData,error} = await client.from('urls').select("*").eq('user_id' , user.value?.id);
  return urlData;
});


const mydata = ref(data.data)
const fullURL = ref('')
onMounted(()=>{
  data
  fullURL.value = useGetURL()
})


console.log(useGetURL())

</script>

<template>
 <div class="flex flex-col justify-center items-center">
    <div>
        <div class="overflow-x-auto w-[60vw]">
  <table class="table rounded-xl text-white">
    <!-- head -->
    <thead>
      <tr class="text-white">
        <th>#</th>
        <th>URL</th>
        <th>Short</th>
      </tr>
    </thead>
    <tbody>
      <tr class="bg-base-200" v-for="(item, index) in mydata" :key="index">
        <th>{{index}}</th>
        <td>{{item.origin_url}}</td>
        <td><a :href="'http://'+`${fullURL+'/'+item.key_url}`" class="transition-all hover:text-primary" target="_blank">{{ item.key_url  }}</a></td>
      </tr>
    
    </tbody>
  </table>
</div>
    </div>
 </div>
</template>
