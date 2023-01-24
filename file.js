class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    compareAge(otherPerson) {
        if (this.age > otherPerson.age) {
            return `${this.name} is older than ${otherPerson.name}.`;
        } else if (this.age < otherPerson.age) {
            return `${otherPerson.name} is older than ${this.name}.`;
        } else {
            return `${this.name} and ${otherPerson.name} are the same age.`;
        }
    }
}

let p1 = new Person("John", 30);
let p2 = new Person("Jane", 25);
let p3 = new Person("Bob", 30);
console.log(p1.compareAge(p2)); // John is older than Jane.
console.log(p1.compareAge(p3)); // John and Bob are the same age.

class Pagination {
    constructor(items = [], pageSize = 10) {
        this.items = items;
        this.pageSize = pageSize;
    }

    paginate(page) {
        let start = (page - 1) * this.pageSize;
        let end = start + this.pageSize;
        return this.items.slice(start, end);
    }
}

let pagination = new Pagination(items = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], pageSize = 5);
console.log(pagination.paginate(1)); // [1, 2, 3, 4, 5]
console.log(pagination.paginate(3)); // [11, 12, 13, 14, 15]
