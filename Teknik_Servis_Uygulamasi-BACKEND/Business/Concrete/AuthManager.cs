using Business.Abstract;
using Core.Results;
using Core.Security.Hashing;
using Core.Security.JWT;
using Entitites.Concrete;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Business.Concrete
{
    public class AuthManager : IAuthService
    {
        private IUserService _userService;
        private ITokenHelper _tokenHelper;

        public AuthManager(IUserService userService, ITokenHelper tokenHelper)
        {
            _userService = userService;
            _tokenHelper = tokenHelper;
        }

        public IDataResult<AccessToken> CreateAccessToken(User user)
        {
            var claims = _userService.GetClaims(user);
            var accessToken = _tokenHelper.CreateToken(user, claims);
            return new DataResult<AccessToken>(accessToken, true,"Token Oluşturuldu.");
        }

        public IDataResult<User> Login(UserLogin userLoginDto)
        {
            var userToCheck = _userService.GetByMail(userLoginDto.Email);
            if (userToCheck is null)
                return new DataResult<User>(null,false,"Kullanıcı Bulunamadı");
            

            if (!HashingHelper.VerifyPasswordHash(userLoginDto.Password, userToCheck.PasswordHash, userToCheck.PasswordSalt))
            {
                return new DataResult<User>(null,false,"Şifre Hatalı");
            }

            return new DataResult<User>(userToCheck,true,"Giriş Başarılı.");
        }

        public IDataResult<User> Register(UserRegister userRegisterDto, string password)
        {
            byte[] passwordHash, passwordSalt;
            HashingHelper.CreatePasswordHash(password, out passwordHash, out passwordSalt);
            var user = new User
            {
                Email = userRegisterDto.Email,
                FirstName = userRegisterDto.FirstName,
                LastName = userRegisterDto.LastName,
                PasswordHash = passwordHash,
                PasswordSalt = passwordSalt,
                Status = true
            };
            _userService.Add(user);
            return new DataResult<User>(user, true);
        }

        public IResult UserExists(string email)
        {
            if (_userService.GetByMail(email) is not null)
            {
                return new Result(false,"Kullanıcı zaten var.");
            }
            return new Result(true);
        }
    }
}
