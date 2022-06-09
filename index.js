let ScuberHq=42
function distanceFromHqInBlocks(distance){
return Math.abs(distance-ScuberHq)

}
function distanceFromHqInFeet(distance){
return Math.abs(distance-ScuberHq)*264
}
function distanceTravelledInFeet(start,destination){
    return Math.abs(destination-start)*264
}
function calculatesFarePrice(start,destination){
    const rangeInFeet=Math.abs(destination-start)*264
if (rangeInFeet<=400){
    return 0
}
else if(rangeInFeet>400 && rangeInFeet<=2000){
    return (rangeInFeet-400)*0.02

}
else if (rangeInFeet>400 && rangeInFeet<=2500){
    return 25
}
else {
    return 'cannot travel that far'}
}