using Core.EntityFramework;
using DataAccess.Abstract;
using Entitites.Concrete;
using Entitites.Dto;
using System;
using System.Linq;
using System.Collections.Generic;
using System.Linq.Expressions;

namespace DataAccess.Concrete.EntityFramework
{
    public class EfFaultDal : EfEntityRepositoryBase<Fault, AppDbContext>, IFaultDal
    {
        public List<FaultDto> GetAllFaultDetails(Expression<Func<Fault, bool>> filter = null)
        {
            using (AppDbContext context = new AppDbContext())
            {
                var result = from f in filter == null ? context.Faults : context.Faults.Where(filter)
                             join b in context.Brands on f.BrandId equals b.Id
                             join bm in context.BrandModels on f.BrandModelId equals bm.Id
                             join c in context.Colors on f.ColorId equals c.Id
                             select new FaultDto
                             {
                                 Id = f.Id,
                                 BrandId = b.Id,
                                 ColorId = c.Id,
                                 BrandModelId = bm.Id,
                                 BrandModelName = bm.ModelName,
                                 BrandName = b.BrandName,
                                 ColorName = c.ColorName,
                                 FaultDescription = f.FaultDescription,
                                 FaultTitle = f.FaultTitle,
                                 Status = f.Status
                             };
                return result.ToList();
            }
        }
    }
}
