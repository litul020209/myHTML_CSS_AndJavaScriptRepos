let s = `Litul Biswal`;

for ( let x of s)
{
    console.log(x)
}

let obj = 
{ 
    name:"litul",
    roll:1,
    age:20
    
}

console.log(obj.name)

for (let x in obj)
{
    console.log(`${x} -----> ${obj[x]}`)
}