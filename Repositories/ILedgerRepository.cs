using CashDragon.Models;

namespace CashDragon.Repositories
{
    public interface ILedgerRepository
    {
        Ledger GetByLedgerId(int ledgerId);
    }
}
