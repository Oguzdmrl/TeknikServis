using Business.Abstract;
using Entitites.Concrete;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FaultsController : ControllerBase
    {
        IFaultService _faultService;

        public FaultsController(IFaultService faultService)
        {
            _faultService = faultService;
        }

        [HttpGet("GetAll")]
        public IActionResult GetAll()
        {
            var result = _faultService.GetAll();
            if (result is not null)
            {
                return Ok(result);
            }
            if (result is null)
                return Ok("Null");
            return BadRequest(result);
        }

        [HttpGet("GetAllDetails")]
        public IActionResult GetAllDetails()
        {
            var result = _faultService.GetAllDetails();
            if (result is not null)
            {
                return Ok(result);
            }
            if (result is null)
                return Ok("Null");

            return BadRequest(result);
        }
        [HttpGet("GetMonthlyAndYearlyDetails")] // Aylık
        public IActionResult GetMonthlyAndYearlyDetails(int month, int year)
        {
            var result = _faultService.GetMonthlyAndYearlyDetails(month,year);
            if (result is not null)
            {
                return Ok(result);
            }
            if (result is null)
                return Ok("Null");

            return BadRequest(result);

        }
        [HttpGet("GetDailyDetails")] // Günlük
        public IActionResult GetDailyDetails()
        {

            var result = _faultService.GetDailyDetails();
            if (result is not null)
            {
                return Ok(result);
            }
            if (result is null)
                return Ok("Null");

            return BadRequest(result);

        }
        [HttpGet("GetById")]
        public IActionResult GetById(int id)
        {
            var result = _faultService.GeyById(id);
            if (result is not null)
            {
                return Ok(result);
            }
            if (result is null)
                return Ok("Null");

            return BadRequest(result);
        }
      
        [HttpGet("GetDetailsByFaultId")]
        public IActionResult GetDetailsByFaultId(int id)
        {
            var result = _faultService.GetDetailsByFaultId(id);
            if (result is not null)
            {
                return Ok(result);
            }
            if (result is null)
                return Ok("Null");
            return BadRequest(result);
        }
        [HttpGet("GetByBrandAndModelId")]
        public IActionResult GetByBrandAndModelId(int brandId, int brandModelId)
        {
            var result = _faultService.GetByBrandAndModelId(brandId, brandModelId);
            if (result is not null)
            {
                return Ok(result);
            }
            if (result is null)
                return Ok("Null");

            return BadRequest(result);
        }
        [HttpPost("Add")]
        public IActionResult Add(Fault fault)
        {
            fault.CreatedDate = DateTime.Now;
            fault.Status = false;
            _faultService.Add(fault);
            return Ok();
        }
        [HttpPut("Update")]
        public IActionResult Update(Fault fault)
        {
            _faultService.Update(fault);
            return Ok();
        }
        [HttpDelete("Delete")]
        public IActionResult Delete(Fault fault)
        {
            _faultService.Delete(fault);
            return Ok();
        }

    }
}
