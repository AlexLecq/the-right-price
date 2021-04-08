export default {
    data: function () {
        return {
            priceToFound: 0,
            hitMax: 5,
            expirationTime: 2,
            mode: this.$modes.hit,
            rangeMin: 0,
            rangeMax: 100
        };
    },
    methods: {
        isOkForPlay: function () {
            switch(this.mode){
                case this.$modes.hit:
                        return !isNaN(this.hitMax) && this.hitMax > 0 && !isNaN(this.priceToFound);
                case this.$modes.timer: 
                        return !isNaN(this.expirationTime) && this.expirationTime > 0 && !isNaN(this.priceToFound);
            }
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
                this.priceToFound = Math.floor(Math.random() * (this.rangeMax - this.rangeMin) + this.rangeMin)
                console.log(this.priceToFound)
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