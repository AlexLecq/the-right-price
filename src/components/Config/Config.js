export default {
    data: function () {
        return {
            priceToFound: 0,
            hitMax: 5
        };
    },
    methods: {
        isOkForPlay: function () {
            if (this.priceToFound !== 0 && this.hitMax !== 0) return true
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
            this.$emit('emitConfig', {
                priceToFound: this.priceToFound,
                hitMax: this.hitMax,
            })
        },
    }
}