using System;
using System.ComponentModel.DataAnnotations;
using System.Collections.Generic;

namespace CashDragon.Models
{
    public class Scales
    {
        public int ScaleId { get; set; }

        [Required]
        public int UserId { get; set; }

        [Required]
        public string BillName { get; set; }

        public decimal AllocatedAmount { get; set; }

        [Required]
        public decimal GoalAmount { get; set; }

    }
}