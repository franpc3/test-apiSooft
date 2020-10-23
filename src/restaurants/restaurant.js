var restaurantes = [];

export const addRestaurant =  (req, res, next) => {

  const { 
      name,
      kindOfRestaurant,
      songs
    } = req.body;


    if( name == "" || kindOfRestaurant == "" || songs == ""){
      res.status(400).send( 'Error - No se puede añadir el restaurante, recuerde debe contar con los siguientes datos: "name", "kindOfRestaurant", "songs" ')
    }else{

      const newRestaurant = {
        name,
        kindOfRestaurant,
        songs
      };

        for(let i = 0; i<restaurantes.length; i++){
        console.log(restaurantes[i])
          if(name == restaurantes[i].name){
            res.status(400).send( 'Error - Ya existe un restaurante con ese nombre');           
            next();
        }
      }
     
        restaurantes.push(newRestaurant);
      res.send("Se agrego el restaurante");   
      
    }
}


export const getRestaurant = (req,res,next) =>{

   const {kindOf} = req.params;
   console.log(kindOf);

  if(kindOf !== "" || kindOf !== undefined){
    let byKind = [];

    for(let i = 0; i<restaurantes.length; i++){
        if(kindOf == restaurantes[i].kindOfRestaurant){
          byKind.push(restaurantes[i]);
      }
    }

  res.send(byKind);
    

  }else{

    console.log("entra a los restaurantes");
    res.send(restaurantes); 

  }



}