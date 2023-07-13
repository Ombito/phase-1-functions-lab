function distanceFromHqInBlocks( blocks ){
    return Math.abs(blocks -42)
}
function  distanceFromHqInFeet( blocks ){
    return Math.abs(blocks - 42 ) * 264
}
function distanceTravelledInFeet(startblock, endblock){
    return Math.abs(startblock - endblock) * 264
}
function  calculatesFarePrice(startblock, endblock){
    const distance= distanceTravelledInFeet(startblock, endblock)
    if ( distance <= 400){
        return 0;
    }else if (distance > 400 && distance <= 2000){
        return (distance - 400) * 0.02
    }
    else if (distance > 2000 && distance <=2500){
        return 25
    }
    else if (distance >2500){
        return'cannot travel that far';
    }
}