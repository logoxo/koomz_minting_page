<template>
    <div>
        <div class="dock-demo">
            <Toast />
            <Toast position="top-center" group="tc" />

            <div class="dock-window dock-advanced ">
                  <div class="logo-box">
                  <img :alt="logo[0].name" :src="`${logo[0].img}`" style="width: 100%">
                </div>
                <Dock :model="dockItems" :exact="true">
                    <template rel="item" #item="{ item }">
                        <a href="#" rel="link"   class="p-dock-action" v-tooltip.top="item.label" @click="onDockItemClick($event,item, item.name)">
                          <img :alt="item.label" :src="`${item.icon}`" style="width: 100%">
                        </a>
                    </template>
                </Dock>
                <Dialog v-model:visible="displayTerminal" header="Terminal" :breakpoints="{ '960px': '50vw' }" :style="{ width: '40vw' }" :maximizable="true">
                    <Terminal welcomeMessage="Welcome to PrimeVue(cmd: 'date', 'greet {0}', 'random' and 'clear')" prompt="primevue $" />
                </Dialog>
                <Dialog v-model:visible="displayNewsletter" class="newslatter-card" header="Newslatter" :breakpoints="{ '992px': '40vw',  '576px': '95vw' }" :style="{ width: '25vw' }" :maximizable="false">
                 <Newsletter />
                </Dialog>
                <Dialog v-model:visible="displayFinder" class="minting-card" header="Minting" :breakpoints="{ '992px': '40vw',  '576px': '95vw' }" :style="{ width: '25vw' }" :maximizable="false">
                  <div class="flex align-content-center flex-wrap card-container yellow-container">
                   <Minting />
                 </div>
                </Dialog>
                <Dialog v-model:visible="displayStore" class="store-card" header="Store" :breakpoints="{ '992px': '40vw',  '576px': '95vw'  }" :style="{ width: '50vw' }" :maximizable="true" :onHide="closeDialog('store')">
                 <Store />
                </Dialog>
                <Dialog v-model:visible="displayGallery" class="gallery-card" header="Gallery" :breakpoints="{ '992px': '40vw',  '576px': '95vw'  }" :style="{ width: '60vw' }" :maximizable="true">
                 <Gallery />
                </Dialog>
                <Dialog v-model:visible="displayAbout" class="text-card" header="About" :breakpoints="{ '992px': '40vw',  '576px': '95vw'  }" :style="{ width: '50vw' }" :maximizable="false">
                 <Text />
                </Dialog>
                <Dialog v-model:visible="displayRoadmap" class="roadmap-card" header="Roadmap" :breakpoints="{ '992px': '40vw',  '576px': '95vw'  }" :style="{ width: '60vw' }" :maximizable="true">
               <Table />
                </Dialog>
                <Dialog header="Sozial Network"  class="social-card" v-model:visible="displaySocial" :breakpoints="{ '992px': '40vw',  '576px': '95vw'  }"  :style="{width: '20vw'}" :position="position" >
                <Social />
                </Dialog>
            </div>
        </div>
    </div>
</template>

<script>
import Minting from '@/components/mintCard.vue'
import Gallery from '@/components/GalleryCard.vue'
import Social from '@/components/SocialCard.vue'
import Store from '@/components/StoreCard.vue'
import Text from '@/components/TextCard.vue'
import Newsletter from '@/components/NewsletterCard.vue'
import Table from '@/components/TableCard.vue'
import TerminalService from 'primevue/terminalservice';

export default {
    components:{
      Minting,
      Text,
      Table,
      Newsletter,
      Gallery,
      Store,
      Social
    },
    data() {
        return {
            displayFinder: false,
            displayGallery: false,
            displayStore: true,
            displayTerminal: false,
            displayAbout: false,
            displayNewsletter: false,
            displaySocial: false,
            images: null,
            displayPosition: false,
            position: "top",
            li: null,
            prev: null,
            logo:[
              {
                name:"Koomz Logo",
                img: this.imgUrl("logo.svg")
              }
            ],
            displayRoadmap:false,
            iconName:"",
            //imgErrorPath: 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png',
            dockItems: [
                {
                    name: "Mint",
                    icon: this.imgUrl("mint.svg"),
                    command: () => {
                        this.displayFinder = true;
                        this.displayGallery = false,
                        this.displayRoadmap = false; 
                        this.displayStore =  false;
                        this.displayTerminal= false;
                        this.displayAbout= false;
                        this.displayNewsletter= false;
                        this.displaySocial= false;
                    } 
                },
                {
                    name: "About",
                    icon: this.imgUrl("about.svg"),
                    command: () => {
                        this.displayAbout = true;
                        this.displayFinder = false;
                        this.displayRoadmap = false; 
                        this.displayGallery = false;
                        this.displayStore =  false;
                        this.displayTerminal = false;
                        this.displayNewsletter = false;
                        this.displaySocial = false;
                    }
                },
                {
                    name: "Roadmap",
                    icon: this.imgUrl("roadmap.svg"),
                    command: () => {
                        this.displayRoadmap = true; 
                        this.displayFinder = false;
                        this.displayGallery = false;
                        this.displayStore =  false;
                        this.displayTerminal = false;
                        this.displayAbout = false;
                        this.displayNewsletter = false;
                        this.displaySocial = false;
                        //this.$toast.add({ severity: 'error', summary: 'An unexpected error occurred while signing in.', detail: 'UNTRUSTED_CERT_TITLE', group: 'tc', life: 3000 });
                    }
                },
                {
                    name: "Gallery",
                    icon: this.imgUrl("gallery.svg"),
                    command: () => {
                        // this.$toast.add({ severity: 'warn', summary: 'Safari has stopped working', group: 'tc', life: 3000 });
                        this.displayGallery = true; 
                        this.displayFinder = false;
                        this.displayRoadmap = false; 
                        this.displayStore =  false,
                        this.displayTerminal = false,
                        this.displayAbout= false;
                        this.displayNewsletter = false;
                        this.displaySocial = false;
                    }
                },
                {
                    name: "Store",
                    icon: this.imgUrl("store.svg"),
                    command: () => {
                        this.displayStore = true; 
                        this.displayGallery = false; 
                        this.displayFinder = false;
                        this.displayTerminal = false;
                        this.displayAbout = false;
                        this.displayRoadmap = false;
                        this.displayNewsletteri = false;
                        this.displaySocial = false;
                        //this.$toast.add({ severity: 'info', summary: 'Empty Trash', life: 3000 });
                    }
                },
                {
                    name: "Sozial",
                    icon: this.imgUrl("social.svg"),
                    command: () => {
                        this.displaySocial = true; 
                        this.displayFinder = false;
                        this.displayGallery = false,
                        this.displayRoadmap = false; 
                        this.displayTerminal = false,
                        this.displayAbout= false,
                        this.displayNewsletter = false;
                        this.displayStore = false; 

                        this.position = "top";
                    }
                },
                {
                    name: "Newsletter",
                    icon: this.imgUrl("mail.svg"),
                    command: () => {
                        this.displayNewsletter = true; 
                        this.displayFinder = false;
                        this.displayGallery = false;
                        this.displayStore =  false;
                        this.displayTerminal = false;
                        this.displayRoadmap = false; 
                        this.displayAbout = false;
                        this.displaySocial = false;
                    }
                }
            ],
        }
    },
    created() {
    },
    mounted() {
        TerminalService.on('command', this.commandHandler);
    },
    beforeUnmount() {
        TerminalService.off('command', this.commandHandler);
    },
    methods: {
       closeDialog(name){
         
         var hover  = document.querySelectorAll('.p-dock-item-current');
         if(!hover.length && this.li){
            this.prev = "one"; 
            for(var i=0; i < this.li.length; i++){
              if(this.li[i].children[0].classList[1] === "current-button"){
                this.li[i].children[0].classList.remove("current-button")
              }
            }
         }
         if(this.evt){
          this.evt.preventDefault()
         }
       },
       logoUrl(){
         return require("@/assets/svgs/logo.svg")
       },
       imgUrl (img) {
         return require(`@/assets/svgs/${img}`)
        },
        onDockItemClick(event, item, name) {
            let ul = event.target.parentElement.parentElement.parentElement;
            this.li = ul.children
            for(var i=0; i < this.li.length; i++){
              if(this.li[i].children[0].classList[1] === "current-button"){
                this.li[i].children[0].classList.remove("current-button")
              }
            }

            this.iconName = name
            event.target.parentElement.classList.add('current-button')

            if (item.command) {
                item.command();
            }
            this.evt = event
            event.preventDefault();
        },
        commandHandler(text) {
            let response;
            let argsIndex = text.indexOf(' ');
            let command = argsIndex !== -1 ? text.substring(0, argsIndex) : text;

            switch(command) {
                case "date":
                    response = 'Today is ' + new Date().toDateString();
                    break;

                case "greet":
                    response = 'Hola ' + text.substring(argsIndex + 1);
                    break;

                case "random":
                    response = Math.floor(Math.random() * 100);
                    break;

                default:
                    response = "Unknown command: " + command;
            }

            TerminalService.emit('response', response);
        }
    }
}
</script>


