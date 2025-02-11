using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using BackendNew.Data;
using BackendNew.Models;

namespace BackendNew.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AppointmentsController : ControllerBase
    {
        private readonly HospitalDbContext _context;

        public AppointmentsController(HospitalDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Appointment>>> GetAppointments()
        {
            return await _context.Appointments.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Appointment>> GetAppointment(Guid id)
        {
            var Appointment = await _context.Appointments.FindAsync(id);
            if (Appointment == null)
            {
                return NotFound();
            }
            return Appointment;
        }

        [HttpPost]
        public async Task<ActionResult<Appointment>> CreateAppointment(Appointment Appointment)
        {
            _context.Appointments.Add(Appointment);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetAppointment), new { id = Appointment.Id }, Appointment);
        }
    }
}
