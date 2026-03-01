package ro.ddrm.authserver.repository;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import ro.ddrm.authserver.model.User;

public interface UserRepository extends JpaRepository<User, String> {

  Optional<User> findByEmail(String email);

  boolean existsByEmail(String email);
}
