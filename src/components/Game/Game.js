export default {
    props: {
        config: {
            type: Object,
            required: true
        }
    },
    data: function () {
        return {
            isWin: -3,
            priceAttempt: 0,
            possibilities: {
                win: 1,
                lose: -2,
                less: 0,
                more: -1
            },
            hitPlayer: 1,
            timer: null,
            timerExpired: false
        }
    },
    mounted: function () {
        this.startRound();
    },
    watch: {
        timerExpired: function (timerExpired) {
            if (timerExpired)
                this.isWin = this.possibilities.lose
        },
    },
    methods: {
        isCorrect: function () {
            if (this.config.priceToFound === this.priceAttempt) return this.possibilities.win;
            else if (this.priceAttempt > this.config.priceToFound) return this.possibilities.less;
            else if (this.priceAttempt < this.config.priceToFound) return this.possibilities.more;
        },
        isGameFinish: function () {
            this.$buefy.dialog.confirm({
                title: 'Game finish',
                message: this.isWin === this.possibilities.win ? 'It\'s win !' : 'It\'s lose...',
                onConfirm: () => {}
            })

            this.$emit('endGame', true)
        },
        isRoundFinish: function () {
            return [this.possibilities.win, this.possibilities.lose].indexOf(this.isWin) !== -1
        },
        checkAttempt: function () {
            if (this.isRoundFinish())
                return;

            const isCorrect = this.isCorrect();
            switch (this.config.mode) {
                case 1:
                    this.checkTimer(isCorrect)
                    break;
                case 0:
                    this.checkHit(isCorrect)
                    break;
            }
        },

        checkHit: function (isCorrect) {
            if (this.hitPlayer < this.config.hitMax && isCorrect !== this.possibilities.win) {
                this.incrementHit()
                this.isWin = isCorrect
            } else {
                this.isWin = isCorrect === this.possibilities.win ? this.possibilities.win : this.possibilities.lose
                this.isGameFinish()
            }
        },
        checkTimer: function (isCorrect) {
            if (isCorrect === this.possibilities.win) {
                this.stopTimer();
                this.isWin = isCorrect !== this.possibilities.win && this.timerExpired ? this.possibilities.lose : this.possibilities.win;
                this.isGameFinish()
            } else
                this.isWin = isCorrect
        },
        incrementHit: function () {
            this.hitPlayer++;
        },
        startTimer: function (duration, display) {
            let timer = duration,
                minutes,
                seconds;
            this.timer = setInterval(() => {
                minutes = parseInt(timer / 60, 10);
                seconds = parseInt(timer % 60, 10);

                minutes = minutes < 10 ? "0" + minutes : minutes;
                seconds = seconds < 10 ? "0" + seconds : seconds;

                display.textContent = minutes + ":" + seconds;

                if (--timer < 0) {
                    display.textContent = "Expired !";
                    this.timerExpired = true;
                }
            }, 1000);
        },
        stopTimer: function () {
            clearInterval(this.timer);
        },
        resetValue: function () {
            this.priceAttempt = 0
            this.isWin = -3
            this.timer = null
            this.hitPlayer = 1
            this.timerExpired = false
        },
        startRound: function () {
            this.resetValue()
            switch (this.config.mode) {
                case 1:
                    this.startTimer(this.config.expirationTime, document.querySelector("#time"));
                    break;
            }
        },
    },
}