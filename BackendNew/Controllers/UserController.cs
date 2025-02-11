using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using BackendNew.Data;
using BackendNew.Models;

namespace BackendNew.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly HospitalDbContext _context;

        public UsersController(HospitalDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<User>>> GetUsers()
        {
            return await _context.Users.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<User>> GetUser(Guid id)
        {
            var User = await _context.Users.FindAsync(id);
            if (User == null)
            {
                return NotFound();
            }
            return User;
        }

        [HttpPost]
        public async Task<ActionResult<User>> CreateUser(User User)
        {
            _context.Users.Add(User);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetUser), new { id = User.Id }, User);
        }
    }
}
