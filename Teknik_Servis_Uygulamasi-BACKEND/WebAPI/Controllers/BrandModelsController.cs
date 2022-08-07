using Business.Abstract;
using Entitites.Concrete;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BrandModelsController : ControllerBase
    {
        IBrandModelService _brandModelService;

        public BrandModelsController(IBrandModelService brandModelService)
        {
            _brandModelService = brandModelService;
        }

        [HttpGet("GetAll")]
        public IActionResult GetAll()
        {
            var result = _brandModelService.GetAll();
            if (result is not null)
            {
                return Ok(result);
            }
            return BadRequest(result);
        }
        [HttpGet("GetAllDto")]
        public IActionResult GetAllDto()
        {
            var result = _brandModelService.GetAllDto();
            if (result is not null)
            {
                return Ok(result);
            }
            return BadRequest(result);
        }

        [HttpGet("GetById")]
        public IActionResult GetById(int id)
        {
            var result = _brandModelService.GeyById(id);
            if (result is not null)
            {
                return Ok(result);
            }
            return BadRequest(result);
        }

        [HttpPost("Add")]
        public IActionResult Add(BrandModel brandModel)
        {
            _brandModelService.Add(brandModel);
            return Ok();
        }
        [HttpPut("Update")]
        public IActionResult Update(BrandModel brandModel)
        {
            _brandModelService.Update(brandModel);
            return Ok();
        }
        [HttpDelete("Delete")]
        public IActionResult Delete(BrandModel brandModel)
        {
            _brandModelService.Delete(brandModel);
            return Ok();
        }

    }
}
