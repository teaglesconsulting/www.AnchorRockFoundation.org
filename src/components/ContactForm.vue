<template lang="pug">
  form(name="ARF Contact" method="POST" data-netlify-recaptcha="true" data-netlify="true" action="/confirmations/contact")
    div.field
      label.label Name
      div.control
        input.input( type="text" placeholder="Name")

    div.field
      label.label Email
      div.control
        input.input( type="text" placeholder="Email")

    div.field
      label.label Message
      div.control
        textarea.textarea(placeholder="Message")

    div.field
      div.control
        button.button Send
</template>
