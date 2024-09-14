class Human {
    //Properties
    age; //public
    #wt = 70; //private
    height = 180;

    // constructor
    constructor(newAge, newHeight, newWeight) {
        this.age = newAge;
        this.height = newHeight;
        this.#wt = newWeight;
    }

    //Behavior
    walking() {
        console.log("I m walking ", this.#wt);
    }
    running() {
        console.log("I m running");
    }

    // in order to acces priavte variable we have tp use getter and setter
    get fetchWeight() {
        return this.#wt;
    }
    set modifyWeight(val) {
        this.#wt = val;
    }
}

let obj = new Human(50, 200, 101);
console.log(obj.fetchWeight);
obj.walking();




// Default paarmeter
function sayMyName(myName = "Kallu Kalia") { //now kallu kalia is default name, ab aagr hamne funtion calling k waqt parameter pass nhi kia tou kallu kalia consider hoga otherwise pass kia tou wohi name consider hoga jo ham pass karengy.
    console.log("My name is: ", myName);
}
sayMyName("Anas");