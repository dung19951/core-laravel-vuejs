<template>
    <div>
        <input
            :type="type"
            class="custom-input"
            v-model="inputValue"
            :name="name"
            :id="name"
            :placeholder="placeholder"
            :maxlength="maxlength"
            @change="updateValue"
            :width="`${width}`"
            :height="`${height}`"
            :class="classes"
            :disabled="disabled"
        />
        <div class="error text-error" v-if="error">
            {{ error }}
        </div>
        <div class="error text-error" v-if="systemError">
            {{ systemError }}
        </div>
    </div>
</template>
<script>
export default {
    $_veeValidate: {
        name() {
            return this.name;
        },
        value() {
            return this.inputValue;
        },
    },
    data() {
        return {
            inputValue: this.initValue ? this.initValue : this.value,
        };
    },
    props: {
        value: {
            type: String | Number,
            default: "",
        },
        name: {
            type: String,
            default: "",
        },
        classes: {
            type: String,
            default: "",
        },
        type: {
            type: String,
            default: "text",
        },
        initValue: {
            type: String | Number,
        },
        width: {
            type: Number,
        },
        height: {
            type: Number,
            default: 40,
        },
        maxlength: {
            type: Number,
            default: null,
        },
        placeholder: {
            type: String,
            default: "",
        },
        error: {
            type: String,
            required: false,
        },
        systemError: {
            type: String,
            required: false,
        },
        disabled: {
            type: Boolean,
            required: false,
        },
    },
    computed: {},
    watch: {
        initValue(newVal) {
            this.inputValue = newVal;
        },
        value(newVal) {
            this.inputValue = newVal;
        },
    },
    methods: {
        updateValue(e) {
            this.$emit("input", this.inputValue);
        },
    },
};
</script>
