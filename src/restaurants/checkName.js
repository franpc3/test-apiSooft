export default function checkName(name,restaurants) {


    for(let i = 0; i<restaurants.length; i++){
        if(name == restaurants[i]){
            return false;
        }

    }
     return true;
}