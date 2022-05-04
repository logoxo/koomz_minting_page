<template>
    <ScrollPanel style="" class="custombar1">
    <div class="grid banner"> 
      <div class="col-12">
        <img class="img-resposive" :src="bannerUrl('banner')" />
      </div>
    </div>
      <div class="grid gallery">
        <div v-for="item in items" :key="item.id" class="col-12 md:col-6 lg:col-4">
           <Card class="shadow-none">
            <template #header>
              <a :href="item.url" target="blank">
                <img alt="user header" :src="item.img">
              </a>
            </template>
          </Card> 
        </div>
    </div>
  </ScrollPanel>
</template>

<script>
export default {
  name: 'Store',
  data(){
    return{
      items : [
        {
          id: 1,
          name:"Bad Dad T-shirt",
          img: this.imgUrl("koomz1"),
          url: "https://koomz.bigcartel.com/product/koomz-logo-tag-t-shirt"
        },
        {
          id: 2,
          name:"Koomz Premium",
          img: this.imgUrl("koomz2"),
          url: "https://koomz.bigcartel.com/product/koomz-logo-t-shirt-pch"
        },
        {
          id: 3,
          name:"Koomz",
          img: this.imgUrl("koomz3"),
          url: "https://koomz.bigcartel.com/product/koomz-logot-shirt-navy-blue"
        },
      ]
    }  
    },
    methods: { 
       bannerUrl(img){
         return require(`@/assets/svgs/koomz.svg`)
       },
       imgUrl (img) {
         return require(`@/assets/img/shop/${img}.jpg`)
    // The path could be '../assets/img.png', etc., which depends on where your vue file is
        },
    }
  
}
</script>
