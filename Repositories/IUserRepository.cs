using CashDragon.Models;

namespace CashDragon.Repositories
{
    public interface IUserRepository
    {
        void Add(UserProfile userProfile);
        UserProfile GetByEmail(string email);

    }
}