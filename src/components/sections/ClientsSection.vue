<template>
  <!-- ======= Clients Section ======= -->
    <section id="clients" class="clients">
      <div class="container">

        <div class="section-title">
          <h2>Clients</h2>
          <p>Magnam dolores commodi suscipit. </p>
        </div>


       
  <b-container>
    <b-row>
      <b-col cols="12">
        <carousel :perPage="3">
          <slide class="p-2">
            <b-card title="Card Title 1" img-src="https://picsum.photos/600/300/?image=25" img-alt="Image" img-top tag="article">
              <b-card-text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </b-card-text>
              <b-button href="#" variant="primary">Go somewhere</b-button>
            </b-card>
          </slide>
          <slide class="p-2">
            <b-card title="Card Title 2" img-src="https://picsum.photos/600/300/?image=25" img-alt="Image" img-top tag="article">
              <b-card-text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </b-card-text>

              <b-button href="#" variant="primary">Go somewhere</b-button>
            </b-card>
          </slide>
          <slide class="p-2">
            <b-card title="Card Title 3" img-src="https://picsum.photos/600/300/?image=25" img-alt="Image" img-top tag="article">
              <b-card-text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </b-card-text>

              <b-button href="#" variant="primary">Go somewhere</b-button>
            </b-card>
          </slide>
          <slide class="p-2">
            <b-card title="Card Title 4" img-src="https://picsum.photos/600/300/?image=25" img-alt="Image" img-top tag="article">
              <b-card-text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </b-card-text>

              <b-button href="#" variant="primary">Go somewhere</b-button>
            </b-card>
          </slide>
        </carousel>
      </b-col>
    </b-row>
  </b-container>


      </div>
    </section><!-- End Clients Section -->
</template>

<script>
/* eslint-disable */
import { Carousel, Slide } from 'vue-carousel';

  export default {
    components: {
      'carousel': Carousel,
      'slide': Slide
    },
    data: {
      slide: 0,
      sliding: null
    },
    methods: {
      onSlideStart(slide) {
            this.sliding = true
        },
        onSlideEnd(slide) {
            this.sliding = false
        }
    }
  }
</script>

<style>
/*--------------------------------------------------------------
# Our Clients
--------------------------------------------------------------*/
.clients .swiper-pagination {
  margin-top: 20px;
  position: relative;
}

.clients .swiper-pagination .swiper-pagination-bullet {
  width: 12px;
  height: 12px;
  background-color: #fff;
  opacity: 1;
  border: 1px solid #e96b56;
}

.clients .swiper-pagination .swiper-pagination-bullet-active {
  background-color: #e96b56;
}

.clients .swiper-slide img {
  opacity: 0.5;
  transition: 0.3s;
  filter: grayscale(100);
}

.clients .swiper-slide img:hover {
  filter: none;
  opacity: 1;
}
</style>

