//FEATURES AVAILABLE : 

//naligai to vinaligai  = 5.12 -> 312         || nalToVinal(x)
//vinaligai to naligai  = 312 -> 5.12         || VinalToNal(x)
//Naligai addition = 26.01-5.12 -> 20.49      || nalSub(x,y)
//Naligai Subtraction = 26.01+5.12 -> 31.13   || nalAdd(x,y)



function nalToVinal(x)
{
    return (Math.floor(x)*60)+((x*100)%100)
}

function VinalToNal(x)
{
    let result = parseInt(x/60)
    result = result + (x-(result*60))/100;
    return result.toFixed(2);
}

function nalSub(x,y)
{
    x = nalToVinal(x);
    y = nalToVinal(y);
    let z = VinalToNal(x-y)
    return z;
}

function nalAdd(x,y)
{
    x = nalToVinal(x);
    y = nalToVinal(y);
    let z = VinalToNal(x+y)
    return z;
}










