var x=10;
//normal function
function test()
{
    var x=78;
    console.log("Value of varname inside the normal funciton",x)
    console.log("Window object while referring to this.varname",this.x)

}
test();

var person={
    x: 99,
    fn:'Rahul',
    ln:'Noronha',
    age: 21,
    disp:function()
    {
        console.log(person.fn,person.ln,person.age,this.x)

    },
}

person.disp()

person2=person
person['age']=99;
person2.disp()

var fruits = ["hi","bye"]
console.log(fruits["hi"])