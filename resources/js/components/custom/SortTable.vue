<template>
    <span class="arrow-container" @click="sortData(sortBy, sortDir)">
        <div class="arrow arrow-down gray">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="9"
                height="5"
                viewBox="0 0 9 5"
            >
                <path
                    id="Polygon_26"
                    data-name="Polygon 26"
                    d="M4.5,0,9,5H0Z"
                    :fill="columnData.sortDir == 'asc' ? '#cccccc' : '#354259'"
                />
            </svg>
        </div>
        <div class="arrow arrow-down gray">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="9"
                height="5"
                viewBox="0 0 9 5"
            >
                <path
                    id="Polygon_26"
                    data-name="Polygon 26"
                    d="M4.5,0,9,5H0Z"
                    transform="translate(9 5) rotate(180)"
                    :fill="columnData.sortDir == 'desc' ? '#cccccc' : '#354259'"
                />
            </svg>
        </div>
    </span>
</template>

<script>
export default {
    props: ["sortBy"],
    data() {
        return {
            sortDir: "",
            columnData: {},
        };
    },
    methods: {
        sortData(sortBy, sortDir) {
            if (!this.columnData.sortDir) {
                this.columnData = {
                    sortBy: sortBy,
                    sortDir: "desc",
                };
            }

            if (this.columnData.sortBy === sortBy) {
                if (this.columnData.sortDir == "asc") {
                    sortDir = "desc";
                    this.columnData.sortDir = "desc";
                } else {
                    sortDir = "asc";
                    this.columnData.sortDir = "asc";
                }
            }

            this.$emit("sort", sortBy, sortDir);
        },
    },
};
</script>
