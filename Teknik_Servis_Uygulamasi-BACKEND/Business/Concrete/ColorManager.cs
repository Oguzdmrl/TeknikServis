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
    public class ColorManager : IColorService
    {
        IColorDal _colorDal;

        public ColorManager(IColorDal colorDal)
        {
            _colorDal = colorDal;
        }

        //[SecuredOperation("Admin")]   // Operasyon bazlı yetki isteği..
        public void Add(Color color)
        {
            _colorDal.Add(color);

        }
        //[SecuredOperation("Admin")]   // Operasyon bazlı yetki isteği..
        public void Delete(Color color)
        {
            _colorDal.Delete(color);
        }

       

        public List<Color> GetAll()
        {
            return new List<Color>(_colorDal.GetAll());
        }

        public Color GeyById(int colorId)
        {
            return _colorDal.Get(c => c.Id == colorId);
        }

        //[SecuredOperation("Admin")]   // Operasyon bazlı yetki isteği..
        public void Update(Color color)
        {
            _colorDal.Update(color);
        }
    }
}
