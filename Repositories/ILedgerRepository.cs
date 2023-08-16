using CashDragon.Models;
using Microsoft.Data.SqlClient;
using System.Collections.Generic;

namespace CashDragon.Repositories
{
    public interface ILedgerRepository
    {
        List<Ledger> GetAll();
        Ledger GetById(int id);
    }
}
