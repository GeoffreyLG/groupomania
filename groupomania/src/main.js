import Vue from 'vue'
import App from './App'
import router from './router'
import vuetify from './plugins/vuetify';
import * as firebase from 'firebase'

Vue.use(vuetify)
Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App),
  created () {
    firebase.initializeApp({
      cleApiWeb: 'AIzaSyAXOWArN4sCrH7l4Am4EYFBAoJZw1YNN9M',
      authDomain:	'groupomania-34-default-rtdb.firebaseio.com',
      databaseURL:	'https://groupomania-34-default-rtdb.firebaseio.com',
      projectId:	'groupomania-34',
      storageBucket: '',
    })
  }
}).$mount('#app')