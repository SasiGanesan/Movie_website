import Actor from '../Model/actorModel.js';

const addActor = async (req,res)=>{   
    try {
        const {name,gender,dob,bio} = req.body;

        const existingActor = await Actor.findOne({name})
        if(existingActor){
            return res.status(404).json({message: "This actor already exists"});    
        }
        const actor = await Actor.create({
            name,gender,dob,bio
        })
        if(actor){
            return res.status(200).json(actor)
        }else{
            return res.status(400).json({message: 'Actor not created'})
        }
    } catch (error) {
        console.log(error.message)
        return res.status(500).json({message: "Internal Server Error"})
    }
}

export {addActor}
