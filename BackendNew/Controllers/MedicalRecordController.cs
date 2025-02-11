using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using BackendNew.Data;
using BackendNew.Models;

namespace BackendNew.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MedicalRecordsController : ControllerBase
    {
        private readonly HospitalDbContext _context;

        public MedicalRecordsController(HospitalDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<MedicalRecord>>> GetMedicalRecords()
        {
            return await _context.MedicalRecords.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<MedicalRecord>> GetMedicalRecord(Guid id)
        {
            var MedicalRecord = await _context.MedicalRecords.FindAsync(id);
            if (MedicalRecord == null)
            {
                return NotFound();
            }
            return MedicalRecord;
        }

        [HttpPost]
        public async Task<ActionResult<MedicalRecord>> CreateMedicalRecord(MedicalRecord MedicalRecord)
        {
            _context.MedicalRecords.Add(MedicalRecord);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetMedicalRecord), new { id = MedicalRecord.Id }, MedicalRecord);
        }
    }
}
