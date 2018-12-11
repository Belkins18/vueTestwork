<template>
  <div id="app">
    <navigation/>
    <div class="main-container">
      <center-container>
        <router-view/>
      </center-container>
    </div>
    <sqreen-footer/>
  </div>
</template>

<script>
import { USER_REQUEST } from '@/store/actions/user';
import Navigation from '@/components/navigation';
import SqreenFooter from '@/components/footer';

export default {
  components: {
    SqreenFooter,
    Navigation,
  },
  name: 'app',
  created: function() {
    if (this.$store.getters.isAuthenticated) {
      this.$store.dispatch(USER_REQUEST);
    }
  },
};
</script>

<style>
body {
  margin: 0;
  font-family: 'Roboto', sans-serif;
  color: #2e426b;
}
ul {
  margin: 0;
  padding: 0;
  list-style-type: none;
}
</style>

<style lang="scss" scoped>
  .main-container {
    min-height: calc(100vh - 70px);
  }
</style>
