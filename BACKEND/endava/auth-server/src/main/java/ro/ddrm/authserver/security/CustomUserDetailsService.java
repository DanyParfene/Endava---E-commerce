package ro.ddrm.authserver.security;

import org.springframework.security.core.userdetails.UserDetailsService;
import ro.ddrm.authserver.mapper.UserMapper;
import ro.ddrm.authserver.model.User;
import ro.ddrm.authserver.repository.UserRepository;
import ro.ddrm.shared.exception.NotFoundException;

public class CustomUserDetailsService implements UserDetailsService {

  private final UserRepository userRepository;
  private final UserMapper userMapper;

  public CustomUserDetailsService(UserRepository userRepository,
                                  UserMapper userMapper) {
    this.userRepository = userRepository;
    this.userMapper = userMapper;
  }

  @Override
  public CustomUserDetails loadUserByUsername(String email) {

    User user = userRepository.findByEmail(email).orElseThrow(
        ()
            -> new NotFoundException(
                "User with this email %s does not exist".formatted(email)));

    return userMapper.toCustomUserDetails(user);
  }
}
