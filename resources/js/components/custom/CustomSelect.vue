<template>
  <div class="select-container">
    <select
      class="custom-select"
      :width="`${width}`"
      v-model="selected"
      :name="name"
      @change="updateValue"
      :disabled="disableSelect"
    >
      <option
        v-for="(item, index) in options"
        :key="index"
        :value="typeof item == 'object' ? item.id : item"
        :selected="selected == item"
      >
        {{ typeof item == 'object' ? item.label : item }}
      </option>
    </select>
    <div class="input-group text-error" v-if="error">
      {{ error }}
    </div>
    <div class="input-group text-error" v-if="systemError">
      {{ systemError }}
    </div>
  </div>
</template>
<style scoped>
select {
  height: 40px;
  background-color: #f7f7f7;
  border: 2px solid #f6f6f6;
}
</style>

<script>
export default {
  props: {
    value: {
      type: String | Number,
      default: '',
    },
    disableSelect: {
      type: Boolean,
      default: false,
    },
    name: {
      type: String,
      default: '',
    },
    width: {
      type: Number,
    },
    error: {
      type: String,
      required: false,
    },
    systemError: {
      type: String,
      required: false,
    },
    initValue: {
      type: String | Number,
      required: false,
    },
    options: {
      type: Array | Object,
      required: false,
    },
  },
  data() {
    return {
      selected: '',
    };
  },
  mounted() {
    if (this.initValue && this.initValue.length != 0) {
      this.selected = this.initValue;
    }
  },
  watch: {
    initValue(newVal) {
      this.selected = newVal;
    },
    value(newVal) {
      this.selected = newVal;
    },
  },
  methods: {
    updateValue(e) {
      this.$emit('input', this.selected);
    },
  },
};
</script>