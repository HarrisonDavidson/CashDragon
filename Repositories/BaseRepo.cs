using Microsoft.Data.SqlClient;
using Microsoft.Extensions.Configuration;

namespace CashDragon.Repositories
{
    public abstract class BaseRepo
    {
        private readonly string _connectionString;

        public BaseRepo(IConfiguration configuration)
        {
            _connectionString = configuration.GetConnectionString("DefaultConnection");
        }

        protected SqlConnection Connection
        {
            get
            {
                return new SqlConnection(_connectionString);
            }
        }
    }
}