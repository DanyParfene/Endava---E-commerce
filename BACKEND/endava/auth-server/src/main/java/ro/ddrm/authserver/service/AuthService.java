package ro.ddrm.authserver.service;

import jakarta.transaction.Transactional;
import java.time.Duration;
import java.util.function.Supplier;
import org.springframework.stereotype.Service;
import ro.ddrm.authserver.dto.request.Register;
import ro.ddrm.authserver.dto.response.UserDto;
import ro.ddrm.authserver.factory.UserFactory;
import ro.ddrm.authserver.mapper.UserMapper;
import ro.ddrm.authserver.model.User;
import ro.ddrm.authserver.repository.UserRepository;
import ro.ddrm.securitystarter.config.JwtConfig;
import ro.ddrm.shared.exceptions.ConflictException;
import ro.ddrm.shared.exceptions.ForbiddenException;
import ro.ddrm.shared.exceptions.NotFoundException;
import ro.ddrm.shared.redis.RedisService;


@Service
public class AuthService {

  private final UserRepository userRepository;
  private final UserMapper userMapper;
  private final RedisService redisService;
  private final UserFactory userFactory;
  private final Supplier<String> generateToken;
  private final JwtConfig jwtConfig;

  public AuthService(UserRepository userRepository, UserMapper userMapper,
                     RedisService redisService, UserFactory userFactory,
                     Supplier<String> generateToken, JwtConfig jwtConfig) {
    this.userRepository = userRepository;
    this.userMapper = userMapper;
    this.redisService = redisService;
    this.userFactory = userFactory;
    this.generateToken = generateToken;
    this.jwtConfig = jwtConfig;
  }

  public UserDto register(Register request) {

    if (userRepository.existsByEmail(request.email())) {
      throw new ConflictException(
          "Email %s is already in use".formatted(request.email()));
    }

    User user = userFactory.toUser(request);

    String token = generateToken.get();
    redisService.setKey(user.getId() + ":verifyAccount", token,
                        Duration.ofHours(1));

    return userMapper.toUserDto(user);
  }

  @Transactional
  public UserDto verifyAccount(String userId, String token) {

    User user = userRepository.findById(userId).orElseThrow(
        () -> new NotFoundException("This user does not exist"));

    String securityToken =
        redisService.getKey(userId + ":verifyAccount")
            .orElseThrow(()
                             -> new ForbiddenException(
                                 "For your account there isn't a valid "
                                 +
                                 "security token for verifying your account"));

    if (!securityToken.equals(token)) {
      throw new ForbiddenException("You security token is not valid");
    }

    user.setVerified(true);
    redisService.deleteKey(userId + ":verifyAccount")
        .orElseThrow(() -> new NotFoundException(""));

    return userMapper.toUserDto(user);
  }

  public void Login() {
    
  }
}
