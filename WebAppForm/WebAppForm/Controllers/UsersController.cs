using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using WebAppForm.DAL;
using WebAppForm.Models;

namespace WebAppForm.Controllers
{
    [Route("api/[controller]")]
    public class UsersController : Controller
    {
        UserDAL objUser = new UserDAL();

        [HttpGet("[action]")]
        public IEnumerable<Users> Index()
        {
            return objUser.GetAllUsers();
        }

        [HttpPost("[action]")]
        public int Create(Users user)
        {
            return objUser.AddUser(user);
        }
    }
}
