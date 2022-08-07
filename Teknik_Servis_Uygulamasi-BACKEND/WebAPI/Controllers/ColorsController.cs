using Business.Abstract;
using Entitites.Concrete;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
   
    public class ColorsController : ControllerBase
    {
        IColorService _colorService;

        public ColorsController(IColorService colorService)
        {
            _colorService = colorService;
        }


        [HttpGet("GetAll")]
        public IActionResult GetAll()
        {
            var result = _colorService.GetAll();
            if (result is null)
            {
                return BadRequest(result);
            }
            return Ok(result);

        }
        [HttpGet("GetById")]
        public IActionResult GetById(int id)
        {
            var result = _colorService.GeyById(id);
            if (result is null)
            {
                return BadRequest(result);
            }
            return Ok(result);

        }

        [HttpPost("Add")]
        public IActionResult Add(Color color)
        {
            _colorService.Add(color);
            return Ok();
            
        }
        [HttpPut("Update")]
        public IActionResult Update(Color color)
        {
            _colorService.Update(color);
            return Ok();

        }
        [HttpDelete("Delete")]
        public IActionResult Delete(Color color)
        {
            _colorService.Delete(color);
            return Ok();

        }

    }
}
