using System;
using System.Linq;
using System.Collections.Generic;
using Microsoft.Extensions.Configuration;
using CashDragon.Models;
using CashDragon.Repositories;
using CashDragon.Utils;

namespace CashDragon.Repositories
{
    public class ScaleRepository : BaseRepository, IScaleRepository
    {
        public ScaleRepository(IConfiguration configuration) : base(configuration) { }
        public List<Scales> GetScales()
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                    SELECT UserId, ScaleId, BillName, AllocatedAmount, GoalAmount
                        FROM Scale";

                    var reader = cmd.ExecuteReader();

                    var scales = new List<Scales>();
                    while (reader.Read())
                    {
                        scales.Add(new Scales()
                        {
                            UserId = DbUtils.GetInt(reader, "user_id"),
                            ScaleId = DbUtils.GetInt(reader, "scale_id"),
                            BillName = DbUtils.GetString(reader, "bill_name"),
                            AllocatedAmount = DbUtils.GetDecimal(reader, "allocated_amount"),
                            GoalAmount = DbUtils.GetDecimal(reader, "goal_amount"),
                        });
                    }
                    reader.Close();

                    return scales;
                }
            }
        }

        public Scales GetById(int id) 
        {
            using (var conn = Connection) 
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        SELECT UserId, ScaleId, BillName, AllocatedAmount, GoalAmount
                        FROM Scale
                        WHERE Id = @Id";

                    DbUtils.AddParameter(cmd, "id", id);

                    var reader = cmd.ExecuteReader();

                    Scales scale = null;
                    if (reader.Read())
                    {
                        scale = new Scales()
                        {
                            UserId = DbUtils.GetInt(reader, "user_id"),
                            ScaleId = DbUtils.GetInt(reader, "scale_id"),
                            BillName = DbUtils.GetString(reader, "bill_name"),
                            AllocatedAmount = DbUtils.GetDecimal(reader, "allocated_amount"),
                            GoalAmount = DbUtils.GetDecimal(reader, "goal_amount"),
                        };
                    }
                    reader.Close();
                    return scale;
                }
            }
        }

        Scales IScaleRepository.GetScales(int id)
        {
            throw new NotImplementedException();
        }

        void IScaleRepository.Add(Scales scales)
        {
            throw new NotImplementedException();
        }

        void IScaleRepository.Delete(Scales scales)
        {
            throw new NotImplementedException();
        }

        void IScaleRepository.Update(Scales scales)
        {
            throw new NotImplementedException();
        }

        void IScaleRepository.Delete(int id)
        {
            throw new NotImplementedException();
        }
    }
}