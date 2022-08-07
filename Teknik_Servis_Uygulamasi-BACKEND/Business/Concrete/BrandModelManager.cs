using Business.Abstract;
using DataAccess.Abstract;
using Entitites.Concrete;
using Entitites.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Business.Concrete
{
    public class BrandModelManager : IBrandModelService
    {
        IBrandModelDal _brandModelDal;

        public BrandModelManager(IBrandModelDal brandModelDal)
        {
            _brandModelDal = brandModelDal;
        }

        //[SecuredOperation("Admin")]   // Operasyon bazlı yetki isteği..
        public void Add(BrandModel brandModel)
        {
            _brandModelDal.Add(brandModel);
        }
        //[SecuredOperation("Admin")]   // Operasyon bazlı yetki isteği..
        public void Delete(BrandModel brandModel)
        {
            _brandModelDal.Delete(brandModel);
        }

        public List<BrandModel> GetAll()
        {
            return new List<BrandModel>(_brandModelDal.GetAll());
        }

        public List<BrandModelDto> GetAllDto()
        {
            return new List<BrandModelDto>(_brandModelDal.GetAllDto());
        }

        public BrandModel GeyById(int brandModelId)
        {
            return _brandModelDal.Get(bm=>bm.Id == brandModelId);
        }

        //[SecuredOperation("Admin")]   // Operasyon bazlı yetki isteği..
        public void Update(BrandModel brandModel)
        {
            _brandModelDal.Update(brandModel);
        }
    }
}
