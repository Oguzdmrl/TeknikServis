using Entitites.Concrete;
using Entitites.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Business.Abstract
{
    public interface IUserService
    {
        List<OperationClaim> GetClaims(User user);
        void Add(User user);
        User GetByMail(string email);
        List<User> GetAll();

        List<RolesDto> GetAllRolesDTO();
    }
}
