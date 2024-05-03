import Joi from 'joi';

//User register Validation
const registerValidation=async(req,res,next)=>{
    const registerSchema = Joi.object ({
       name: Joi.string().required(),
       email: Joi.string().email().trim().required(),
       password: Joi.string().required(),
       isAdmin:Joi.boolean(),
    });
    const {error} = await registerSchema.validate(req.body);
    if(error){
        return res.status(400).json({
            message: error.message
        })
    }else{
        next();
    }
};



//User Login validation
const loginValidation = async(req,res,next)=>{
    const loginSchema = Joi.object({
        email: Joi.string().email().trim().required(),
        password: Joi.string().required(),
    });
    const {error} = await loginSchema.validate(req.body);
    if(error){
        return res.status(400).json({
            message: error.message
        })
    }else{
        next();
    }
};

const producerValidation = async(req,res,next)=>{
    const producerSchema = Joi.object({
        name : Joi.string().trim().required(),
        gender : Joi.string().trim().required(),
        dob:Joi.string().required(),
        bio : Joi.string(),
    })
    const {error} = await producerSchema.validate(req.body);
    if(error){
        return res.status(400).json({
            message: error.message
        })
    }else{
        next();
    }
}

const movieValidation = async (req,res,next)=>{
    const movieSchema = Joi.object({
        name :Joi.string().trim().required(), 
        yearOfRelease: Joi.string.number().required(),
        actors: Joi.string.required(), 
        producer: Joi.string.required(), 
        poster:Joi.string.required()
    })
    const {error} = await movieSchema.validate(req.body);
    if(error){
        return res.status(400).json({
            message: error.message
        })
    }else{
        next();
    }
}

//actor validation
const actorValidation = async(req,res,next)=>{
    const actorSchema =Joi.object({
        name: Joi.string().required(),
        gender: Joi.string().required(),
        dob: Joi.string().required(),
        bio:Joi.string().required()
    })
    const {error} = await movieSchema.validate(req.body);
    if(error){
        return res.status(400).json({
            message: error.message
        })
    }else{
        next();
    }
}

export {registerValidation,loginValidation,actorValidation,producerValidation,movieValidation}