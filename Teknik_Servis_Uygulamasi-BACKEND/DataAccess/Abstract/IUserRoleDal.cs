using Core.EntityFramework;
using Entitites.Concrete;

namespace DataAccess.Abstract
{
    public interface IUserRoleDal : IEntityRepository<UserOperationClaim>
    {
    }
}
