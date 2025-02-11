using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using BackendNew.Data;
using BackendNew.Models;

namespace BackendNew.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PaymentsController : ControllerBase
    {
        private readonly HospitalDbContext _context;

        public PaymentsController(HospitalDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Payment>>> GetPayments()
        {
            return await _context.Payments.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Payment>> GetPayment(Guid id)
        {
            var Payment = await _context.Payments.FindAsync(id);
            if (Payment == null)
            {
                return NotFound();
            }
            return Payment;
        }

        [HttpPost]
        public async Task<ActionResult<Payment>> CreatePayment(Payment Payment)
        {
            _context.Payments.Add(Payment);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetPayment), new { id = Payment.Id }, Payment);
        }
    }
}
