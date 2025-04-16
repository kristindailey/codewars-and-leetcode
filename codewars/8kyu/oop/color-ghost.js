/* CHALLENGE DESCRIPTION

Create a class Ghost.

Ghost objects are instantiated without any arguments.

Ghost objects are given a random color attribute of "white" or "yellow" or "purple" or "red" when instantiated.

ghost = new Ghost();
ghost.color => "white" or "yellow" or "purple" or "red"
*/

// MY SOLUTION
class Ghost {
    constructor() {
        const colors = ["white", "yellow", "purple", "red"];
        this.color = colors[Math.floor(Math.random() * colors.length)];
    }
}

// OTHER SOLUTION
class Ghost {
    constructor() {
        this.colors = ["white", "yellow", "purple", "red"];
    }

    get color() {
        return this.colors[Math.floor(Math.random() * this.colors.length)];
    }
}