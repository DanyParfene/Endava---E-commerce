package ro.ddrm.shared.token;

import java.util.UUID;
import java.util.function.Supplier;
import org.springframework.boot.autoconfigure.AutoConfiguration;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;

@AutoConfiguration
@ComponentScan(basePackageClasses = TokenAutoConfiguration.class)
public class TokenAutoConfiguration {

  @Bean
  public Supplier<String> generateToken() {
    return () -> UUID.randomUUID().toString();
  }
}
