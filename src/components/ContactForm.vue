<template lang="pug">
  form(name="ARF Contact" method="POST" data-netlify="true" action="/confirmations/contact")
    div.field
      label.label Name
      div.control
        input.input(name="name" type="text" placeholder="Name")

    div.field
      label.label Email
      div.control
        input.input(name="email" type="email" placeholder="Email")

    div.field
      label.label Message
      div.control
        textarea.textarea(name="Message" placeholder="Message")

    div.field
      div.control
        button(type="submit").button Send
</template>
