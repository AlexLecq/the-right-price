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
            console.log(this.$modes)
            switch(+this.mode){
                case this.$modes.hit:
                        return !isNaN(this.hitMax) && this.hitMax > 0 && !isNaN(this.priceToFound) && (this.rangeMin < this.rangeMax);
                case this.$modes.timer: 
                        return !isNaN(this.expirationTime) && this.expirationTime > 0 && !isNaN(this.priceToFound) && (this.rangeMin < this.rangeMax);
                case this.$modes.both: 
                        return !isNaN(this.expirationTime) && this.expirationTime > 0 && !isNaN(this.priceToFound) && (this.rangeMin < this.rangeMax) && !isNaN(this.hitMax) && this.hitMax > 0;
            }
        },
        emitConfig: function () {
            const tmp = !this.isOkForPlay()
            console.log(tmp);
            if (tmp) {
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