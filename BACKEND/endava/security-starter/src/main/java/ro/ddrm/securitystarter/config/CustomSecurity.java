package ro.ddrm.securitystarter.config;

import org.springframework.security.config.annotation.web.builders.HttpSecurity;

@FunctionalInterface
public interface CustomSecurity {

  void customize(HttpSecurity http);
}
