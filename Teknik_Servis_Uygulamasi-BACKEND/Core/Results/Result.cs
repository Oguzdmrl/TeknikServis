namespace Core.Results
{
    public class Result : IResult
    {
      
        public Result(bool success, string message) : this(success)   // result'un tek parametreli constructırına succces'i yolla ve onu da çalıştır
        {
            Message = message;

        }

        public Result(bool success) //overload
        {
            Success = success;
        }

        
        public bool Success { get; }

        public string Message { get; }
    }
}
