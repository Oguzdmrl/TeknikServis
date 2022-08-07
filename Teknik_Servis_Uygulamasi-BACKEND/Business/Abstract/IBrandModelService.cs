using Entitites.Concrete;
using Entitites.Dto;
using System.Collections.Generic;

namespace Business.Abstract
{
    public interface IBrandModelService
    {
        List<BrandModel> GetAll();
        List<BrandModelDto> GetAllDto();
        BrandModel GeyById(int brandModelId);
        void Add(BrandModel brandModel);
        void Delete(BrandModel brandModel);
        void Update(BrandModel brandModel);
    }
}
