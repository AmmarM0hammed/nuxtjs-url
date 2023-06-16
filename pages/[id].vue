<script setup>

const route = useRoute();
const client = useSupabaseClient();
const showButton = ref(false);
console.log();

if(!route.params.id){
    throw createError({
        statusCode:404,
        message:"Not Found"
    })
}
const data = useAsyncData('urls' , async () =>{
        const {data : urlData , error } =await client.from('urls').
        select('*').eq('key_url',route.params.id)
        .single()
        return urlData
});

const mydata = ref(data.data)
const countdown = ref(5);

const timer = computed(()=>{
    if(countdown.value == 0)
        showButton.value = true
    return  countdown;
})
onMounted(()=>{
    setInterval(()=>{
        if(countdown.value != 0)
            countdown.value -= 1;
    },1000)

})

</script>
<template>
    <div class="flex flex-col gap-14 justify-center items-center py-32">
        <p class="font-light text-6xl text-center">Wait .... {{ timer }}</p>   
        <a :href="`${mydata['origin_url']}`" class="btn btn-primary" v-if="showButton">Click Here</a> 
    </div>
</template>