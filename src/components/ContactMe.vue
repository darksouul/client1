<template>
  <div class="contact-form">
    <form @submit.prevent="submitForm">
      <label for="name">Name</label>
      <input type="text" id="name" v-model="name" required>

      <label for="email">Email</label>
      <input type="email" id="email" v-model="email" required>

      <label for="message">Message</label>
      <textarea id="message" v-model="message" required></textarea>

      <button type="submit">Send Message</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      email: '',
      message: ''
    }
  },
  methods: {
    submitForm() {
      fetch('/.netlify/functions/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: this.name,
          email: this.email,
          message: this.message
        })
      })
      .then(response => {
        if (response.ok) {
          alert('Your message has been sent!');
          this.name = '';
          this.email = '';
          this.message = '';
        } else {
          throw new Error('Something went wrong!');
        }
      })
      .catch(error => {
        console.error(error);
        alert('There was an error sending your message. Please try again later.');
      });
    }
  }
}
</script>
