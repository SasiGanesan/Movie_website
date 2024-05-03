import Producer from '../Model/producerModel.js';

const addProducer = async(req,res)=>{
    const {name,gender,dob,bio} = req.body;

    try {
        const producer = await Producer.create({
            name,gender,dob,bio
        })
        return res.status(200).json(producer)
    } catch (error) {
        return res.status(500).json({message: "Internal Server Error"})
    }
}

export {addProducer}