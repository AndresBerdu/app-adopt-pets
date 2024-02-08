import mongoose from "mongoose";

export const conexion = async () => {
    try {
        await mongoose.connect('mongodb://localhost/appAdoptPetsdb');
    } catch (e) {
        
    }
    
}