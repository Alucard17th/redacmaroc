<template>
  <div>
  <!-- ======= Featured Section ======= -->
    <section id="featured" class="featured">
      <div class="container">

        <div class="row">
          <div class="col-lg-4">
            <div class="icon-box">
              <i class="bi bi-card-checklist"><b-icon icon="card-checklist"></b-icon></i>
              <h3><a href="">Lorem Ipsum</a></h3>
              <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
            </div>
          </div>
          <div class="col-lg-4 mt-4 mt-lg-0">
            <div class="icon-box">
              <i class="bi bi-bar-chart"><b-icon icon="bar-chart"></b-icon></i>
              <h3><a href="">Dolor Sitema</a></h3>
              <p>Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata</p>
            </div>
          </div>
          <div class="col-lg-4 mt-4 mt-lg-0">
            <div class="icon-box">
              <i class="bi bi-binoculars"><b-icon icon="binoculars"></b-icon></i>
              <h3><a href="">Sed ut perspiciatis</a></h3>
              <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
            </div>
          </div>
        </div>

      </div>
    </section><!-- End Featured Section -->
  </div>
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
# Featured
--------------------------------------------------------------*/
.featured {
  position: relative;
  z-index: 2;
}

.featured .icon-box {
  padding: 40px 30px;
  box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.15);
  border-radius: 10px;
  background: #fff;
  transition: all ease-in-out 0.3s;
  height: 100%;
}

.featured .icon-box i {
  color: #e96b56;
  font-size: 42px;
  margin-bottom: 15px;
  display: block;
  line-height: 0;
}

.featured .icon-box h3 {
  font-weight: 700;
  margin-bottom: 15px;
  font-size: 20px;
}

.featured .icon-box h3 a {
  color: #545454;
  transition: 0.3s;
}

.featured .icon-box p {
  color: #545454;
  line-height: 24px;
  font-size: 14px;
  margin-bottom: 0;
}

.featured .icon-box:hover {
  background: #e96b56;
}

.featured .icon-box:hover i,
.featured .icon-box:hover h3 a,
.featured .icon-box:hover p {
  color: #fff;
}
</style>

