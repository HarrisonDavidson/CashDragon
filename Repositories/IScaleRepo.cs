using CashDragon.Models;

namespace CashDragon.Repositories
{
    public interface IScaleRepo
    {
        List<Scales> GetScales();
        Scales GetScales(int id);
        void Add(Scales scales);
        void Delete(Scales scales);
        void Update(Scales scales);
        void Delete(int id);
    }
}