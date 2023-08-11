using CashDragon.Models;
using Microsoft.Data.SqlClient;
using System.Collections.Generic;

namespace CashDragon.Repositories
{
    public interface ILedgerRepository
    {
        Ledger GetByLedgerId(int ledgerId);
    }
}
