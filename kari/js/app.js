const vm = new Vue({
    el: '#app',
    data: {
        isGnav: false,
        image: ['01', '02', '03'],
        currentImg: null,
        currentNum: null,
    },
    methods: {
        toggleGnav() {
            this.isGnav = !this.isGnav
        },
        bg(img) {
            console.log(img)
            return `backgroundImage:url('./assets/${img}.png')`
        },
        isShowImg(img) {
            console.log(img, this.currentImg)
            if (this.currentImg === img) {
                return true
            }
        },
    },
    created() {
        this.currentNum = this.image.length
        this.currentImg = '0' + this.image.length
    },
    mounted() {
        setInterval(() => {
            if (this.currentNum > 1) {
                this.currentNum--
            } else {
                this.currentNum = this.image.length
            }
            this.currentImg = '0' + this.currentNum
        }, 3000)
    },
});
