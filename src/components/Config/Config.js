export default {
    data: function () {
        return {
            priceToFound: 0,
            hitMax: 5,
            expirationTime: 2,
            mode: 1
        };
    },
    methods: {
        isOkForPlay: function () {
            if ((this.expirationTime && !isNaN(this.expirationTime)) && this.hitMax !== 0) return true
        },
        emitConfig: function () {
            if (!this.isOkForPlay()) {
                this.$buefy.toast.open({
                    message: 'Warning: Configuration incorrect',
                    type: 'is-danger',
                    duration: 3000
                })
                return;
            }
            if(this.priceToFound === 0){
                this.priceToFound = Math.floor(Math.random() * 100)
            }
            this.$emit('emitConfig', {
                mode: +this.mode,
                priceToFound: this.priceToFound,
                expirationTime: this.expirationTime * 60,
                hitMax: this.hitMax,
            })
        },
    }
}