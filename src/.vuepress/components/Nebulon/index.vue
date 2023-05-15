
<script>

export default {
    name: "Nebulon",
    data(){
        return {
            isLoad: false
        }
    },
    render(){},
    mounted() {
        this.load()
    },
    beforeDestroy() {

    },
    methods: {
        load(){
            const wrap = document.querySelector('.blog-hero .mask')

            const frameDom = document.createElement('iframe')
            frameDom.src = '/assets/nebulon/index.html'
            frameDom.id = 'nebulon'
            frameDom.style.cssText = `
                width: 100%;
                height: 100%;
                border: none;
            `
            wrap.appendChild(frameDom)
        }
    },
};
</script>

