<template>
  <div>
    <b-carousel id="carousel-1" v-model="slide" :interval="0" no-touch="true" img-width="1024" img-height="620"
      style="text-shadow: 1px 1px 2px #333;margin-bottom: 60px; padding: 10px;" @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd">
      <b-carousel-slide class="d-none d-sm-block d-md-block d-lg-block d-xl-block">
        <template #img>
          <b-row>
            <b-col align-self="center"><img class="img-fluid" src="@/assets/images/undraw_attached_file_re_0n9b.svg"
                alt="image slot" style=" height: 620px;">
            </b-col>
            <b-col align-self="center">
              <h2>First Slide Title</h2>First slide Nulla vitae elit libero, a pharetra augue mollis interdum.
              <div>
                <b-button class="mr-3 " @click="showModal('simple')">JE COMMANDE MES TEXTES</b-button>
                <b-button class="" @click="showModal('simple2')">JE SUIS RÉDACTEUR</b-button>
              </div>
              <img class="img-fluid carousel-dots" src="@/assets/images/output-onlinepngtools.png"
                alt="image slot" style=" height: 620px;">
            </b-col>
          </b-row>
        </template>
      </b-carousel-slide>

      <b-carousel-slide caption="Second slide" text="Nulla vitae elit libero, a pharetra augue mollis interdum."
        class="d-block d-sm-none d-md-none d-lg-none d-xl-none">
        <template #img>
          <img class="d-block w-100 opaciter" src="@/assets/images/undraw_attached_file_re_0n9b.svg" alt="image slot"
            style=" height: 480px;">
        </template>
        <b-button class="mb-3">JE COMMANDE MES TEXTES</b-button>
        <b-button size="">JE SUIS RÉDACTEUR</b-button>
      </b-carousel-slide>

    </b-carousel>

  </div>
</template>

<script>
/* eslint-disable */
export default {
  data() {
    return {
      slide: 0,
      sliding: null
    }
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true
    },
    onSlideEnd(slide) {
      this.sliding = false
    },
    showModal(name) {
      this.$store.dispatch("open", name)
    },
  }
}
</script>

<style>
.opaciter {
  opacity: 0.3;
}

.carousel-caption {
  bottom: 23vh !important;
}

@media (min-width: 576px) {
  .hero-main-image {
    display: none;
  }
}

.carousel-dots{
  left: 38px;
  position: absolute;
  height: 620px;
  top: -260px;
  z-index: -99;
}
</style>

