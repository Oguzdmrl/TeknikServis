using Core.EntityFramework;
using Entitites.Concrete;
using Entitites.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace DataAccess.Abstract
{
    public interface IFaultDal : IEntityRepository<Fault>
    {
       
        List<FaultDto> GetAllFaultDetails(Expression<Func<Fault, bool>> filter = null);
    }
}
