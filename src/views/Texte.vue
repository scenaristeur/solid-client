<template>
  <div class="container">
    Text
    <b-form-textarea
    id="textarea"
    v-model="text"
    placeholder="Enter text..."
    rows="3"
    max-rows="6"
    ></b-form-textarea>
    <b-input-group size="lg" prepend="Path">
      <b-form-input v-model="path"></b-form-input>
    </b-input-group>
    <b-button @click="send">Send</b-button>

  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Texte',
  components: {
    //  HelloWorld
  },
  data: function () {
    return {
      text: '',
      path: 'file/text1.txt'
    }
  },
  methods: {
    send() {
      console.log(this.text, this.path, this.server)
    //  let content = document.getElementById('content').value
      //let filename = document.getElementById('filename').value
    //  console.log(content, filename)
      fetch(this.server+this.path, {
        headers: {"Content-type": "text/plain; charset=UTF-8"},
        method: 'PUT',
        body: this.text
      })
      .then(response => console.log(response))
      .catch((error) => {
        console.error('Error:', error);
      });
    }
  },
  computed:{
   server(){
     return this.$store.state.server
   },
 }

}
</script>
