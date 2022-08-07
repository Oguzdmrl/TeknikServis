using Entitites.Concrete;
using Entitites.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Business.Abstract
{
    public interface IFaultService
    {
        List<Fault> GetAll();
        List<FaultDto> GetAllDetails();
        List<FaultDto> GetDetailsByFaultId(int faultId);
        List<Fault> GetMonthlyAndYearlyDetails(int month, int year);
        List<Fault> GetDailyDetails();
        List<Fault> GetByBrandAndModelId(int brandId, int brandModelId);
       
        Fault GeyById(int faultId);
        void Add(Fault fault);
        void Delete(Fault fault);
        void Update(Fault fault);
    }
}
