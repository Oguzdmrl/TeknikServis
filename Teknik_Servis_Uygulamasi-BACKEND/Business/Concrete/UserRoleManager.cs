using Business.Abstract;
using DataAccess.Abstract;
using Entitites.Concrete;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Business.Concrete
{
    public class UserRoleManager : IUserRoleService
    {
        IUserRoleDal _userRoleDal;

        public UserRoleManager(IUserRoleDal userRoleDal)
        {
            _userRoleDal = userRoleDal;
        }

        public void Add(UserOperationClaim userOperationClaim)
        {
            _userRoleDal.Add(userOperationClaim);
        }

        public void Delete(UserOperationClaim userOperationClaim)
        {
            _userRoleDal.Delete(userOperationClaim);
        }

        public List<UserOperationClaim> GetAllUserRoles()
        {
            return _userRoleDal.GetAll();
        }

        public void Update(UserOperationClaim userOperationClaim)
        {
            _userRoleDal.Update(userOperationClaim);
        }
    }
}
