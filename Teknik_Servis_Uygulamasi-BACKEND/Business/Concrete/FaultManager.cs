using Business.Abstract;
using Business.BusinessAspects.Autofac;
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
    public class FaultManager : IFaultService
    {
        IFaultDal _faultDal;

        public FaultManager(IFaultDal faultDal)
        {
            _faultDal = faultDal;
        }

        [SecuredOperation("Admin")]   // Operasyon bazlı yetki isteği, Admin,User vsvs..
        public void Add(Fault fault)
        {
            _faultDal.Add(fault);
        }

        //[SecuredOperation("Admin")]   // Operasyon bazlı yetki isteği..
        public void Delete(Fault fault)
        {
            _faultDal.Delete(fault);
        }

        public List<Fault> GetAll()
        {
            return new List<Fault>(_faultDal.GetAll());
        }

        public List<FaultDto> GetAllDetails()
        {
           
            return new List<FaultDto>(_faultDal.GetAllFaultDetails());
        }

        public List<Fault> GetMonthlyAndYearlyDetails(int month, int year)
        {
           var result = month.ToString().PadLeft(2, '0');
        

            return new List<Fault>(_faultDal.GetAll(f => f.CreatedDate.Year == year && f.CreatedDate.Month == Convert.ToInt32(result)));
        }

        public List<FaultDto> GetDetailsByFaultId(int faultId) // Id
        {
            return new List<FaultDto>(_faultDal.GetAllFaultDetails(f=>f.Id == faultId));
        }

        public Fault GeyById(int faultId)
        {
            return _faultDal.Get(f=> f.Id == faultId);
        }

        //[SecuredOperation("Admin")]   // Operasyon bazlı yetki isteği..
        public void Update(Fault fault)
        {
            _faultDal.Update(fault);
        }

        public List<Fault> GetDailyDetails()
        {
            return new List<Fault>(_faultDal.GetAll(f => f.CreatedDate.Year == DateTime.Now.Year && f.CreatedDate.Month == DateTime.Now.Month && f.CreatedDate.Day == DateTime.Now.Day));

        }

        public List<Fault> GetByBrandAndModelId(int brandId, int brandModelId)
        {
            return new List<Fault>(_faultDal.GetAll(f=> f.BrandId == brandId && f.BrandModelId == brandModelId));
        }
    }
}
