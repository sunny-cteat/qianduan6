//class定义父类函数Father
class Father{
    constructor(name){
        this.name = name;
    }
    getAge(age){
        this.age = age;
        console.log(age);
    }
    setAge(){
        return this.age;
    }
    getHeight(height){
        this.height = height;
        console.log(height);
    }
    setHeight(){
        return this.height;
    }
}
//生成实例
let father = new Father('李华爸爸');
console.log(father.name);
father.getAge(48);
console.log(father.setAge());
father.getHeight(160);
console.log(father.setHeight());
//class定义子类Son并继承父类Father的构造方法
class Son extends Father{
    constructor(name){
        super(name);
    }
}
let son1 = new Son('李华');
console.log(son1.name);
son1.getAge(18);
console.log(son1.setAge());
son1.getHeight(120);
console.log(son1.setHeight());








