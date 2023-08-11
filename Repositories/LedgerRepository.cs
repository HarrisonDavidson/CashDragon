using Microsoft.Data.SqlClient;
using Microsoft.Extensions.Configuration.EnvironmentVariables;
using CashDragon.Models;
using CashDragon.Utils;

namespace CashDragon.Repositories
{
    public class LedgerRepository : BaseRepository, ILedgerRepository
    {
        public LedgerRepository(IConfiguration configuration) : base(configuration) { }

        private Ledger NewLedgerFromReader(SqlDataReader reader)
        {
            return new Ledger()
            {
                LedgerId = DbUtils.GetInt(reader, "LedgerId"),
                UserProfileId = DbUtils.GetInt(reader, "UserProfileId"),
                LedgerAmount = DbUtils.GetDecimal(reader, "LedgerAmount")
            };
        }

        public List<Ledger> GetAllLedgers()
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        SELECT LedgerId, UserProfileId, LedgerAmount
                        FROM Ledger";

                    var reader = cmd.ExecuteReader();

                    var ledger = new List<Ledger>();
                    while (reader.Read())
                    {
                        ledger.Add(NewLedgerFromReader(reader));
                    }
                    reader.Close();

                    return ledger;

                }
            }
        }

                    public Ledger GetByLedgerId(int ledgerId)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        SELECT LedgerId, UserProfileId, LedgerAmount
                        FROM Ledger
                        WHERE LedgerId = 1";

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