using Business.Abstract;
using Entitites.Concrete;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BrandsController : ControllerBase
    {
        IBrandService _brandService;

        public BrandsController(IBrandService brandService)
        {
            _brandService = brandService;
        }

        [HttpGet("GetAll")]
        public IActionResult GetAll()
        {
            var result = _brandService.GetAll();
            if (result is null)
                return BadRequest(result);

            return Ok(result);
        }

        [HttpGet("GetById")]
        public IActionResult GetById(int id)
        {
            var result = _brandService.GeyById(id);
            if (result is null)
                return BadRequest(result);

            return Ok(result);
        }

        [HttpPost("Add")]
        public IActionResult Add(Brand brand)
        {
            _brandService.Add(brand);
            return Ok();
        }
        [HttpPut("Update")]
        public IActionResult Update(Brand brand)
        {
            _brandService.Update(brand);
            return Ok();
        }
        [HttpDelete("Delete")]
        public IActionResult Delete(Brand brand)
        {
            _brandService.Delete(brand);
            return Ok();
        }

    }
}
