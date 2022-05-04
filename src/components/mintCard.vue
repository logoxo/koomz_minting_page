<template>
  <div class="card h-10rem  mx-auto flex align-items-center">
    <div class="card-container">
        <div @click="inc" class="flex justify-content-start flex-wrap card-container blue-container button-box">
          <!-- progress-circle -->

           
          <div v-if="displayText.length != 0" class="button-text">{{ displayText }}</div>
          <div v-else class="button-number">{{ displayNumber }}</div>
          <svg id="mint-button" width="120" height="120"  viewBox="0 0 120 120">
            <circle class="circle-bg" cx="60" cy="60" r="54" fill="none" stroke="#fff" stroke-width="12" />
            <circle ref="circle" class="mint-loader" :style="{ animation: animation }"  stroke-dasharray="100" :stroke-dashoffset="progress"  cx="60" cy="60" r="54" fill="none" stroke="#010E2C" stroke-width="12" pathLength="100" />
          <!-- 
          <circle ref="circle" class="" style="--start-value-circle:100deg; --end-value-circle: 20deg; animation:dash 5s linear infinite " stroke-dasharray="100"  :stroke-dashoffset="progress"  cx="60" cy="60" r="54" fill="none" stroke="#f77a52" stroke-width="12" pathLength="100" />
          -->
          </svg>    
        </div>
    </div>
</div>
  <!-- 
  <Card style="width:30rem; m-auto">
    <template #title>
      My Nextup NFT <br> 
    </template>
    <template #content>
         <ProgressBar :value="progress" class="text-lg h-3rem" />
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt
        quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!</p>
    </template> 
    <template #footer>
      <Button v-if="progress < 100" label="Mint Now" @click="increment" class="p-button-warning p-button-lg" icon="pi pi-check" iconPos="right" /> 
    <Button  v-else label="Mint Now" class="p-button-secondary p-button-lg" @click="mintInfo"  iconPos="right" /> 
    </template>
  </Card>
  -->
</template>

<script>
// @ is an alias to /src
 import Abi from '@/abi.json'
 //import Web3 from 'web3'
// const RPC_URL="wss://rinkeby.infura.io/ws/v3/28268f30bc314cd389cf65588795a4ec"
// const PRIVAT="c0244eed1f8686e7103ad368908c945e61ece59ead2442845dd98816079ac1ff"
// const ACCOUNT="0x4DBcf2EA3FBc72A2eD9677AA0a59442C0B8D4B7B"
import Web3 from 'web3'
// const web3 = new Web3("wss://rinkeby.infura.io/ws/v3/28268f30bc314cd389cf65588795a4ec")
export default {
  name: 'Home',
  data(){
    return{
      progress:100,
      number: 0,
      total:20,
      contract: null,
      gasPrice:null,
      balance: null,
      amount: null,
      maxMint: null,
      price: '0.1',
      show: false,
      animation: 't0 5s forwards',
      hideButton: true,
      displayText:"Mint",
      displayNumber:0,
      interval:false
    }
  },
  ready(){
  	this.displayNumber = this.number ? this.number : 0;
  },

    watch:{
  
  	number(){
      this.displayText = "";
    	clearInterval(this.interval);
    		if(this.number == this.displayNumber){
          return;
        }

      	this.interval = window.setInterval(function(){

        	if(this.displayNumber != this.number){
        		var change = (this.number - this.displayNumber) / 10;
            change = change >= 0 ? Math.ceil(change) : Math.floor(change);
          	this.displayNumber = this.displayNumber + change;

          }

        }.bind(this), 20);

        // show mint Text
        if(this.progress > 0 ){
          var that = this;
          setTimeout(function() { 
            that.displayText = "Mint"
          }, 
          5000);
        }

    }

  },
  async created(){
      /*
      if(window.ethereum){ 
        const pro = new Web3(ethereum)
        const json = JSON.parse(JSON.stringify(Abi));
        this.gasPrice = await pro.eth.getGasPrice()
        this.balance = await pro.eth.getBalance(json.deployment.address)
        this.amount = pro.utils.toWei(this.price, 'ether') 
        this.contract = new pro.eth.Contract(json.abi, json.deployment.address)
        this.maxMint = await this.contract.methods.maxUserMint().call()
        const minted = await this.contract.methods.getMinted().call()
        this.progress = minted.length * this.maxMint
      }else if(window.web3) {
         window.web3 = new Web3(web3.currentProvider);
      }else{
        console.log('Non-Ethereum browser detected. You should consider trying MetaMask!');
      }
      */
  },
  components: { 
  },
  methods: {
    showError(message) {
      this.$toast.add({severity:'error', summary: 'Error Message', detail: message, life: 3000});
    },
    isInt(n) {
     return n % 10 === 0;
    },
    inc(){
      if(this.progress > 0 ){
        this.progress -= 10;
        this.animation= `t${100-this.progress } 5s forwards`            
        this.number += 10
      }else{
        this.showError("I think you're a bit late to the party. Minting is over.")  
      }
      console.log(this.progress)
    },
    async increment(){
      if(window.ethereum){ 
        if(ethereum.selectedAddress !== null){ 
          this.contract.methods.userMint(ethereum.selectedAddress).send({ 
             from : ethereum.selectedAddress, 
              value: this.amount,
              gasPrice: this.gasPrice,
          }).then((resp) =>{ 
            if(this.progress > 0 ){
                this.progress -= (100/this.maxMint)
            }else{
              this.hideButton = false
            }
          }).catch((error) =>{       
              console.log(error)
             console.error("error happends try id latter")
           }); 
        }else{
         const accounts  = await window.ethereum.request({
             method: "wallet_requestPermissions",
             params: [{
                  eth_accounts: {}
             }]
           }).then(() => ethereum.request({
               method: 'eth_requestAccounts' 
           }))        
        } 
      }else if(window.web3) {
         window.web3 = new Web3(web3.currentProvider);
      }else{
        console.log('Non-Ethereum browser detected. You should consider trying MetaMask!');
      }
    },
    mintInfo(){
      this.$toast.add({severity:'info', summary: 'Info Message', detail:'Sorry, but Minting is over. All NFTs has been already minted', life: 3000});
    }

    }
  
}
</script>
<style lang="scss" scoped>
  .p-progressbar-label {
    font-weight: bold !important;
  }
  .p-progressbar .p-progressbar-value {
    border: 0 none;
    margin: 0;
    background: rgb(173,241,255);
    background: linear-gradient(90deg, rgba(173,241,255,1) 0%, rgba(241,255,61,1) 50%, rgba(0,255,46,1) 100%) !important;
  }
</style>
