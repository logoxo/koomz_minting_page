<template>
<div class="grid">
  <div class="col-12 md:col-6">
    <div class="icon-box twitter">
      <a href="https://twitter.com/KoomzPCH" target="_blank">
        <i class="pi pi-twitter"></i>
      </a>
    </div>
  </div>
  <div class="col-12 md:col-6">
    <div class="icon-box facebook">
      <a href="https://koomz.bigcartel.com/" target="_blank">
        <i class="pi pi-facebook"></i>
      </a>
    </div>
  </div>
  <div class="col-12 md:col-6">
    <div class="icon-box instagram">
      <a href="https://www.instagram.com/koomzpch/" target="_blank">
      <i class="pi pi-instagram"></i>
      </a>
    </div>
  </div>
  <div class="col-12 md:col-6">
    <div class="icon-box discord">
      <a href="https://www.discord.com" target="_blank">
        <i class="pi pi-discord"></i>
      </a>
    </div>
  </div>
  <div class="col-12">
    <div  :mouseover="active = !active"   v-if="active" class="icon-box tumblr">
      <a href="https://koomzclothing.tumblr.com/" target="_blank">
        <img alt="tumblr logo" :src="imageWhite" class="tumblr-svg">
      </a>
    </div>
    <div v-else  class="icon-box tumblr">
      <a href="https://koomzclothing.tumblr.com/" target="_blank">
        <img alt="tumblr logo" :src="image" class="tumblr-svg">
      </a>
    </div>
  </div>
</div>
</template>
<script>
export default {
  name: 'Social Network',
  data(){
    return{
      active: false,
      image : this.imgUrl('tumblr'),
      imageWhite : this.imgUrl('tumblr_white')
    }  
    },
    methods: { 
       imgUrl (name) {
         return require(`@/assets/svgs/${name}.svg`)
    // The path could be '../assets/img.png', etc., which depends on where your vue file is
        },
    }
  
}
</script>
