<template lang="pug">
  div.section.has-shadow.mb-2
    h3.title.mb-2 Volunteer Form
    form(name="ARF Volunteer Form" method="POST" action="https://formbucket.com/f/buk_JJEf7uWIB5SkjPNfQnL7Et2n")
      div.field
        label.label Name
        div.control
          input.input(name="name" type="text" placeholder="Full Name")

      div.field
        label.label Email
        div.control
          input.input(name="email" type="email" placeholder="Email Address")

      div.field
        label.label Phone
        div.control
          input.input(name="phone" type="tel" placeholder="Phone Number")

      div.field
        label.label Address
        div.control
          input.input(name="street" type="text" placeholder="Street Address")

      div.field.is-grouped
        div.control.is-expanded
          label.label City
          input.input(name="city" type="text" placeholder="City")
        div.control
          label.label State
          input.input(name="state" type="text" placeholder="State")
        div.control
          label.label Zip
          input.input(name="zip" type="text" placeholder="Zipcode")

      div.field.mb-1
        label.label I want to volunteer as a:

      div.field.is-grouped
        div.control
          label.checkbox
            input(name="sewer" type="checkbox")
            span.ml-1 Sewer
        div.control
          label.checkbox
            input(name="packer" type="checkbox")
            span.ml-1 Packer
        div.control
          label.checkbox
            input(name="supervisor" type="checkbox")
            span.ml-1 Volunteer Coordinator
        div.control
          label.checkbox
            input(name="acknowledgement" type="checkbox")
            span.ml-1 I acknowledge that I have read and meet the requirements to volunteer

      div.field
        label.label Message
        div.control
          textarea.textarea(placeholder="Message")

      div.field
        div.control
          button(type="submit").button.is-primary I'm ready to volunteer!
</template>
