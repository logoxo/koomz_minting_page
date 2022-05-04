<template>
  <form v-if="!success" ref="form" >
  <div class="grid">
      <div class="col-12">
        <span class="p-field">
            <InputText id="name" name="name" type="text" v-model.trim="name.val"  placeholder="Name" class="w-full p-inputtext-lg mb-1" :class="{'p-invalid': !name.isValid}" />
        </span>
      </div>
      <div class="col-12">
        <span class="p-pfield">
            <InputText id="email" name="email" type="text" v-model.trim="email.val" placeholder="Email" class="w-full p-inputtext-lg mb-0" :class="{'p-invalid': !email.isValid}" />
        </span>
      </div>
  </div>
  <div class="card h-10rem flex align-items-center">
    <div class="card-container mx-auto">
        <div  class="flex justify-content-start flex-wrap card-container blue-container button-box">
          <!-- progress-circle -->
          <div @click="submit" class="button-text">SUBMIT</div>
          <div v-if="!isLoading">
          <svg type="submit" id="" width="120" height="120"  viewBox="0 0 120 120">
            <circle @click="submit" class="circle-bg" cx="60" cy="60" r="54" fill="none" stroke="#fff" stroke-width="12" />
            <circle @click="submit"  ref="circle" class="" stroke-dasharray="100"  :stroke-dashoffset="100"  cx="60" cy="60" r="54" fill="none" stroke="#f77a52" stroke-width="12" pathLength="100" />
          </svg>
        </div>
          <div v-if="isLoading">
           <svg id="progress-circle" width="120" height="120" viewBox="0 0 120 120">
              <circle class="circle-bg" cx="60" cy="60" r="54" fill="none" stroke="#fff" stroke-width="12" />
              <circle class="mint-loader" stroke-dasharray="100"  stroke-dashoffset="70"  cx="60" cy="60" r="54" fill="none" stroke="#f77a52" stroke-width="12" pathLength="100">
              </circle>
           </svg>  
          </div>
        </div>
    </div>
    </div>
  </form>
  <div v-else class="newsletter-thx" >
    <p class="mt-0 mb-0 text-cente+üär">
    Thanky you for signing <br /> 
    up to our newsletter. <br />
    We hope you enjoy it!
    </p>
  </div>
</template>

<script>

import emailjs from 'emailjs-com';
export default {
  name: 'ContactUs',
  data() {
    return {
      name: { val: '', isValid: true },
      email: { val: '', isValid: true },
      filter : /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      formIsValid: true,
      isLoading: false,
      success: false,
    }
  },
  watch:{
    'name.val':function(newVal, oldVal){
      if(this.name.val ===''){
        this.name.isValid = false;
        this.formIsValid = false;
      }else{
        this.name.isValid = true;
        this.formIsValid = true;
      } 
    },
    'email.val':function(newVal, oldVal){
      if(!this.filter.test(newVal)){
        this.email.isValid = false;
        this.formIsValid = false;
        }else{
        this.email.isValid = true;
        this.formIsValid = true;
      }
    },

  },
  methods: {
    showError(message) {
      this.$toast.add({severity:'error', summary: 'Error Message', detail: message, life: 3000});
    },
    validateForm(){
      if(this.name.val ===''){
        this.name.isValid = false;
        this.formIsValid = false;
        this.showError('Please enter your name')
        }else{
        this.name.isValid = true;
        this.formIsValid = true;
      }
      if(!this.filter.test(this.email.val)){
        var that = this;
        this.email.isValid = false;
        this.formIsValid = false;
        setTimeout(function(){
          that.showError('Please provide a valid email address')
        }, 1000);
        }else{
        this.email.isValid = true;
        this.formIsValid = true;
      }
    },
    submit(e) {
        this.validateForm();
        if(!this.formIsValid){
          return;
        }

        this.isLoading = true
        setTimeout(function(){
        }, 3000);
        emailjs.sendForm('service_178926p', 'template_n7reavy', this.$refs.form,
        'user_4yPTj91Buzf4LW1sJjD2Q', {
          from_name: "Ricola",
          name: this.name.val,
          email: this.email.val,
          message: "newslatter"
        }) .then((result) => {
          console.log('SUCCESS!', result.text);
          this.isLoading = false
          this.success = true
        }, (error) => {
          console.log('FAILED...', error.text);
          this.isLoading = false;
          this.name.val = "";
          this.email.val = "";
        });
      // Reset form field
    },
  }
}
</script>
