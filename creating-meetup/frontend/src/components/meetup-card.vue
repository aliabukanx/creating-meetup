<script>
export default {
  name: 'MeetupCard',
  props:['meetup'],
  computed: {
    meetupUrl() {
      return `/meetup/${this.meetup._id}`
    }
  }
}
</script>

<template lang="pug"> 
article.card 
  img(:src="`https://picsum.photos/300/200?random=${meetup._id}`")
  h2.card-title 
    router-link(:to="meetupUrl") {{ meetup.name }} 
  p {{meetup.location}}
</template>

<style scoped>
.card{
    display: inline-block;
    color: darkorange;
    text-align: left;
    padding: 20px;
    border: 1px solid grey;
    border-radius: 3px;
    margin: 20px;
    min-width: 200px;
}
.card-title{
  color: darkred

}
 
</style>