const o = {
    name: 'Mike',
    greetBackwards: function() {
        const self = this;

        function getReverseName(){
            let nameBackwards = '';
            for (let i = self.name.length -1; 0<=i; i--){
                nameBackwards += self.name[i];
            } // use word as array.
            return nameBackwards; 
        }
        return `${getReverseName()} :si emaN`;
    },
};
console.log(o.greetBackwards());

