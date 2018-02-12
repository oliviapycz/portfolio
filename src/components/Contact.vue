<template lang="html">
  <div id="contact">
    <div class="col-md-9 row" style="margin-top:20px">
      <div class="col-md-6 offset-md-3 row">
        <h2 class="col-md-12" style="color: white">Contact</h2>
      </div>
      <div class="col-md-3 offset-md-6 modaleSend" v-if="showModal">
        <p>Thank You!<br> Votre message a été envoyé</p>
        <button @click="redirect" class="btn btn-secondary btn-sm" type="submit" name="button" style="margin-top: 20px">FERMER</button>
      </div>
      <transition name="flip">
        <form v-if="show" class="col-md-6 offset-md-3 row"  style="margin-top: 7vh;" action="https://formspree.io/oliviapenycoblentz@gmail.com" method="POST">
          <fieldset class="row">
            <div class="form-group col-md-12">
              <label for="lastname"></label>
              <input class="borderInput form-control col-md-10 offset-md-1" type="text" name="lastname" value="" placeholder="nom de famille" required>
            </div>
            <div class="form-group col-md-12">
              <label for="fisrtname"></label>
              <input class="borderInput form-control col-md-10 offset-md-1" type="text" name="firstname" value="" placeholder="prénom" required>
            </div>
            <div class="form-group col-md-12">
              <label for="email"></label>
              <input class="borderInput form-control col-md-10 offset-md-1" type="text" name="email" value="" placeholder="email" required>
            </div>
            <div class="form-group col-md-12">
              <label for="comments"></label>
              <textarea
                id="message"
                name="message"
                rows="4" cols="80"
                placeholder="message"
                required></textarea>
                <div class="form-group submit col-md-12" style="margin-top: 15px">
                  <button  @click="onSubmit" class="btn btn-secondary btn-sm" type="submit" name="button">ENVOYER</button>
                </div>
            </div>
          </fieldset>
        </form>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      show: false,
      showModal: false
    }
  },
  methods: {
    onSubmit () {
      console.log('sent')
      this.showModal = true
    },
    redirect () {
      this.showModal = false
      this.$router.push('/')
    }
  },
  mounted () {
    this.show = true
  }
}
</script>

<style lang="css">
#contact {
  background-color: rgba(101, 52, 134, 0.7);
  height: 90vh;
  width: 100vw;
}
.borderInput {
  width: 90%;
  border: inherit !important;
  border: 1px solid grey !important;
  box-shadow: 0 5px 7px lightgrey;
}
.modaleSend {
  border: 1px solid white;
  border-radius: 5px;
  box-shadow: 2px 3px 4px lightgrey;
  background-color: rgb(101, 52, 134);
  color: white;
  position: absolute;
  z-index: 300;
  top: 20vh;
  padding-top: 20px;
  height: 30vh;
  left: -10vw;

}
form {
  background-color: white;
  border: 1px solid grey !important;
  border-radius: 15px;
  box-shadow: 0 0px 2px lightgrey;
}
textarea{
  margin-top: 10px;
  width: 83%;
  border: 1px solid grey !important;
  border-radius: 4px;
  box-shadow: 0 5px 7px lightgrey;
  padding-left: 7px;
}

@keyframes flip-in {
  from {
    -webkit-transform: translateY(0deg);
    transform: rotateY(0deg);
  }
  to {
    -webkit-transform: translateY(1440deg);
    transform: rotateY(1440deg);
    /*visibility: visible;*/
  }
}

.flip-enter {
  opacity: 0;
}

.flip-enter-active {
  transition: all 1s ease;
  animation: flip-in 1.5s ease forwards;
}
/*
.flip-leave-active {
  transition: all 1s ease-in-out;
  animation: flip-out 1.5s ease-out forwards;
}*/
</style>
