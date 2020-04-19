<template lang="pug">
  div.section.mb-2
    h3.title Contact Form
    p.subtitle.is-6.mb-1 Please feel free to fill out the form below or email us at <a href="contactus@anchorrockfoundation.org">ContactUs@AnchorRockFoundation.org'</a>
    form(name="ARF Contact" method="POST" action="https://formbucket.com/f/buk_fksDaZZVJ6fK6GDAIMJzoRgw")
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
