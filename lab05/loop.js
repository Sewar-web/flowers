var animals =prompt('whate do you want from animlas');


while( animals !== "cat"  &&  animals !== "dog")

{

    animals=prompt("whate do you want from animlas");

}

var typeOFanimals='';

if(animals == "cat")
{
    typeOFanimals = '<img src ="images/cat.jpg"/>';
}

else if (animals == "dog")
{
    typeOFanimals = '<img src ="images/dog.jpg"/>';
}
var numofanimals=prompt('whats the number of animals');
var result='';

for(var i=0 ; i < numofanimals ; i++)
{
    result =result +typeOFanimals;
}

document.write(result);