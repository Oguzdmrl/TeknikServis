using Core.EntityFramework;
using Entitites.Concrete;
using Entitites.Dto;
using System.Collections.Generic;

namespace DataAccess.Abstract
{
    public interface IUserDal : IEntityRepository<User>
    {
        List<OperationClaim> GetClaims(User user);

        List<RolesDto> GetAllRolesDTO();
    }
   

}
