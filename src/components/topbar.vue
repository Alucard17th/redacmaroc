<template>
  <!-- ======= Top Bar ======= -->
  <section id="topbar" class="d-flex align-items-center">

    <div v-if="currentUser !== null" class="container-fluid d-flex justify-content-center justify-content-md-between">
      <div class="social-links">
        <a href="#" class="instagram">
          <b-icon class="checkme" icon="instagram"></b-icon>
        </a>
      </div>
      <div>
        <b-button class="" @click="logUser">Current USER</b-button>
        <b-button class="" @click="userLogout">Logout</b-button>
            

        <b-dropdown size="lg" variant="link" toggle-class="text-decoration-none" dropleft text="Drop-Left" >
          <template #button-content>
            <b-avatar src="https://placekitten.com/300/300" size="3rem"></b-avatar>
          </template>
          <b-dropdown-item href="#"><router-link to="/user-dashboard">Dashboard</router-link></b-dropdown-item>
          <b-dropdown-item href="#"><router-link to="/user-profile">My Profile</router-link></b-dropdown-item>
          <b-dropdown-item href="#"><router-link to="/user-dashboard">Settings</router-link></b-dropdown-item>
        </b-dropdown>

      </div>
    </div>

    <div v-else class="container-fluid d-flex justify-content-center justify-content-md-between">
      <div class="social-links d-flex align-items-center">
        <b-form inline>
          <label class="sr-only" for="inline-form-input-name">Login</label>
          <b-form-input v-model="form.login" id="inline-form-input-name" class="mb-2 mr-sm-2 mb-sm-0 topbar-input"
            placeholder="Login ou mail">
          </b-form-input>

          <label class="sr-only" for="inline-form-input-username">Mot de Passe</label>
          <b-form-input v-model="form.password" id="type-password" type="password"
            class="mb-2 mr-sm-2 mb-sm-0 topbar-input" placeholder="Mot de Passe"></b-form-input>

          <!-- <b-form-checkbox class="mb-2 mr-sm-2 mb-sm-0">Remember me</b-form-checkbox> -->

          <b-button class="top-bar-save" @click="login">CONNEXION</b-button>
          <a href="#" class="ml-3" @click="showModal('simple3')">mot de passe oubli?? ?</a>
        </b-form>
      </div>

      <div class="social-links">
        <b-button class="mr-3 top-bar-save" @click="showModal('simple')">JE COMMANDE MES TEXTES</b-button>
        <b-button class="top-bar-save" @click="showModal('simple2')">JE SUIS R??DACTEUR</b-button>
        <RegisterModal></RegisterModal>
      </div>

      <div class="social-links d-none d-md-flex align-items-center">
        <a href="#" class="twitter">
          <b-icon class="checkme" icon="twitter"></b-icon>
        </a>
        <a href="#" class="facebook">
          <b-icon class="checkme" icon="facebook"></b-icon>
        </a>
        <a href="#" class="instagram">
          <b-icon class="checkme" icon="instagram"></b-icon>
        </a>
        <a href="#" class="linkedin">
          <b-icon class="checkme" icon="linkedin"></b-icon>
        </a>
      </div>
    </div>

  </section>

</template>

<script>
import RegisterModal from "./RegisterModal.vue";
import firebase from "firebase/app";
export default {
  name: 'TopBar',
  data() {
    return {
      form: {
        login: '',
        password: '',
      },
      allcountries: [{ text: 'Select One', value: null }, 'Carrots', 'Beans', 'Tomatoes', 'Corn'],
      show: true,
      showBuyer: true,
      currentUser: {}
    }
  },
  components: {
    RegisterModal
  },
  created() {
    firebase.auth().onAuthStateChanged(userAuth => {
      if (userAuth) {
        this.currentUser = userAuth
        firebase
          .auth()
          .currentUser.getIdTokenResult()
          .then(tokenResult => {
            console.log(tokenResult.claims);
          });
        this.$store.dispatch('setUserOnRefresh', { uid: this.currentUser.uid, name: this.currentUser.displayName, role: 'TO DO !', email: this.currentUser.email, picture: this.currentUser.photoURL })
        console.log('THE CURRENT USEReeeeeeee : ')
        console.log(this.currentUser)
      }
      else {
        this.currentUser = firebase.auth().currentUser
      }
    });
  },

  methods: {
    showModal(name) {
      this.$store.dispatch("open", name)
    },
    login() {
      this.$store.dispatch('loginUser', { login: this.form.login, password: this.form.password })
    },
    logUser() {
      console.log(firebase.auth().currentUser)
    },
    userLogout() {
      this.$store.dispatch('userLogout')
    }
  }

}
</script>

<style>
/*--------------------------------------------------------------
# Top Bar
--------------------------------------------------------------*/
#topbar {
  background: #545454;
  padding: 10px 0;
  font-size: 14px;
}

#topbar .contact-info i {
  font-style: normal;
  color: #e96b56;
}

#topbar .contact-info i a,
#topbar .contact-info i span {
  padding-left: 5px;
  color: #fff;
}

#topbar .contact-info i a {
  line-height: 0;
  transition: 0.3s;
}

#topbar .contact-info i a:hover {
  color: #e96b56;
}

#topbar .social-links a {
  color: #bababa;
  line-height: 0;
  transition: 0.3s;
  margin-left: 10px;
}

#topbar .social-links a:hover {
  color: white;
}

.topbar-input {
  height: 36px !important;
}

.top-bar-save {
  background-color: #e96b56 !important;
}

.top-bar-save:hover {
  background-color: #eaa89c !important;
}

.dropdown-menu{
  transform: translate3d(-120px, 60px, 0px) !important;
}
</style>