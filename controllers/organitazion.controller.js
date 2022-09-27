const updateOrganization = async (req, res, next) => {
    try {
        const { organization } = req;
        const { 
                name, 
                image,
                address,
                phone,
                email,
                welcomeText,
                aboutUsText, 
            } = req.body;
        
        await organization.update({ name, image,  address, phone, email, welcomeText, aboutUsText, });
    
        res.status(204).json({ status: 'success' });    
    } catch (error) {
        res.send(error)
    }
	
};

module.exports={
    updateOrganization
}