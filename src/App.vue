<template>
  <div id="app">
    <app-feature></app-feature>
    <app-user></app-user>
    <app-registration></app-registration>
    <app-registrations></app-registrations>
  </div>
</template>

<script>
  import Registration from './components/Registration.vue';
  import Registrations from './components/Registrations.vue';
  import User from './components/User.vue';
  import Feature from './components/Feature.vue';

export default {
    components: {
        appRegistration: Registration,
        appRegistrations: Registrations,
        appUser:User,
        appFeature:Feature,
    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
