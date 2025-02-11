public class ApiResponse<T>
{
    public int Status { get; set; }
    public T? Data { get; set; }
    public string? Error { get; set; }

    public ApiResponse(int status, T? data, string? error = null)
    {
        Status = status;
        Data = data;
        Error = error;
    }
}
