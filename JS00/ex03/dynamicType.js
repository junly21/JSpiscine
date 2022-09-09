const dynamicType = {
    
    put: function(input) {
    console.log(input);
    this.num = input;
    console.log(typeof this.num);
    },

    change: function (cast) {
        if (cast == "String"){
            this.num = String(this.num);
            console.log(typeof this.num);
        }
        else if (cast == "Array")
        {   
            this.num = Array(this.num);
            console.log(this.num);
        }
        else if (cast == "Object")
        {
            this.num = { put: this.num };
            console.log(typeof this.num);
            console.log( this.num);
        }
    }
    
}

dynamicType.put(42);
dynamicType.change("String");
dynamicType.change("Array");
dynamicType.change("Object");