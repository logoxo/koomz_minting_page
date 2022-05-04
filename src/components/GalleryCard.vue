<template>

  <ScrollPanel style="width: 100%; height: 400px" class="custombar1">
    <div class="grid gallery">
      <div v-for="item in items" :key="item.id" class="col-12 md:col-6 lg:col-4">
         <Card class="shadow-none">
          <template #header>
              <img alt="user header" :src="item.img">
          </template>
        </Card> 
      </div>
    </div>
  </ScrollPanel>
</template>

<script>
export default {
  name: 'About',
  data(){
    return{
      items : [
        {
          id: 1,
          name:"Rat",
          img: this.imgUrl("Rat")
        },
        {
          id: 2,
          name:"Ox",
          img: this.imgUrl("Ox")
        },
        {
          id: 3,
          name:"Tiger",
          img: this.imgUrl("Tiger")
        },
        {
          id: 4,
          name:"Rooster",
          img: this.imgUrl("Rooster")
        },
        {
          id: 5,
          name:"Rabbit",
          img: this.imgUrl("Rabbit")
        },
        {
          id: 6,
          name:"Dragon",
          img: this.imgUrl("Dragon")
        },
        {
          id: 7,
          name:"Snake",
          img: this.imgUrl("Snake")
        },
        {
          id: 8,
          name:"Horse",
          img: this.imgUrl("Horse")
        },
        {
          id: 9,
          name:"Sheep",
          img: this.imgUrl("Goat")
        },
        {
          id: 10,
          name:"Monkey",
          img: this.imgUrl("Monkey")
        },
        {
          id: 11,
          name:"Dog",
          img: this.imgUrl("Dog")
        },
        {
          id: 12,
          name:"Pig",
          img: this.imgUrl("Pig")
        },
      ]
    }  
    },
    methods: { 
       imgUrl (img) {
         return require(`@/assets/img/nft/${img}.png`)
    // The path could be '../assets/img.png', etc., which depends on where your vue file is
        },
    }
  
}
</script>
