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
    public class RoleManager : IRoleService
    {
        IRoleDal _roleDal;

        public RoleManager(IRoleDal roleDal)
        {
            _roleDal = roleDal;
        }

        //[SecuredOperation("Admin")]   // Operasyon bazlı yetki isteği..
        public void Add(OperationClaim operationClaim)
        {
            _roleDal.Add(operationClaim);

        }

        //[SecuredOperation("Admin")]   // Operasyon bazlı yetki isteği..
        public void Delete(OperationClaim operationClaim)
        {
            _roleDal.Delete(operationClaim);
        }

        public List<OperationClaim> GetAllRole()
        {
            return _roleDal.GetAll();
        }

        //[SecuredOperation("Admin")]   // Operasyon bazlı yetki isteği..
        public void Update(OperationClaim operationClaim)
        {
            _roleDal.Update(operationClaim);
        }
    }
}
