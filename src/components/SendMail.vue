<template>
    <div>
        <form @submit.prevent="submit" @reset="onReset">
            <div>
            <label>name</label>
            <input v-model="name" />
            </div>

            <div>
            <label>email</label>
            <input v-model="email" />
            </div>

            <div>
            <label>message</label>
            <textarea v-model="message"></textarea>
            </div>

            <button type="submit">submit</button>
            <button type="reset">reset</button>
        </form>
    </div>
    <div class="form-container">
        <form class="contact-form">
            <h2>CONTACT</h2>
            <input type="text" id="name" placeholder="Full Name">
            <input type="email" id="email" placeholder="Email">
            <input type="submit" class="submit" value="Send Message">
        </form>
    </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      email: "",
      message: ""
    };
  },
  methods: {
    onReset() {
      this.name = "";
      this.email = "";
      this.message = "";
    },
    submit() {
    // https://thewebdev.info/2021/01/16/create-a-contact-form-with-vue-3-and-javascript/
      if (!localStorage.getItem("messages")) {
        localStorage.setItem("messages", JSON.stringify([]));
      }
      const messages = JSON.parse(localStorage.getItem("messages"));
      const { name, email, message } = this;
      messages.push({
        name,
        email,
        message,
      });
      localStorage.setItem("messages", JSON.stringify(messages));
    },
    sendEmail(){
      let formData = {
        name: name.value,
        email: email.value,
        subject: 'This is the Subject Line',
        message: 'This is the message line!!!'
      }

      let xhr = new XMLHttpRequest();
      xhr.open('POST', '/');
      xhr.setRequestHeader('content-type', 'application/json');
      xhr.onload = function(){
          if(xhr.responseText == 'sucess'){
              alert('Email sent');
              name.value = '';
              email.value = '';
              subject.value = '';
              message.value = '';
          }else{
              alert('Something went wrong!')
          }
      }
      
      xhr.send(JSON.stringify(formData));
      }
  },
}
</script>
