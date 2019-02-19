const o = {
    name: 'Julie',
    getBackWards: function () {
        function getReverseName() {
            let nameBackWards = '';
            for (let i = this.name.length-1; 0 <= i; i--) {
                nameBackWards += this.name[i];
            }
            return nameBackWards;
        } // End getReverseName()
        return `${getReverseName()} si eman ym ,olloeH`
    },
};
console.log(o.getBackWards());
