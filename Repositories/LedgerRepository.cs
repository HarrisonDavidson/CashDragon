using Microsoft.Data.SqlClient;
using Microsoft.Extensions.Configuration.EnvironmentVariables;
using CashDragon.Models;
using CashDragon.Utils;

namespace CashDragon.Repositories
{
    public class LedgerRepository : BaseRepository, ILedgerRepository
    {
        public LedgerRepository(IConfiguration configuration) : base(configuration) { }

        public List<Ledger> GetAll()
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        SELECT Id, LedgerAmount
                        FROM Ledger";



                    var reader = cmd.ExecuteReader();

                    var ledgers = new List<Ledger>();
                    while (reader.Read())
                    {
                        ledgers.Add(new Ledger()
                        {
                            Id = DbUtils.GetInt(reader, "Id"),
                            LedgerAmount = DbUtils.GetDecimal(reader, "LedgerAmount"),
                        });
                    }
                    reader.Close();

                    return ledgers;
                }
            }
        }

        public Ledger GetById(int Id)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        SELECT Id, LedgerAmount
                        FROM Ledger
                        WHERE Id = 1";

                    DbUtils.AddParameter(cmd, "@Id", Id);

                    Ledger ledger = null;

                    var reader = cmd.ExecuteReader();
                    if (reader.Read())
                    {
                        ledger = new Ledger()
                        {
                            Id = DbUtils.GetInt(reader, "Id"),
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