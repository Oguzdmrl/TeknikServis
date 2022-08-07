using Business.Abstract;
using Business.BusinessAspects.Autofac;
using DataAccess.Abstract;
using Entitites.Concrete;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Business.Concrete
{
    public class BrandManager : IBrandService
    {
        IBrandDal _brandDal;

        public BrandManager(IBrandDal brandDal)
        {
            _brandDal = brandDal;
        }

        //[SecuredOperation("Admin")]   // Operasyon bazlı yetki isteği..
        public void Add(Brand brand)
        {
            _brandDal.Add(brand);
        }

        //[SecuredOperation("Admin")]   // Operasyon bazlı yetki isteği..
        public void Delete(Brand brand)
        {
            _brandDal.Delete(brand);
        }

       
        public List<Brand> GetAll()
        {
            return new List<Brand>(_brandDal.GetAll());
        }

        public Brand GeyById(int brandId)
        {
            return _brandDal.Get(b=> b.Id == brandId);
        }

        //[SecuredOperation("Admin")]   // Operasyon bazlı yetki isteği..
        public void Update(Brand brand)
        {
           _brandDal.Update(brand);
        }
    }
}
