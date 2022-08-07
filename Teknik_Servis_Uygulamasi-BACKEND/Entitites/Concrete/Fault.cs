
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entitites.Concrete
{
    public class Fault
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Key]
        public int Id { get; set; }
        public int BrandId { get; set; } // Marka&Model
        public int ColorId { get; set; }
        public int BrandModelId { get; set; }

        public string FaultTitle { get; set; }
        public string FaultDescription { get; set; }

        public bool Status { get; set; }

        public DateTime CreatedDate { get; set; }


    }
}
