using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entitites.Dto
{
    public class FaultDto
    {
        public int Id { get; set; }
        public int BrandId { get; set; }
        public int ColorId { get; set; }
        public int BrandModelId { get; set; }
        public string BrandName { get; set; }
        public string BrandModelName { get; set; }
        public string ColorName { get; set; }
        public string FaultTitle { get; set; }
        public string FaultDescription { get; set; }
        public bool Status { get; set; }
    }
}
