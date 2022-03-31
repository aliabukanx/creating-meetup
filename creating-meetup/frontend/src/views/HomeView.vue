<script>
// @ is an alias to /src
import MeetupCard from '@/components/meetup-card.vue'
import {mapState, mapActions} from 'vuex'

export default {
  name: 'HomeView',
  components: {
    MeetupCard
  },
  computed:{
    ...mapState(['meetups', 'counter'])
  },
  methods: {
    ...mapActions (['fetchMeetups', 'incrementCounter'])
  },
  created() {
    this.fetchMeetups()
  }
  
}
</script>

<template lang="pug">
main
  section
   meetup-card(v-for="meetup in meetups", :meetup="meetup" )
  section  
   button.increment-button(@click="incrementCounter") increment
   div {{counter}}
</template>


<style scoped>
section{
  padding: 40px 0;  
}

.increment-button {
  color: darkblue;
  padding: 10px 20px;
  border-radius: 8px;
  background-color: white;
  border: 1px solid darkblue;
  font-size: 14px;
  font-weight:600;
  cursor: pointer;
  margin-bottom: 24px;
}

.increment-button:hover {
  background-color: darkblue;
  color:white;

}
</style>