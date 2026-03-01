package ro.ddrm.authserver.factory;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import ro.ddrm.authserver.dto.request.Register;
import ro.ddrm.authserver.model.User;
import ro.ddrm.authserver.repository.UserRepository;

@Component
public class UserFactory {

  private final UserRepository userRepository;
  private final PasswordEncoder passwordEncoder;

  public UserFactory(UserRepository userRepository,
                     PasswordEncoder passwordEncoder) {
    this.userRepository = userRepository;
    this.passwordEncoder = passwordEncoder;
  }

  public User toUser(Register request) {

    User user = User.builder()
                    .email(request.email())
                    .password(passwordEncoder.encode(request.password()))
                    .build();

    return userRepository.save(user);
  }
}
