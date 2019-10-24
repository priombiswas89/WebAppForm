using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebAppForm.Models;

namespace WebAppForm.DAL
{
    public class UserDAL
    {
        web_app_formContext db = new web_app_formContext();

        public IEnumerable<Users> GetAllUsers()
        {
            try
            {
                return db.Users.ToList();
            }
            catch
            {
                throw;
            }
        }
        
        public int AddUser(Users user)
        {
            try
            {
                db.Users.Add(user);
                db.SaveChanges();
                return 1;
            }
            catch
            {
                throw;
            }
        }
    }
}
