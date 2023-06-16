<script setup>
  import QrcodeVue from 'qrcode.vue'
  import html2canvas from 'html2canvas';


defineProps({url:String})

const downloadQR = ()=>{
    
  const canvas = document.getElementById('qrImage');
    html2canvas(canvas)
    .then(function (canvas) {
        const link = document.createElement('a');
        link.href = canvas.toDataURL('image/png');
        link.download = 'QR.png';
        link.click();
    });
    
};

const copyUrl = ()=>{
    const textToCopy = document.getElementById('url').innerText;

    const tempInput = document.createElement('input');
    tempInput.setAttribute('value', textToCopy);
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
};
</script>
<template>
   <div class="flex flex-col justify-center items-center pt-20 gap-4">

    <div class="tooltip" data-tip="Copy">

    <p id="url" @click="copyUrl(event)" class="flex gap-4 text-xl cursor-pointer transition-all hover:brightness-75">
      {{ url }}
      <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(255, 255, 255, 1);transform: ;msFilter:;"><path d="M20 2H10c-1.103 0-2 .897-2 2v4H4c-1.103 0-2 .897-2 2v10c0 1.103.897 2 2 2h10c1.103 0 2-.897 2-2v-4h4c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zM4 20V10h10l.002 10H4zm16-6h-4v-4c0-1.103-.897-2-2-2h-4V4h10v10z"></path></svg></span></p>
</div>
<div class="tooltip tooltip-bottom" data-tip="Download">
    <qrcode-vue id="qrImage" @click="downloadQR()" :value="url" size="150" level="H" background="#E5E7E9" class="p-1  cursor-pointer transition-all hover:brightness-75"/>
    </div>

   </div>
</template>

