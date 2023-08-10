using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace CashDragon.Models
{
    public class Ledger
    {
        public int LedgerId { get; set; }
        public int UserProfileId { get; set; }
        public decimal LedgerAmount { get; set; }

    }
}
