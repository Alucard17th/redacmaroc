<template>
  <!-- ======= Services Section ======= -->
    <section id="services" class="services">
      <div class="container">

        <div class="row">
          <div class="col-lg-4 col-md-6 d-flex align-items-stretch">
            <div class="icon-box">
              <div class="icon"><i><b-icon icon="square"></b-icon></i></div>
              <h4><a href="">Lorem Ipsum</a></h4>
              <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
            <div class="icon-box">
              <div class="icon"><i><b-icon icon="alarm"></b-icon></i></div>
              <h4><a href="">Sed ut perspiciatis</a></h4>
              <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0">
            <div class="icon-box">
              <div class="icon"><i><b-icon icon="globe"></b-icon></i></div>
              <h4><a href="">Magni Dolores</a></h4>
              <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia</p>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
            <div class="icon-box">
              <div class="icon"><i><b-icon icon="pencil"></b-icon></i></div>
              <h4><a href="">Nemo Enim</a></h4>
              <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
            <div class="icon-box">
              <div class="icon"><i><b-icon icon="pen"></b-icon></i></div>
              <h4><a href="">Dele cardo</a></h4>
              <p>Quis consequatur saepe eligendi voluptatem consequatur dolor consequuntur</p>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
            <div class="icon-box">
              <div class="icon"><i><b-icon icon="file"></b-icon></i></div>
              <h4><a href="">Divera don</a></h4>
              <p>Modi nostrum vel laborum. Porro fugit error sit minus sapiente sit aspernatur</p>
            </div>
          </div>

        </div>

      </div>
    </section><!-- End Services Section -->
</template>

<script>
/* eslint-disable */
  export default {
    data() {
      return {
       
      }
    },
    methods: {
    
    }
  }
</script>

<style>
/*--------------------------------------------------------------
# Our Services
--------------------------------------------------------------*/
.services .icon-box {
  text-align: center;
  border: 1px solid #ededed;
  padding: 80px 20px;
  transition: all ease-in-out 0.3s;
}

.services .icon-box .icon {
  margin: 0 auto;
  width: 64px;
  height: 64px;
  background: #e96b56;
  border-radius: 5px;
  transition: all 0.3s ease-out 0s;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  transform-style: preserve-3d;
}

.services .icon-box .icon i {
  color: #fff;
  font-size: 28px;
}

.services .icon-box .icon::before {
  position: absolute;
  content: "";
  left: -8px;
  top: -8px;
  height: 100%;
  width: 100%;
  background: #fbe2dd;
  border-radius: 5px;
  transition: all 0.3s ease-out 0s;
  transform: translateZ(-1px);
}

.services .icon-box h4 {
  font-weight: 700;
  margin-bottom: 15px;
  font-size: 24px;
}

.services .icon-box h4 a {
  color: #545454;
}

.services .icon-box p {
  line-height: 24px;
  font-size: 14px;
  margin-bottom: 0;
}

.services .icon-box:hover {
  background: #e96b56;
  border-color: #e96b56;
}

.services .icon-box:hover .icon {
  background: #fff;
}

.services .icon-box:hover .icon i {
  color: #e96b56;
}

.services .icon-box:hover .icon::before {
  background: #ef9383;
}

.services .icon-box:hover h4 a,
.services .icon-box:hover p {
  color: #fff;
}
</style>

