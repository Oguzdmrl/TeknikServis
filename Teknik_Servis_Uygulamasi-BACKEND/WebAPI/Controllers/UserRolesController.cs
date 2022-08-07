using Business.Abstract;
using Entitites.Concrete;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserRolesController : ControllerBase
    {
        IUserRoleService _userRoleService;

        public UserRolesController(IUserRoleService userRoleService)
        {
            _userRoleService = userRoleService;
        }

        [HttpGet("GetAll")]
        public IActionResult GetAll()
        {
            var result = _userRoleService.GetAllUserRoles();
            if (result is null)
                return BadRequest(result);

            return Ok(result);
        }

        [HttpPost("Add")]
        public IActionResult Add(UserOperationClaim userOperationClaim)
        {
            _userRoleService.Add(userOperationClaim);
            return Ok();
        }
        [HttpPut("Update")]
        public IActionResult Update(UserOperationClaim userOperationClaim)
        {
            _userRoleService.Update(userOperationClaim);
            return Ok();
        }
        [HttpDelete("Delete")]
        public IActionResult Delete(UserOperationClaim userOperationClaim)
        {
            _userRoleService.Delete(userOperationClaim);
            return Ok();
        }

    }
}
