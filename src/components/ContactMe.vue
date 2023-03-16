<template>
  <form @submit.prevent="submitForm" netlify>
    <div>
      <label for="name">Name:</label>
      <input type="text" id="name" v-model="name" required>
    </div>
    <div>
      <label for="email">Email:</label>
      <input type="email" id="email" v-model="email" required>
    </div>
    <div>
      <label for="message">Message:</label>
      <textarea id="message" v-model="message" required></textarea>
    </div>
    <button type="submit">Submit</button>
  </form>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      name: '',
      email: '',
      message: '',
    };
  },
  methods: {
    async submitForm() {
      try {
        await axios.post('/.netlify/functions/contact', {
          name: this.name,
          email: this.email,
          message: this.message,
        });
        this.name = '';
        this.email = '';
        this.message = '';
        alert('Message sent successfully!');
      } catch (error) {
        console.error(error);
        alert('An error occurred while sending your message.');
      }
    },
  },
};
</script>
