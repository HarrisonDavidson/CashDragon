using Microsoft.Data.SqlClient;
using Microsoft.Extensions.Configuration.EnvironmentVariables;
using CashDragon.Models;
using CashDragon.Utils;

namespace CashDragon.Repositories
{
    public class LedgerRepository : BaseRepository, ILedgerRepository
    {
        public LedgerRepository(IConfiguration configuration) : base(configuration) { }

        public Ledger GetByLedgerId(int ledgerId)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        SELECT up.LedgerId, up.UserProfileId, up.LedgerAmount
                        FROM Ledger up";

                    DbUtils.AddParameter(cmd, "@ledgerId", ledgerId);

                    Ledger ledger = null;

                    var reader = cmd.ExecuteReader();
                    if (reader.Read())
                    {
                        ledger = new Ledger()
                        {
                            LedgerId = DbUtils.GetInt(reader, "LedgerId"),
                            UserProfileId = DbUtils.GetInt(reader, "UserProfileId"),
                            LedgerAmount = DbUtils.GetDecimal(reader, "LedgerAmount")
                        };
                    }
                    reader.Close();

                    return ledger;
                }
            }
        }
    }
}