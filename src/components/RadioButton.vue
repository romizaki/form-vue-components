<template>
<fieldset :id="id">
  <div v-for="(option, idx) in options" :key="option.text">
    <input
      :id="id + idx"
      :name="id"
      type="radio"
      :value="option.value"
      @change="updateValue(option.value)"
    />
    <label class="fs-4 fw-light" :for="id + idx">{{ option.name }}</label>
    <slot v-if="option.value === value" :name="option.value" />
  </div>
</fieldset>
</template>

<script>
export default {
  model: {
    event: 'change'
  },
  props: ['id', 'value', 'options'],
  methods: {
    updateValue (value) {
      this.$emit('change', value)
    }
  }
}
</script>
