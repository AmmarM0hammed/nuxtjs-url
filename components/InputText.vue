<script setup>

const emit = defineEmits(['update:input'])

const props = defineProps(['input', 'placeholder', 'inputType', 'max', 'autoFocus', 'error'])
const { input, placeholder, inputType, max, error } = toRefs(props)


const inputComputed = computed({
    get: () => input.value,
    set: (val) => emit('update:input', val)
})

</script>

<template>
        <div class="form-control w-full ">
            <input :type="inputType" v-model="inputComputed" :maxlength="max" :placeholder="placeholder" class="login-input input input-bordered w-full " :class="(error != '') ? 'border-red-400 hover:border-red-400' : ''" />
            <span class="label-text-alt">{{ error }}</span>
        </div>
</template>