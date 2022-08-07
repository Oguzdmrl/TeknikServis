using Core.EntityFramework;
using DataAccess.Abstract;
using Entitites.Concrete;
using Entitites.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace DataAccess.Concrete.EntityFramework
{
    public class EfBrandModelDal : EfEntityRepositoryBase<BrandModel, AppDbContext>, IBrandModelDal
    {
        public List<BrandModelDto> GetAllDto(Expression<Func<BrandModel, bool>> filter = null)
        {
            using (AppDbContext context = new AppDbContext())
            {
                var result = from bm in filter == null ? context.BrandModels : context.BrandModels.Where(filter)
                             join b in context.Brands on bm.BrandId equals b.Id
                           
                            
                             select new BrandModelDto
                             {
                                 Id = bm.Id,
                                 BrandId = b.Id,
                                 BrandModelName = bm.ModelName,
                                 BrandName = b.BrandName
                               
                             };
                return result.ToList();
            }
        }
    }
}
