import Vue from 'vue';
import App from './App.vue';
import store from './data/store';

const app = new Vue({
  store,
  ...App
});

export { app, store };