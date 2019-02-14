const o = {
    name: 'Julie',
    getBackWards: function () {
        function getReverseName() {
            let nameBackWards = '';
            for (let i = this.name.lengh-1; 0 <= i; i--) {
                nameBackWards += this.name[i];
            }
            return nameBackWards;
        }
    }
}