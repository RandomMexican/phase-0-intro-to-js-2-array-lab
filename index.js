// Write your solution here!
const cats = ["Milo", "Otis", "Garfield" ];

function destructivelyAppendCat(name)
{
    cats.push(name);

}
function destructivelyPrependCat(name)
{
    cats.unshift(name);

}
function destructivelyRemoveLastCat()
{
    cats.pop();
}
function destructivelyRemoveFirstCat()
{
    cats.shift();
}
function appendCat(name)
{
    const copyOfCats = [...cats, name];
    return copyOfCats;
}
function prependCat(name)
{
    const copyOfCats2 = [name,...cats];
    return copyOfCats2;
}
function removeLastCat()
{
    const copyOfCats3 = [...cats];
    copyOfCats3.pop();
    return copyOfCats3;
}
function removeFirstCat()
{
    const copyOfCats = [...cats];
    copyOfCats.shift();
    return copyOfCats;
}

