
const deleteNew = async (req, res, next) => {
	try {
        const { newFounded } = req;

        const fecha = new Date()
    
        await newFounded.update({ deletedAt: fecha });
    
        res.status(204).json({ status: 'success' });  
          
    } catch (error) {
        res.send(error)
        console.log(error);
    }
    
};

module.exports={
    deleteNew
}