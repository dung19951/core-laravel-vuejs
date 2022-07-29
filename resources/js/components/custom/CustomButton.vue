<template>
  <el-button
    :width="`${width}`"
    :height="`${height}`"    
    class="btn-custom"
    :class="mode"
    :type="`${type}`"
    @click="$emit('click')"
  >
    {{ label }}
  </el-button>
</template>

<script>
export default {
  name: 'CustomButton',
  props: {
    width: {
      type: String,
      default: '100px',
      required: false,
    },
    height: {
      type: String,
      default: '40px',
      required: false,
    },
    label: {
      type: String,
      default: 'Submit',
      required: false,
    },
    mode: {
      type: String,
      default: 'blue',
      require: false,
    },
    type: {
      type: String,
      default: 'button',
      require: 'true',
    },
    classes: {
      type: String,
      default: '',
    },
  },
};
</script>