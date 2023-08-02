using System;
using Microsoft.AspNetCore.Mvc;
using CashDragon.Repositories;
using CashDragon.Models;

namespace CashDragon.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ScaleController : ControllerBase
    {
        private readonly IScaleRepo _scaleRepo;
        public ScaleController(IScaleRepo scaleRepo)
        {
            _scaleRepo = scaleRepo;
        }

        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_scaleRepo.GetScales());
        }

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var post = _scaleRepo.GetScales(id);
            if (post == null)
            {
                return NotFound();
            }
            return Ok(post);
        }

        [HttpPost]
        public IActionResult Scale(Scales scale)
        {
            _scaleRepo.Add(scale);
            return CreatedAtAction("Get", new { id = scale.UserId }, scale);
        }

        [HttpPut("{id}")]
        public IActionResult Put(int id, Scales scale)
        {
            if (id != scale.UserId)
            {
                return BadRequest();
            }

            _scaleRepo.Update(scale);
            return NoContent();
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            _scaleRepo.Delete(id);
            return NoContent();
        }
    }
}