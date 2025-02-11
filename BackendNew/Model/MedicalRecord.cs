using System;

namespace BackendNew.Models
{
    public class MedicalRecord
    {
        public Guid Id { get; set; }
        public string? Diagnosis { get; set; }
        public string? Treatment { get; set; }
        public string? Prescription { get; set; }
        public DateTime? RecordDate  { get; set; }
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
        public DateTime UpdatedAt { get; set; } = DateTime.UtcNow;
            // คีย์นอกที่เชื่อมกับตาราง Patients
        public Guid PatientId { get; set; }
        public Patient? Patient { get; set; }  // navigation property

        // คีย์นอกที่เชื่อมกับตาราง Users (Doctor)
        public Guid DoctorId { get; set; }
        public User? Doctor { get; set; }  // navigation property
    }
}
