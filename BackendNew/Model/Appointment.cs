using System;

namespace BackendNew.Models
{
    public class Appointment
    {
        public Guid Id { get; set; }
        public DateTime? Appointmentate { get; set; }
        public string? ReasonForVisit { get; set; }
        public string? Status { get; set; }
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    }
}
