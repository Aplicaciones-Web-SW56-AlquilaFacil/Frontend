<template>
  <pv-toolbar class="flex justify-between items-center toolbar border-transparent" aria-label="Toolbar content">
    <template #start>
      <div class="flex items-center" aria-label="Main navigation section">
        <router-link to="/user-edit" class="flex items-center no-underline">
          <div class="flex align-items-center">
            <img class="md:block hidden" src="../../assets/logo.png" :width="isLg ? '50' : '40'" :height="isLg ? '50' : '40'" alt="AlquilaFacil Logo"/>
            <span class="font-bold lg:text-xl text-sm ml-2 text-black-alpha-90 md:block hidden">AlquilaFácil</span>
          </div>
        </router-link>
      </div>
    </template>
    <template #center>
      <div class="flex justify-center">
        <div class="toolbar-mini block md:hidden flex justify-between align-items-center" aria-label="toolbar features content">
          <div class="flex items-center">
            <img class="p-mr-2" src="../../assets/logo.png" width="50" height="50" alt="AlquilaFacil Logo" />
            <p class="font-bold ml-2 text-black">AlquilaFácil</p>
          </div>
          <pv-button class="bg-transparent text-red-600 border-transparent text-2xl hover:text-red-600" icon="pi pi-bars" @click="visible = true" aria-label="Menu"></pv-button>
        </div>

        <pv-sidebar v-model:visible="visible" header="AlquilaFácil">
          <img class="md:hidden" src="../../assets/logo.png" width="50" height="50" alt="AlquilaFacil Logo"/>

          <router-link v-for="item in gohome" :key="item.label" :to="item.to" custom>
            <template v-slot="{ navigate, href, isActive, isExactActive }">
              <h2 :href="href" @click="navigate" :class="{ 'router-link-active': isActive, 'router-link-exact-active': isExactActive }">Inicio</h2>
            </template>
          </router-link>

          <router-link v-for="item in subscriptions" :key="item.label" :to="item.to" custom>
            <template v-slot="{ navigate, href, isActive, isExactActive }">
              <h2 :href="href" @click="navigate" :class="{ 'router-link-active': isActive, 'router-link-exact-active': isExactActive }">Subscripciones</h2>
            </template>
          </router-link>

          <router-link v-for="item in createspace" :key="item.label" :to="item.to" custom>
            <template v-slot="{ navigate, href, isActive, isExactActive }">
              <h2 :href="href" @click="navigate" :class="{ 'router-link-active': isActive, 'router-link-exact-active': isExactActive }" class="nav-link">Publica tu espacio</h2>
            </template>
          </router-link>

          <pv-button v-if="!isLoggedIn" @click="openLogin" class="custom-button md:hidden" label="Inicia sesión">Iniciar Sesión</pv-button>
          <div v-else class="user-display flex items-center border-rounded">
            <i class="pi pi-bars text-red-600 mr-2"></i>
            <span class="font-bold">{{ user.name }}</span>
          </div>
        </pv-sidebar>

        <div class="hidden text-center md:flex lg:flex-row lg:gap-5 gap-3 align-items-center navbar-links" aria-label="toolbar features content">
          <router-link v-for="item in gohome" :key="item.label" :to="item.to" custom>
            <template v-slot="{ navigate, href, isActive, isExactActive }">
              <h2 :href="href" @click="navigate" :class="{ 'router-link-active': isActive, 'router-link-exact-active': isExactActive, 'text-xs': true, 'lg:text-base': true }">Inicio</h2>
            </template>
          </router-link>

          <router-link v-for="item in subscriptions" :key="item.label" :to="item.to" custom>
            <template v-slot="{ navigate, href, isActive, isExactActive }">
              <h2 :href="href" @click="navigate" :class="{ 'router-link-active': isActive, 'router-link-exact-active': isExactActive, 'text-xs': true, 'lg:text-base': true }">Subscripciones</h2>
            </template>
          </router-link>

          <router-link v-for="item in createspace" :key="item.label" :to="item.to" custom>
            <template v-slot="{ navigate, href, isActive, isExactActive }">
              <h2 :href="href" @click="navigate" :class="{ 'router-link-active': isActive, 'router-link-exact-active': isExactActive, 'text-xs': true, 'lg:text-base': true }" class="nav-link">Publica tu espacio</h2>
            </template>
          </router-link>
        </div>
      </div>
    </template>
    <template #end>
      <pv-splitbutton :model="items">
        <div aria-label="login button" class="hidden md:flex text-center items-center md:text-xs lg:text-base md:space-x-2 lg:space-x-4">
          <router-link to="/register"></router-link>
          <pv-button v-if="!isLoggedIn" @click="openLogin" class="custom-button md:text-xs lg:text-base" label="Inicia sesión">Iniciar Sesión</pv-button>
          <div v-else class="user-display flex items-center">
            <span @click="toggleSplitButton" class="font-bold mr-3">{{ user.name }}</span>
            <i class="pi pi-bars text-red-600"></i>
          </div>
          <TheUserLogin ref="login" :showLogin="showLogin" @login-success="handleLoginSuccess" @update:showLogin="handleCloseLogin"/>
        </div>
        <TheUserLogin ref="login" :showLogin="showLogin" @login-success="handleLoginSuccess" @update:showLogin="handleCloseLogin"/>
      </pv-splitbutton>
    </template>

  </pv-toolbar>
  <hr class="border-1 shadow-1 border-gray-200">

  <TheUserLogin :showLogin="showLogin" @login-success="handleLoginSuccess" @update:showLogin="handleCloseLogin"/>
</template>

<script>
import TheUserLogin from "../../user/components/the-user-login.component.vue";
import TheUserForgotPasswordComponent from "../../user/components/the-user-forgot-password.component.vue";

export default {
  name: 'navbar-content',
  components: {
    TheUserLogin,
    TheUserForgotPasswordComponent
  },
  props: {
    showLogin: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      showSplitButton: false,
      isLg: window.innerWidth >= 1024,
      isLoggedIn: false,
      user: {
        name: '',
        email: ''
      },
      items: [
        {
          label: 'Mis propiedades',
        },
        {
          label: 'Cuenta',
        },
        {
          label: 'Cerrar sesión',
        }
      ],
      subscriptions: [
        {
          label: 'Type',
          to: '/type-subscription'
        }
      ],
      createspace: [
        {
          label: 'Start',
          to: '/start'
        }
      ],
      gohome: [
        {
          label: 'Home',
          to: '/home'
        }
      ],
      visible: false
    };
  },
  methods: {
    openLogin() {
      this.$emit('update:showLogin', true);
    },
    handleCloseLogin() {
      this.$emit('update:showLogin', false);
    },
    handleLoginSuccess(user) {
      this.isLoggedIn = true;
      this.user = user;
      localStorage.setItem('user', JSON.stringify(user));
      this.handleCloseLogin();
    },
    checkLoginStatus() {
      const user = localStorage.getItem('user');
      if (user) {
        this.user = JSON.parse(user);
        this.isLoggedIn = true;
      }
    },
  },
  mounted() {
    this.checkLoginStatus();
  }
};
</script>

<style scoped>
.toolbar {
  border-radius: 0;
  width: 85%;
  margin: 0 auto;
}

@media (min-width: 1200px) {
  .toolbar {
    width: 85%;
  }
}

@media (min-width: 768px) and (max-width: 1199px) {
  .toolbar {
    width: 85%;
  }
}

@media (max-width: 767px) {
  .toolbar {
    width: 90%;
  }
}

h2:hover, .router-link-active, .router-link-exact-active {
  cursor: pointer;
  color: red;
}

h2 {
  color: black;
  font-size: 1rem;
  font-weight: bold;
}

.toolbar-mini {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

@media (min-width: 376px) and (max-width: 625px) {
  .toolbar-mini {
    font-size: 14px;
    gap: 140px;
  }
}

@media (min-width: 321px) and (max-width: 376px) {
  .toolbar-mini {
    font-size: 14px;
    gap: 100px;
  }
}

@media screen and (max-width: 320px) {
  .toolbar-mini {
    font-size: 14px;
    gap: 50px;
  }
}

.navbar-links img {
  cursor: pointer;
}

.no-underline * {
  text-decoration: none;
}

.nav-link {
  color: gold;
  font-size: 1rem;
  font-weight: bold;
  transition: color 0.3s;
}

.nav-link:hover, .router-link-active, .router-link-exact-active {
  color: red;
}

.custom-button {
  background-color: white;
  border: 2px solid red;
  color: red;
  padding: 8px 20px;
  margin: 5px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
}

.custom-button:hover {
  background-color: red;
  color: white;
}

.text-black {
  color: black;
}

.user-display {
  border: 2px solid red;
  padding: 8px 20px;
  border-radius: 0.5rem;
}

.pi.pi-bars::before {
  color: red;
}
</style>
