using Business.Abstract;
using Entitites.Concrete;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RolesController : ControllerBase
    {
        IRoleService _roleService;

        public RolesController(IRoleService roleService)
        {
            _roleService = roleService;
        }

        [HttpGet("GetAll")]
        public IActionResult GetAll()
        {
            var result = _roleService.GetAllRole();
            if (result is null)
                return BadRequest(result);

            return Ok(result);
        }


        [HttpPost("Add")]
        public IActionResult Add(OperationClaim operationClaim)
        {
            _roleService.Add(operationClaim);
            return Ok();
        }
        [HttpPut("Update")]
        public IActionResult Update(OperationClaim operationClaim)
        {
            _roleService.Update(operationClaim);
            return Ok();
        }
        [HttpDelete("Delete")]
        public IActionResult Delete(OperationClaim operationClaim)
        {
            _roleService.Delete(operationClaim);
            return Ok();
        }


    }
}
