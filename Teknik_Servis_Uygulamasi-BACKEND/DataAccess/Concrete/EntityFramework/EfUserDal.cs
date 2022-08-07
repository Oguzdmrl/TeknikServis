using Core.EntityFramework;
using DataAccess.Abstract;
using Entitites.Concrete;
using Entitites.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccess.Concrete.EntityFramework
{
    public class EfUserDal : EfEntityRepositoryBase<User, AppDbContext>, IUserDal
    {
        public List<RolesDto> GetAllRolesDTO()
        {
            using (var context = new AppDbContext())
            {
                var result = from operationClaim in context.OperationClaims
                             join userOperationClaim in context.UserOperationClaims
                                 on operationClaim.Id equals userOperationClaim.OperationClaimId
                             join u in context.Users on userOperationClaim.UserId equals u.Id
                             //where userOperationClaim.UserId == userId
                             select new RolesDto
                             {
                                 OperationClaimId = operationClaim.Id,
                                 RoleName = operationClaim.Name,
                                 UserId = userOperationClaim.UserId,
                                 UserName = u.FirstName +" "+ u.LastName

                             };
                return result.ToList();


            }
        }

        public List<OperationClaim> GetClaims(User user)
        {
            using (var context = new AppDbContext())
            {
                var result = from operationClaim in context.OperationClaims
                             join userOperationClaim in context.UserOperationClaims
                                 on operationClaim.Id equals userOperationClaim.OperationClaimId
                             where userOperationClaim.UserId == user.Id
                             select new OperationClaim { Id = operationClaim.Id, Name = operationClaim.Name };
                return result.ToList();

            }
        }
    }

 
}

