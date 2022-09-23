
const authAdmin = async (req, res, next) => {
	try {
		const { user } = req;	
	
		if (user.roleId !== 1) {
			return next('Error, You are not an user admin');
		}
	
		
	} catch (error) {
		console.log(error);
	}
	next();	
	};



module.exports = {authAdmin};
