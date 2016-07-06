(()=>{

    class Person{
        constructor(name, age = 37){
            this._name = name;
            this._age = age;
            this._type = 'person';
        }

        get age(){ return this._age; }
        set age(age){
            console.log(`Setting age to ${age}...`);
            this._age = age;
        }
        render(){
            console.log(`Hi! I am a ${this._type} called ${this._name}, and I am ${this._age}`);
        }

        // Static function
        static loadPeople(){
            return[
                new Person('Bruce'),
                new Person('Troy')
            ];
        }
    }

    // Inheritance
    class Hero extends Person{
        // Overriding parent constructor
        constructor(){
            super('Superman from Krypton', 'ageless');  // parent constructor call
            this._type = 'hero';
        }
        // Overriding parent method
        render(){
            super.render();     //  parent class function call
            console.log(`I've got the super powers`);
        }
        fly(){
            console.log('...And I can fly!');
        }
    }

    const rocky = new Person('Rocky Balboa');
    rocky.render();

    rocky.age = 38;
    rocky.render();

    //  Calling static function on Class directly
    console.log('Calling static function now...');
    const [p1, p2] = Person.loadPeople();
    p1.render();
    p2.render();

    // Inheritance call
    const superman = new Hero('Superman');
    superman.render();
    superman.fly();
})();
