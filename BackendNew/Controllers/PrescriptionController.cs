using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using BackendNew.Data;
using BackendNew.Models;

namespace BackendNew.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PrescriptionsController : ControllerBase
    {
        private readonly HospitalDbContext _context;

        public PrescriptionsController(HospitalDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Prescription>>> GetPrescriptions()
        {
            return await _context.Prescriptions.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Prescription>> GetPrescription(Guid id)
        {
            var Prescription = await _context.Prescriptions.FindAsync(id);
            if (Prescription == null)
            {
                return NotFound();
            }
            return Prescription;
        }

        [HttpPost]
        public async Task<ActionResult<Prescription>> CreatePrescription(Prescription Prescription)
        {
            _context.Prescriptions.Add(Prescription);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetPrescription), new { id = Prescription.Id }, Prescription);
        }
    }
}
