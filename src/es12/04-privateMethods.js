class User {

    // Constructor - "Creando una nueva instancia de User"
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    // Methods
    greetings(){
        return "Hello!";
    }

    speak(){
        return `${this.greetings()} ${this.name}`; 
    }

    #getAge(){ // Lo hace privado.
        return this.age;
    }

    setAge(n){
        this.age = n;
    }

};

const user = new User("Gian",24);
user.setAge(13)
console.log(user.getAge());
