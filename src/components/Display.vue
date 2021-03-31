<template>
<div>
  <br>
  <div class="container">
    <div class="row">
      <form @submit.prevent="submit">
      <RadioButton
        id="yesNoQuestion"
        v-model="radioButton"
        :options="[
        {
          value: 'textField',
          name: 'Radio Button 1'
        },
        {
          value: 'dateField',
          name: 'Radio Button 2'
        },
        {
          value: 'form',
          name: 'Radio Button 3'
        }
      ]"
        label="Radio Button"
      >
        <template #textField>
          <br>
          <div class="form-floating">
            <input
              type="text"
              class="form-control"
              id="textField"
              name="textField"
              v-model="textField"
              placeholder="Hey!"
            />
          <label for="textField">Your text here...</label>
          </div>
          <br>
          <label for="textField" class="fs-5 fw-lighter">Choose 1</label>
          <div class="container">
            <input type="radio" name="reason" value="A" v-model="optionChoice"/>
            <label for="textField">Pilihan A</label>
            <br>
            <input type="radio" name="reason" value="B" v-model="optionChoice"/>
            <label for="textField">Pilihan B</label>
            <br>
            <input type="radio" name="reason" value="">Other <input type="text" name="other_reason" v-model="optionChoice" />
          </div>
        </template>

        <template #dateField>
          <br>
          <div class="form-floating">
            <input
              type="date"
              class="form-control"
              id="dateField"
              name="dateField"
              v-model="dateField"
            />
            <label for="dateField">Input Date </label>
          </div>
        </template>

        <template #form>
          <br>
          <form>
          <div class="form-floating">
            <input
              type="text"
              class="form-control"
              name="name"
              placeholder="Name..."
              v-model="userName"
            />
            <label>Name</label>
          </div>
            <div class="form-floating">
              <input
                type="password"
                class="form-control mt-2"
                name="password"
                placeholder="Password"
                v-model="userPassword"
              />
              <label>Password</label>
            </div>
          </form>
        </template>
      </RadioButton>
      <div class="container mb-2 mt-2 row">
        <button type="submit.prevent" class="btn btn-primary btn-sm">Submit</button>
      </div>
      </form>
    </div>
  </div>
</div>
</template>

<script>
import RadioButton from '@/components/RadioButton.vue'

export default {
  name: 'Display',
  components: {
    RadioButton
  },

  data () {
    return {
      radioButton: null,
      textField: '',
      dateField: '',
      userName: '',
      userPassword: '',
      optionChoice: ''
    }
  },
  methods: {
    submit () {
      alert('Our Server still repairing, please be patient')
    }
  }
}
</script>
