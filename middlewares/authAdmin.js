
const authAdmin = async (req, res, next) => {
	const { user } = req;	
	
		if (user.roleId !== 1) {
			return next('Error, You are not an user admin');
		}
	
		next();
	};



module.exports = authAdmin;
