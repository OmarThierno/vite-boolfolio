<script>
import axios from 'axios';
import { store } from '../store';

export default {
  data() {
    return {
      store,
      form: {
        name: '',
        lastname: '',
        email: '',
        phone_number: '',
        message: ''
      },
      contactSend: false,
      isLoading: false,
      errors: {},
    }
  },
  methods: {
    sendForm() {
      this.isLoading = true,
        console.log('sendForm')
      axios.post(`${this.store.apiUrl}/api/leads`, this.form)
        .then((resp) => {
          if (resp.data.success) {
            this.contactSend = true;
            this.clearFields();
            if(this.contactSend) {
              this.resetContactSend()
            }
          }
        })
        .catch(errors => {
          if(errors.response.status === 422) {
            this.errors = errors.response.data.errors
          }
        }).finally(() => {
          this.isLoading = false
        })
    },
    clearFields() {
      this.form.name = '';
      this.form.lastname = '';
      this.form.email = '';
      this.form.phone_number = '';
      this.form.message = '';
    },
    resetContactSend() {
      setTimeout(() => {
        this.contactSend = false;
      }, 3000);
    }
  }
}
</script>

<template>
  <div class="container my-3">
    <h1>Contacts</h1>

    <form action="">
      <div class="row row-cols-1 row-cols-md-2">
        <div class="col">
          <div class="alert alert-success" v-if="contactSend">
            You message has been sent successfully!
          </div>
          <div class="mb-3">
            <label for="name" class="form-label">Insert your name</label>
            <input :class="{'is-invalid': errors.name}" type="text" class="form-control" id="name" placeholder="Marco" v-model="form.name">
            <div v-if="errors.name" class="invalid-feedback">{{ errors.name[0] }}</div>
          </div>
          <div class="mb-3">
            <label for="lastname" class="form-label">Insert your lastname</label>
            <input :class="{'is-invalid': errors.lastname}" type="text" class="form-control" id="lastname" placeholder="Rossi" v-model="form.lastname">
            <div v-if="errors.lastname" class="invalid-feedback">{{ errors.lastname[0] }}</div>
          </div>
          <div class="mb-3">
            <label for="email" class="form-label">Insert your email</label>
            <input :class="{'is-invalid': errors.email}" type="email" class="form-control" id="email" placeholder="marco@rossi.com" v-model="form.email">
            <div v-if="errors.email" class="invalid-feedback">{{ errors.email[0] }}</div>
          </div>
          <div class="mb-3">
            <label for="phone-number" class="form-label">Insert your phone number</label>
            <input type="text" class="form-control" id="phone-number" placeholder="3546372048"
              v-model="form.phone_number">
          </div>
          <div class="mb-3">
            <label :class="{'is-invalid': errors.message}" for="message" class="form-label">Insert message</label>
            <textarea class="form-control" id="message" rows="3" v-model="form.message"></textarea>
            <div v-if="errors.message" class="invalid-feedback">{{ errors.message[0] }}</div>
          </div>
        </div>
      </div>
      <button @click.prevent="sendForm" type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<style lang="scss" scoped></style>