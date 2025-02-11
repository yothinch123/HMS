using BackendNew.Data;
using BackendNew.Models;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
// Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
builder.Services.AddOpenApi();

builder.Services.AddDbContext<HospitalDbContext>(options =>
    options.UseNpgsql(builder.Configuration.GetConnectionString("DefaultConnection")));

builder.Services.AddControllers();
var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

app.UseHttpsRedirection();

app.MapGet("/patients", async (HospitalDbContext dbContext) =>
{
    Console.WriteLine($"Get data patients");
    var patients = await dbContext.Patients.ToListAsync();
    if (patients == null || patients.Count == 0)
    {
        return Results.NotFound(new ApiResponse<string>(404, null, "No patients found"));
    }
    return Results.Ok(new ApiResponse<List<Patient>>(200, patients));
})
.WithName("GetPatients");

app.MapGet("/patients/{id}", async (Guid id, HospitalDbContext context) =>
{
    var patient = await context.Patients.FindAsync(id);
    if (patient == null)
    {
        return Results.NotFound(new ApiResponse<string>(404, null, "Patient not found"));
    }
    return Results.Ok(new ApiResponse<Patient>(200, patient));
});

app.MapGet("/users", async (HospitalDbContext dbContext) =>
{
    Console.WriteLine($"Get data user");
    var users = await dbContext.Users.ToListAsync();
    if (users == null || users.Count == 0)
    {
        return Results.NotFound(new ApiResponse<string>(404, null, "No users found"));
    }
    return Results.Ok(new ApiResponse<List<User>>(200, users));
})
.WithName("GetUsers");

app.MapPost("/patients", async (HospitalDbContext dbContext, Patient patient) =>
{
    if (patient == null)
    {
        return Results.BadRequest(new ApiResponse<string>(400, null, "Invalid patient data"));
    }

    dbContext.Patients.Add(patient);
    await dbContext.SaveChangesAsync();
    return Results.Created($"/patients/{patient.Id}", new ApiResponse<Patient>(201, patient));
});

app.Run();