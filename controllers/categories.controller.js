const deleteCategory = async (req, res, next) => {
	try {
        const { category } = req;

        const fecha = new Date()
    
        await category.update({ deletedAt: fecha });
    
        res.status(204).json({ status: 'success' });  
          
    } catch (error) {
        res.send(error)
        console.log(error);
    }
    
};

module.exports={
    deleteCategory
}