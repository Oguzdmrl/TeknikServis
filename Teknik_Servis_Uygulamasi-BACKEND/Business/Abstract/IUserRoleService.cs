using Entitites.Concrete;
using System.Collections.Generic;

namespace Business.Abstract
{
    public interface IUserRoleService
    {
        List<UserOperationClaim> GetAllUserRoles();
        void Add(UserOperationClaim userOperationClaim);
        void Update(UserOperationClaim userOperationClaim);
        void Delete(UserOperationClaim userOperationClaim);
    }
}
