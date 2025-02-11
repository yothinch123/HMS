using System;

namespace BackendNew.Models
{
    public class Prescription
    {
        public Guid Id { get; set; }
        public string? MedicationName { get; set; }
        public string? Dosage { get; set; }
        public string? Instructions { get; set; }
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
        public DateTime UpdatedAt { get; set; } = DateTime.UtcNow;
    }
}
