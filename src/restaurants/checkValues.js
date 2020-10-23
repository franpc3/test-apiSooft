export const checkValues = (req, res, next) => {

    const { 
        name,
        kindOfRestaurant,
        songs
      } = req.body;

      if( name == "" || kindOfRestaurant == "" || songs == ""){

            if(isNaN(name)|| isNaN(kindOfRestaurant) || isNaN(song) ){
                res.status(400).send( 'Error - No se puede añadir el restaurante, recuerde debe contar con los siguientes datos: "name", "kindOfRestaurant", "songs" ')

            }
            res.status(400).send( 'Error - No se puede añadir el restaurante, recuerde debe contar con los siguientes datos: "name", "kindOfRestaurant", "songs" ')

      }else{
        next()
      }
  
      
  };
  