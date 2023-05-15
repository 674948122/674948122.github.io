<template>
    <Teleport to="body">
        <div id="container"></div>
    </Teleport>
</template>

<script>
export default {
    name: "Nebulon",
    components: {},
    data() {
        return {};
    },
    computed: {},
    created() {},
    mounted() {

    },
    beforeDestroy() {},
    methods: {},
};
</script>

<style lang="scss" scoped>
#container {
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 2;
}
</style>
