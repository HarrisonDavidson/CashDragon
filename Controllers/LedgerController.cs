using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.VisualBasic;
using System.Security.Claims;
using CashDragon.Models;
using CashDragon.Repositories;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace CashDragon.Controllers
{
    [Route("api/[controller]")]
    [ApiController]

    public class LedgerController : ControllerBase
    {
        private readonly ILedgerRepository _ledgerRepository;
        public LedgerController(ILedgerRepository ledgerRepository)
        {
            _ledgerRepository = ledgerRepository;
        }

        [HttpGet]
        public IActionResult Get()
        {
            var ledgers = _ledgerRepository.GetAll();
            return Ok(ledgers);
        }


        [HttpGet("GetById")]
        public IActionResult GetById(int id)
        {
            var ledger = _ledgerRepository.GetById(id);
            if (ledger == null)
            { return NotFound(); }
            return Ok(ledger);
        }
    }
}