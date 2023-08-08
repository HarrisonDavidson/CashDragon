using CashDragon.Models;
using CashDragon.Repositories;
using Microsoft.AspNetCore.Mvc;

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

        [HttpGet("GetByLedgerId")]
        public IActionResult GetByLedgerId(int ledgerId)
        {
            var ledger = _ledgerRepository.GetByLedgerId(ledgerId);
            if (ledger == null)
            {
                return NotFound();
            }
            return Ok(ledger);
        }
    }
}