<template>
    <div>
        <textarea
            class="custom-textarea"
            v-model="textValue"
            :name="name"
            :placeholder="placeholder"
            :rows="row"
            :width="`${width}px`"
            :height="`${height}px`"
            @input="updateValue"
        />
        <div v-if="error" class="error text-error">
            {{ error }}
        </div>
        <div v-if="systemError" class="error text-error">
            {{ systemError }}
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            textValue: this.initValue ? this.initValue : this.value,
        };
    },
    props: {
        value: {
            type: String,
            default: "",
        },
        name: {
            type: String,
            default: "",
        },
        initValue: {
            type: String,
            default: "",
        },
        placeholder: {
            type: String,
            default: "",
        },
        width: {
            type: Number,
            default: 600,
        },
        row: {
            type: Number,
            default: 5,
        },
        height: {
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
    },
    methods: {
        updateValue(e) {
            this.$emit("input", e.target.value);
        },
    },
    watch: {
        value: function (newVal) {
            this.textValue = newVal;
        },
    },
};
</script>
