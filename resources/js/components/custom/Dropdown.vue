<template>
    <div class="dropdown" :width="`${width}`">
        <button
            type="button"
            class="btn btn-custom font-weight-normal w-100"
            data-toggle="dropdown"
        >
            <span class="label">{{ label ? label : "" }}</span>
        </button>
        <div class="dropdown-menu">
            <!-- <div v-for="menu in menusDropdown">
        <a class="dropdown-item" :href="menu.action">{{ menu.label }}</a>
      </div> -->
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        label: {
            type: String,
        },
        menusDropdown: {
            type: Array,
        },
        width: {
            type: String,
        },
    },
};
</script>

<style scoped>
.label {
    font-size: 14px;
    font-family: "Source Han Sans JP";
}
.dropdown {
    width: 5rem;
}
</style>
