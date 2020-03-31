const Employee = (() => {
    let name = '';
    let age = 0;
    let salary = 0.0;
    const setName = (newName) => {
        name = newName;
    }
    const setAge = (newAge) => {
        age = newAge;
    }
    const setSalary = (newSalary) => {
        salary = newSalary;
    }
    const getName = () => name;
    const getAge = () => age;
    const getSalary = () => salary;
    const increaseSalary = (percentage) => {
        return getSalary() + (getSalary() * percentage);
    }
    const increaseAge = () => {
        setAge(getAge() + 1);
        return getAge();
    }
    return {
        setName: setName,
        setAge: setAge,
        setSalary: setSalary,
        increaseSalary: increaseSalary,
        increaseAge: increaseAge
    }
})()

const emp = Employee
emp.increaseSalary(15);